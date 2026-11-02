import {context} from './scaffold.mjs';
export const sampleInput = "Find all deadlines for student S001 and generate a chronological study plan.";
// Coordinate course/deadline tools, aggregate, plan, handle failures, and stop. See the diagnostic specification for requirements and scoring.
export async function run(input = sampleInput, dependencies = context()) {
  void input; void dependencies;
  throw new Error('TODO: implement this diagnostic independently');
}
