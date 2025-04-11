import { Outlet } from "react-router-dom";
import SideBar from "../../components/SideBar";
import AssistantHeader from "./Component/AssistantHeader";
import { useState } from "react";
export default function Assistant() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  
  return (
    <div className="w-100 h-full flex flex-row  ">
        <SideBar showsidebar={sidebarOpen} setShowSidebar={setSidebarOpen}/>
        <div className="w-full h-full overflow-y-scroll no-scrollbar  p-6 flex flex-row flex-wrap justify-center content-start">
          <AssistantHeader toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
          <Outlet/>
        </div>
    </div>
  )
}
