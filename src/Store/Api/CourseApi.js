

import apiClient from "./ClientApi";


export async function GetCoursesApi() {
    const response = await apiClient.get("/api/Course")
    console.log(response)
    return response.data;
}

export async function GetCourse(id) {
    const response = await apiClient.get(`/api/Course/${id}`)
    return response.data;
}