
import { useSelector } from "react-redux"
import { Navigate} from "react-router-dom"
import Assistant from "../pages/Assistant/Assistant";
export function decodeJWT(token) {
    const base64Url = token.split('.')[1]; 
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = atob(base64); 
    return JSON.parse(jsonPayload); 
}

export default function AssistantProtectedRoute() {
  const accessToken = useSelector((state) => state.auth.authmodel.token);
 
decodeJWT(accessToken);
  const role = decodeJWT(accessToken).role
  console.log(role);
  if(role === "Assistant" || role ==="Teacher" ){
    return (
      <>
        <Assistant/>
      </>
    )
  }

  return (
    <Navigate to="/login" replace />
  )
}
