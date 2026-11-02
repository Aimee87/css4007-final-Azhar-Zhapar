import {complete} from '../src/model-client.mjs';
import {getCourseInfo,getStudentCourses,getCourseDeadlines} from './mock-data.mjs';
// Independent per-exercise dependency injection; instructors can provide a model client.
export function context(model = complete) {
  const tools = {get_course_info:({course_id})=>getCourseInfo(course_id),get_student_courses:({student_id})=>getStudentCourses(student_id),get_course_deadlines:({course_id})=>getCourseDeadlines(course_id)};
  return {model, async dispatch(name,args) { if (!Object.hasOwn(tools,name)) throw new Error('Unknown tool'); return tools[name](args); }};
}
