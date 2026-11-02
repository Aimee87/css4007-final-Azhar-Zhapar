import {sectionErrors,read,fail} from './report-lib.mjs';
export const headings=["Project Title","Problem Description","Target Users","Selected Difficulty","Expected Functionality","Proposed Functions","Proposed Agent Tools","Model Selection","Architecture","Example Requests","Evaluation Plan","Weekly Milestones"];
export function validateProposal(text) { const errors=sectionErrors(text,headings); const level=text.match(/^## Selected Difficulty\s*\n([\s\S]*?)(?=^## |(?![\s\S]))/m)?.[1]?.trim(); if(!/^[DCA](?:\s|$)/.test(level??'')) errors.push('Selected Difficulty must begin with D, C, or A'); return errors; }
if(process.argv[1]?.endsWith('validate-proposal.mjs')) fail(validateProposal(read('reports/proposal.md')));
