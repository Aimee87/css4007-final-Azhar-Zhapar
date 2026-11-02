import {context} from './scaffold.mjs';
export const sampleInput = "When is the AI101 exam?";
// Answer course questions using model-selected tools. See the diagnostic specification for requirements and scoring.
export async function run(input = sampleInput, dependencies = context()) {
  void input; void dependencies;
  throw new Error('TODO: implement this diagnostic independently');
}
