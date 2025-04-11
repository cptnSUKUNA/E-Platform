
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Footer from "./components/Footer";
import Home from "./pages/Home/Home";
import Courses from "./pages/Courses/Courses";
import YearCard from "./pages/Home/components/years/YearCard";
import Years from "./pages/Home/components/years/Years";
import AllCourses from "./pages/Courses/component/AllCourses";
import YearDetails from "./pages/Home/components/years/YearDetails";
import CourseDetails from "./pages/courseDetails/CourseDetails";
import ProtectedRoute from "./components/ProtectedRoute";
import MyCourses from "./pages/Courses/MyCourses";
import AssistantProtectedRoute from "./components/AssistantProtectedRoute";
import AssistantHome from "./pages/Assistant/AssistantPage/AssistantHome";
import AssistantStudents from "./pages/Assistant/AssistantPage/AssistantStudents";
import AssistantCourse from "./pages/Assistant/AssistantPage/AssistantCourse";
import AssistantPayment from "./pages/Assistant/AssistantPage/AssistantPayment";
import AssistantCourseControl from "./pages/Assistant/AssistantPage/AssistantCourseControl";
import AssistantExamControl from "./pages/Assistant/AssistantPage/AssistantExamControl";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";
function App() {
  const queryClient = new QueryClient();
  
  return (
    <QueryClientProvider client={queryClient}>
    <div className="flex flex-col justify-between h-[100vh]">
      <BrowserRouter >
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="/login"  element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/footer" element={<Footer />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/courses/details/:id" element={<CourseDetails />} />
            <Route path="/allCourses" element={<AllCourses />} />
            <Route path="/yearCard" element={<YearCard />} />
            <Route path="/years" element={<Years />} />
            <Route path="/courses/years/:yearId" element={<YearDetails />} />
            <Route element={null}>
              <Route path="/myCourses" element={<MyCourses />} />
              <Route path="/assistant" element={<AssistantProtectedRoute/>}>
                <Route path="dashboard" element={<AssistantHome/>} />
                <Route path="Courses" element={<AssistantCourse/>} />
                <Route path="Courses/:courseId" element={<AssistantCourseControl/>} />
                <Route path="Students" element={<AssistantStudents/>} />
                <Route path="Exams/:courseId" element={<AssistantExamControl/>} />
                <Route path="Payments" element={<AssistantPayment/>} />
              </Route>

            </Route>
          </Route>
          
        </Routes>
      </BrowserRouter>
    </div>
    <ReactQueryDevtools initialIsOpen={false} />
    <Toaster toastOptions={{
      success: {
        style: {
          background: "green",
          color: "white",
        },
        error: {
          style: {
            background: "red",
            color: "white",
          },
        }
      }
    }
      
    }/>
    </QueryClientProvider>
  );
}

export default App;
