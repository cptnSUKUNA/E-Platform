import apiClient from "./ClientApi";

export async function LoginApi(LoginDto) {
    const response = await apiClient.post("/api/Account/login", LoginDto);
    return response.data;
}

export async function RegisterApi(RegisterDto) {
    const response = await apiClient.post("/api/Account/register", RegisterDto);
    return response.data;
}