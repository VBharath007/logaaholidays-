const fs = require('fs');
const path = require('path');

// ============================================================================
// SAFE INJECTOR SCRIPT
// Use this script to safely add new packages to PackageDetails.tsx
// It prevents data loss by checking for Duplicate IDs and safely appending.
// ============================================================================

// 1. PLACE YOUR NEW PACKAGES HERE
const newPackages = {
    // Example: Paste your new package object here
    // "10001": { ... }
};

// 2. PATH TO DATABASE
const dbPath = path.join(__dirname, '..', 'src', 'pages', 'PackageDetails.tsx');

function injectSafely() {
    console.log("Starting Safe Injection...");
    
    // Read the file
    let content = fs.readFileSync(dbPath, 'utf8');
    
    // Check for duplicate IDs to prevent OVERWRITING existing data
    let hasDuplicates = false;
    for (const key of Object.keys(newPackages)) {
        // A simple check if the key already exists like '9101': or "9101":
        const regex1 = new RegExp(`'${key}'\\s*:`);
        const regex2 = new RegExp(`"${key}"\\s*:`);
        if (regex1.test(content) || regex2.test(content)) {
            console.error(`🚨 DANGER: Package ID '${key}' already exists in the database!`);
            console.error(`   If we proceed, it will OVERWRITE and DELETE the old data for '${key}'.`);
            hasDuplicates = true;
        }
    }

    if (hasDuplicates) {
        console.error("❌ Injection aborted to protect existing data. Please change the IDs in your new data and try again.");
        process.exit(1);
    }

    // Convert new packages to string format
    let pString = "";
    for (const k in newPackages) {
        pString += `\n  '${k}': ` + JSON.stringify(newPackages[k], null, 4) + ",";
    }

    // Safely insert immediately after the declaration
    const marker = "export const packagesDatabase: Record<string, any> = {";
    const markerIndex = content.indexOf(marker);

    if (markerIndex !== -1) {
        const insertIdx = markerIndex + marker.length;
        const before = content.slice(0, insertIdx);
        const after = content.slice(insertIdx);
        
        fs.writeFileSync(dbPath, before + pString + after, 'utf8');
        console.log("✅ Successfully injected new packages without losing any data!");
    } else {
        console.error("❌ Could not find the database marker in the file.");
    }
}

// Run the function
if (Object.keys(newPackages).length > 0) {
    injectSafely();
} else {
    console.log("⚠️ No new packages found in the 'newPackages' object. Please paste your data first.");
}
