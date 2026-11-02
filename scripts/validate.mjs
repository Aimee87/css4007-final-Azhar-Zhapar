import fs from 'node:fs';
import {validateProposal} from './validate-proposal.mjs';
import {validateReport} from './validate-weekly-report.mjs';
import {read,fail} from './report-lib.mjs';
const config=JSON.parse(read('project.config.json'));
const errors=[];
const offset=5*60*60*1000;
const today=new Date(Date.now()+offset).toISOString().slice(0,10);
const requested=process.env.REQUIRED_WEEK;
if(requested && (!/^\d+$/.test(requested)||!config.schedule.some(w=>w.week===Number(requested)))) errors.push('REQUIRED_WEEK must be 10–17');
const starter=process.env.GITHUB_REPOSITORY===config.instructorRepository;
const proposal=read('reports/proposal.md');
const proposalSubmitted=proposal && !/\bTODO\b/.test(proposal);
const proposalDue=!starter && today>config.schedule[0].end;
if(proposalSubmitted||proposalDue||requested) errors.push(...validateProposal(proposal));
for(const w of config.schedule) {
 const file='reports/week-'+w.week+'.md', text=read(file);
 if(!fs.existsSync(file)) errors.push('Missing report scaffold: '+file);
 const submitted=text && !/\bTODO\b/.test(text);
 const due=!starter && today>w.end;
 if(submitted||due||(requested && w.week<=Number(requested))) errors.push(...validateReport(text).map(e=>file+': '+e));
}
console.log('Checks assess report completeness only; active weeks and grades require instructor verification.');
fail(errors);
