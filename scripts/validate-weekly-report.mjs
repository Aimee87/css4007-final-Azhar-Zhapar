import {sectionErrors,read,fail} from './report-lib.mjs';
export const headings=["Completed Work","Important Commits","Current Functionality","Problems Encountered","Solutions","What I Learned","Next Week"];
export const validateReport=text=>sectionErrors(text,headings);
if(process.argv[1]?.endsWith('validate-weekly-report.mjs')) {const week=Number(process.argv[2]); if(!Number.isInteger(week)||week<10||week>17) fail(['Use semester week 10–17']); else fail(validateReport(read('reports/week-'+week+'.md'))); }
