import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Carousel from "./components/carousel/Carousel";
import Solutions from "./components/solutions/Solutions";
import Blog from "./components/blog/Blog";
import Comparison from "./components/comparison/Comparison";
import Testimony from "./components/testimony/Testimony";
import Projects from "./components/projects/Projects";
import Footer from "./components/footer/Footer";
import Owners from "./pages/owners/Owners";
import WhoWeAre from "./pages/whoweare/WhoWeAre";
import Blogs from "./pages/blogs/Blogs";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/comparison" element={<Comparison />} />
        <Route path="/testimony" element={<Testimony />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/owners" element={<Owners />} />
        <Route path="/who-we-are" element={<WhoWeAre />} />
        <Route path="/blogs" element={<Blogs />} />
        {/* <Route path="/vendors" element={<Vendors />} />
        <Route path="/project-team" element={<ProjectTeam />} /> */}
      </Routes>
    </Router>
  );
}

const Home = () => (
  <>
    <Navbar background="transparent" />
    <Carousel />
    <Solutions />
    <Comparison />
    <Projects />
    <Blog />
    <Testimony />
    <Footer />
  </>
);

export default App;
