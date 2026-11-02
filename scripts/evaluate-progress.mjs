import fs from 'node:fs';
export const rubrics={D:{functionality:40,architecture:20,testing:20,defense:20},C:{functionality:35,architecture:25,testing:20,defense:20},A:{functionality:30,architecture:25,testing:20,defense:15,paper:10}};
export const coefficients=[0.50,0.50,0.60,0.70,0.80,0.85,0.90,0.95,1.00];
export function calculate({level,scores,verifiedActiveWeeks,override}) {
 const rubric=rubrics[level]; if(!rubric) throw new Error('Level must be D, C, or A');
 if(!Number.isInteger(verifiedActiveWeeks)||verifiedActiveWeeks<0||verifiedActiveWeeks>8) throw new Error('Verified active weeks must be 0–8');
 if(!scores || Object.keys(scores).length!==Object.keys(rubric).length || Object.keys(scores).some(k=>!Object.hasOwn(rubric,k))) throw new Error('Provide exactly the rubric components for this level');
 for(const [k,max] of Object.entries(rubric)) if(typeof scores[k]!=='number'||!Number.isFinite(scores[k])||scores[k]<0||scores[k]>max) throw new Error('Invalid score: '+k);
 let coefficient=coefficients[verifiedActiveWeeks];
 if(override) {if(typeof override.reason!=='string'||!override.reason.trim()||typeof override.coefficient!=='number'||!Number.isFinite(override.coefficient)||override.coefficient<0.5||override.coefficient>1) throw new Error('Override requires justification and coefficient between 0.50 and 1.00');coefficient=override.coefficient;}
 const raw=Object.values(scores).reduce((a,b)=>a+b,0);
 return {level,raw,verifiedActiveWeeks,coefficient,adjusted:Math.round((raw*coefficient+Number.EPSILON)*100)/100,override:override??null,notice:'Preview only; no grade is recorded or published. Instructor determines demonstrated level and meaningful weeks.'};
}
if(process.argv[1]?.endsWith('evaluate-progress.mjs')) {try {if(!process.argv[2]) throw new Error('Pass the path to a private JSON input; see README.md');console.log(JSON.stringify(calculate(JSON.parse(fs.readFileSync(process.argv[2],'utf8'))),null,2));} catch(e) {console.error(e.message);process.exitCode=1;}}
