import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Courses from "../Courses/Courses";
import Header from "./components/header/Header";
import Years from "./components/years/Years";

import "./Home.module.css"
export default function Home() {
  return (
    <div className="container">
      <Navbar />
      <Header />
      <Years />
      <Courses/>
      <Footer />
    </div>
  );
}



