import re

with open('src/pages/PackageDetails.tsx', 'r', encoding='utf-8') as f:
    pd = f.read()

target = '''<h4 className="text-xl font-bold text-slate-800 mb-3">{day.title}</h4>
 <p className="text-slate-600 leading-relaxed text-sm md:text-base whitespace-pre-line leading-8">{renderClickableText(day.description)}</p>
 </div>'''

replacement = '''<h4 className="text-xl font-bold text-slate-800 mb-3">{day.title}</h4>
 {day.description && (
   <p className="text-slate-600 leading-relaxed text-sm md:text-base whitespace-pre-line leading-8">{renderClickableText(day.description)}</p>
 )}
 {(day as any).activities && Array.isArray((day as any).activities) && (
   <ul className="space-y-3 mt-4">
     {(day as any).activities.map((activity: string, actIdx: number) => {
       const cleanActivity = activity.replace(/^[•✅✔️\\t\\s]+/, '');
       return (
         <li key={actIdx} className="text-slate-600 leading-relaxed text-sm md:text-base flex items-start gap-3">
           <span className="w-2 h-2 rounded-full bg-[var(--color-primary-forest)] mt-2 flex-shrink-0" />
           <span className="leading-7">{renderClickableText(cleanActivity)}</span>
         </li>
       );
     })}
   </ul>
 )}
 </div>'''

if target in pd:
    pd = pd.replace(target, replacement)
    with open('src/pages/PackageDetails.tsx', 'w', encoding='utf-8') as f:
        f.write(pd)
    print('Successfully updated rendering logic')
else:
    print('Target not found exactly')
