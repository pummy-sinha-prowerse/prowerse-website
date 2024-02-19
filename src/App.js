// import logo from "./logo.svg";
import "./App.css";
import React from "react";
import About from "./Pages/About";
import Navbar from "./Pages/NavBar";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Service from "./Pages/Services";
import ContactUS from "./Pages/ContactUs";
import Testimonials from "./Pages/Testimonials";
import Careers from './Pages/Careers';
import Blog from "./Pages/Blog";
import Post1 from "./Pages/post-1";
import Post3 from "./Pages/post-3";
import Post2 from "./Pages/post-2";
import ProductEngineering from "./Pages/ProductEngineering";
import BuildYourTeam from "./Pages/BuildYourTeam";
import ViewCaseStudy from "./Pages/ViewCaseStudy";
import BuildYourDedicatedTeam from "./Pages/BuildYourDedicatedTeam";
import JobDescription from "./Pages/job-description";
import PostResume from "./Pages/post-resume";

import "bootstrap/dist/css/bootstrap.min.css";
function App() {

  return (
    // <div className="App">
    <>
    <Navbar />
      {/* <header id="header" className={`fixed-top d-flex align-items-center  ${isMenuOpen ? 'header-scrolled' : ''}`}>
        <div className="container d-flex align-items-center">
         
          <Link to="/" className="logo me-auto">
            <img src="assets/img/prowerse.png" alt="logo" />
          </Link>
          <Navbar />
          <Link to="/contact" className="get-started-btn scrollto">
            Let's Talk
          </Link>
        </div>
      </header> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<ContactUS />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog-product" element={<Post1 />} />
        <Route path="/blog-infra" element={<Post2 />} />
        <Route path="/blog-cloud" element={<Post3 />} />
        <Route path="/hire-developers" element={<Post3 />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/product" element={<ProductEngineering/>}/>
        <Route path="/buildyourteam" element={<BuildYourTeam/>}/>
        <Route path="/algo-trader" element={<ViewCaseStudy/>}/>
        <Route path="/build-your-dedicated-team" element={<BuildYourDedicatedTeam/>}/>
        <Route path="/job-description" element={<JobDescription/>}/>
        <Route path="/post-resume" element={<PostResume/>}/>

        


      </Routes>
    </>
    // </div>
  );
}

export default App;
