


import { useSelector } from "react-redux";
import { Navigate, Outlet} from "react-router-dom"

export default function ProtectedRoute() {

  const accessToken = useSelector((state) => state.auth.authmodel.token);

  if(accessToken){
    return <Navigate to="/login" replace />
  }
  return (
    <>
      <Outlet />
    </>
  )
  
}
