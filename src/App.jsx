import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import LandingPage from "./components/LandingPage";
import Featureprojects from "./components/Featureprojects";
import ProjectDetails from "./components/projectdetails";
import Blog from "./components/Blog";
import Login from "./components/Login";
import About from "./components/AboutUs";
import CommercialProjects from "./components/CommercialProjects";
import Careers from "./components/Careers";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/residential/ongoing-projects" element={<Home />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/feauturedprojects" element={<Featureprojects />} />
        <Route path="/projectdetails" element={<ProjectDetails />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/customer-login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/commercial-projects" element={<CommercialProjects />} />
        <Route path="/careers" element={<Careers />} />
      </Routes>
    </BrowserRouter>
  );
}
