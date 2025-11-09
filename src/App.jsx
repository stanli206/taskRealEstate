import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import LandingPage from "./components/LandingPage";
import Featureprojects from "./components/Featureprojects";
import ProjectDetails from "./components/projectdetails";
import Blog from "./components/Blog";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/fp" element={<Featureprojects />} />
        <Route path="/projectdetails" element={<ProjectDetails />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </BrowserRouter>
  );
}
