import apiClient  from "./ClientApi";
export async function GetStudentCourses(){
    const response = await apiClient.get("/api/Student/Courses");
    return response.data
}

export async function GetStudentCourse(id){
    const response = await apiClient.get(`/api/Student/Courses/${id}`);
    return response.data
}

export async function Getprofile(){
    const response = await apiClient.get("/api/Student/profile");
    return response.data
}

