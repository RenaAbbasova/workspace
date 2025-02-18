import { apiRequest } from "../utils/api";
// Student-related functions
export async function getStudents(teacherId) {
  return apiRequest(`/api/teacher/${teacherId}/students`);
}

export async function createStudent(teacherId, studentData) {
  return apiRequest(`/api/teacher/${teacherId}/students`, "POST", studentData);
} 
/* 
export async function updateStudent(teacherId, studentId, updates) {
  return apiRequest(`/api/teacher/${teacherId}/students`, "PUT", { studentId, ...updates });
} */

 export async function updateStudent(teacherId, studentId, studentData) {
  return apiRequest(`/api/teacher/${teacherId}/students/${studentId}`, "PUT", studentData)
}
 
export async function deleteStudent(teacherId, studentId) {
  return apiRequest(`/api/teacher/${teacherId}/students/${studentId}`, "DELETE");
}

  




