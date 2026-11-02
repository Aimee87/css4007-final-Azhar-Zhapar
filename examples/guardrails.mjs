export function validateQuiz(value) {
  if (!value || typeof value.topic !== 'string' || !value.topic.trim() || !Array.isArray(value.questions) || !value.questions.length) throw new Error('Invalid quiz');
  for (const q of value.questions) if (typeof q.question !== 'string' || !q.question.trim() || !Array.isArray(q.options) || q.options.length !== 4 || !q.options.every(x=>typeof x==='string' && x.trim()) || !Number.isInteger(q.correct_index) || q.correct_index<0 || q.correct_index>3 || typeof q.explanation !== 'string' || !q.explanation.trim()) throw new Error('Invalid question');
  return value;
}
export async function invoke(tools, name, args, {approved=false}={}) {
  if (!Object.hasOwn(tools,name)) throw new Error('Unauthorized tool');
  const tool=tools[name];
  if (!tool.validate(args)) throw new Error('Invalid arguments');
  if (tool.requiresApproval && !approved) throw new Error('Human approval required');
  return tool.execute(args);
}
export async function boundedRun(step, {maxSteps=10,maxRetries=2}={}) {
  if (!Number.isInteger(maxSteps) || maxSteps<1 || !Number.isInteger(maxRetries) || maxRetries<0) throw new Error('Invalid limits');
  let failures=0; const state={observations:[],trace:[]};
  for(let i=0;i<maxSteps;i++) {
    try { const result=await step(state); state.trace.push({step:i+1,status:'observed'}); state.observations.push(result); failures=0;
      if(result?.done===true) return {status:'completed',reason:'goal_completed',state};
    } catch { state.trace.push({step:i+1,status:'error'}); if(++failures>maxRetries) return {status:'failed',reason:'retry_limit',state}; }
  }
  return {status:'partial',reason:'step_limit',state};
}
