import axios from "axios";
import Cookies from "js-cookie";
const apiClient=axios.create(
    {
        baseURL: "http://localhost:5208/",
        timeout:10000,
        headers:{
            "Content-type":"Application/json"
        }
    }
)

apiClient.interceptors.request.use(
    (config)=>{
        const Auth = Cookies.get("Auth");
        const token = Auth ? JSON.parse(Auth).token : "";
        if(token){
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    },
    (error)=>Promise.reject(error)

)


apiClient.interceptors.response.use(
    (response)=>response,
    (error) => {
        if(error.response?.status === 401){
            console.log("Not Authorized");
            Cookies.remove("access_token");
        }
        return Promise.reject(error);
    }
)

export default apiClient;