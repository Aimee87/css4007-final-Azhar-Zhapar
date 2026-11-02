import {execFileSync} from 'node:child_process';
import fs from 'node:fs';
const config=JSON.parse(fs.readFileSync('project.config.json','utf8'));
const commits=execFileSync('git',['log','--all','--format=%H%x09%cI%x09%aI%x09%s'],{encoding:'utf8'}).trim().split('\n').filter(Boolean).map(line=>{const [sha,committed,authored,...subject]=line.split('\t');return {sha,committed,authored,subject:subject.join('\t')};});
const day=t=>new Date(new Date(t).getTime()+5*3600000).toISOString().slice(0,10);
const weeks=config.schedule.map(w=>({...w,commits:commits.filter(c=>day(c.committed)>=w.start && day(c.committed)<=w.end),inactivityCandidate:!commits.some(c=>day(c.committed)>=w.start && day(c.committed)<=w.end)}));
console.log(JSON.stringify({notice:'Observed commits only. Includes inherited history and all local branches; fetch all student branches before review. Commit dates are editable and do not prove meaningful work. Compare with upstream and remote evidence. No active weeks or coefficient are awarded automatically.',weeks},null,2));
