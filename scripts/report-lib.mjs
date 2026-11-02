import fs from 'node:fs';
export function sectionErrors(text, headings) {
  return headings.flatMap(h=>{
    const escaped=h.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');
    const match=text.match(new RegExp('^## '+escaped+'\\s*\\n([\\s\\S]*?)(?=^## |(?![\\s\\S]))','m'));
    if(!match) return ['Missing section: '+h];
    const body=match[1].trim();
    if(!body || /\b(TODO|TBD|PLACEHOLDER)\b/i.test(body)) return ['Incomplete section: '+h];
    return [];
  });
}
export function read(p) { return fs.existsSync(p) ? fs.readFileSync(p,'utf8') : ''; }
export function fail(errors) { if(errors.length) { console.error(errors.join('\n')); process.exitCode=1; } else console.log('Complete (instructor review still required).'); }
