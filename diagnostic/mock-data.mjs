export const courses = {AI101:{title:'Artificial Intelligence',credits:5,exam_date:'2026-12-15'},ML201:{title:'Machine Learning',credits:6,exam_date:'2026-12-18'}};
export function getCourseInfo(course_id) { return courses[course_id] ?? {error:'Course not found'}; }
export function getStudentCourses(student_id) { return student_id === 'S001' ? ['AI101','ML201'] : []; }
export function getCourseDeadlines(course_id) { return {AI101:['2026-12-10','2026-12-15'],ML201:['2026-12-12','2026-12-18']}[course_id] ?? []; }
