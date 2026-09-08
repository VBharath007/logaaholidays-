import re
import json

with open('src/pages/PackageDetails.tsx', 'r', encoding='utf-8') as f:
    pd = f.read()

# Add import if missing
if 'useSEO' not in pd[:1000]:
    pd = pd.replace("import { useParams, Link } from 'react-router-dom';", "import { useParams, Link } from 'react-router-dom';\nimport { useSEO } from '../hooks/useSEO';")

# Find the exact component declaration
target_str = '''export function PackageDetails() {
  const { packageSlug } = useParams();
  const [activeTab, setActiveTab] = useState('itinerary');

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const pkg = packageSlug 
    ? Object.values(packagesDatabase).find(p => generateSlug(p.title) === packageSlug) 
    : undefined;'''

replacement_str = '''export function PackageDetails() {
  const { packageSlug } = useParams();
  const [activeTab, setActiveTab] = useState('itinerary');

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const pkg = packageSlug 
    ? Object.values(packagesDatabase).find(p => generateSlug(p.title) === packageSlug) 
    : undefined;

  useSEO(
    pkg ? pkg.title : 'Tour Package Details',
    pkg ? `Explore the best ${pkg.title} with Logaa Holidays.` : 'Tour Package Details',
    pkg && pkg.keywords ? pkg.keywords : 'tour packages, logaa holidays'
  );'''

# If replace_file_content damaged the JSON, we don't care because we will rebuild the JSON dictionary anyway.
# BUT wait! Does the target_str still exist? replace_file_content FAILED to replace it! So it MUST still exist!
if target_str in pd:
    pd = pd.replace(target_str, replacement_str)
    print("Injected useSEO into PackageDetails")
else:
    print("Could not find the component declaration to inject useSEO!")

with open('src/pages/PackageDetails.tsx', 'w', encoding='utf-8') as f:
    f.write(pd)
