
import apiClient from "./ClientApi";
export async function AddCourseApi(courseDto) {
    const response = await apiClient.post("/api/Assistant/AddCourse", courseDto);
    return response.data;
}


export async function AddLessonToCourse(courseid,lessonDto) {
    const response = await apiClient.post(`/api/Assistant/Course/${courseid}/AddLesson`, lessonDto);
    return response.data;
}

export async function UpdateCourse(courseid,courseDto) {
    const response = await apiClient.put(`/api/Assistant/UpdateCourse/${courseid}`, courseDto);
    return response.data;
}

export async function DeleteCourse(courseid) {
    const response = await apiClient.delete(`/api/Assistant/DeleteCourse/${courseid}`);
    return response.data;
}

export async function DeleteLesson(lessonid) {
    const response = await apiClient.delete(`/api/Assistant/DeleteLesson/${lessonid}`);
    return response.data;
}

export async function AddExam(courseid,examDto) {
    const response = await apiClient.post(`/api/Assistant/Course/${courseid}/AddExam`, examDto);    
    return response.data;
}

export async function AddQuestionToExam(examid,questionDto) {
    const response = await apiClient.post(`/api/Assistant/Exam/${examid}/AddQuestion`, questionDto);
    return response.data;
}

export async function UpdateExam(examid,examDto) {
    const response = await apiClient.put(`/api/Assistant/UpdateExam/${examid}`, examDto);
    return response.data;
}

export async function DeleteExam(examid) {
    const response = await apiClient.delete(`/api/Assistant/DeleteExam/${examid}`);
    return response.data;
}

export async function DeleteQuestion(questionid) {
    const response = await apiClient.delete(`/api/Assistant/DeleteQuestion/${questionid}`);
    return response.data;
}

