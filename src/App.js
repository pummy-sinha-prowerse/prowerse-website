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
import Careers from "./Pages/Careers";
import Blog from "./Pages/Blog";
import Post1 from "./Component/BlogDetails/post-1";
import Post3 from "./Component/BlogDetails/post-3";
import Post2 from "./Component/BlogDetails/post-2";
import ProductEngineering from "./Pages/ProductEngineering";
import BuildYourTeam from "./Pages/BuildYourTeam";
import ViewCaseStudyBlockChain from "./Component/ViewCaseStudy/ViewCaseStudyBlockChain";
import ViewCaseStudyHealthCare from "./Component/ViewCaseStudy/ViewCaseStudyHealthCare";
import ViewCaseStudyhealthFitness from "./Component/ViewCaseStudy/ViewCaseStudyhealthFitness";

import BuildYourDedicatedTeam from "./Pages/BuildYourDedicatedTeam";
import JobDescriptionBusiness from "./Component/JobDescription/job-description-business-executive";
import JobDescriptionDevOps from "./Component/JobDescription/job-description-devops";

import JobDescriptionPython from "./Component/JobDescription/job-description-python";

import JobDescriptionRust from "./Component/JobDescription/job-description-rustengineer";

import JobDescriptionAutomation from "./Component/JobDescription/job-description-testautomation";

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
        <Route path="/product" element={<ProductEngineering />} />
        <Route path="/buildyourteam" element={<BuildYourTeam />} />
        <Route path="/blockchain" element={<ViewCaseStudyBlockChain />} />
        <Route path="/healthcare" element={<ViewCaseStudyHealthCare />} />
        <Route path="/health-wealth-fitness" element={<ViewCaseStudyhealthFitness />} />

        <Route
          path="/build-your-dedicated-team"
          element={<BuildYourDedicatedTeam />}
        />
        <Route path="/post-resume" element={<PostResume />} />

        {/* job description */}
        <Route
          path="/job-description-business-executive"
          element={<JobDescriptionBusiness />}
        />
        <Route
          path="/job-description-automation"
          element={<JobDescriptionAutomation />}
        />
        <Route
          path="/job-description-devops"
          element={<JobDescriptionDevOps />}
        />
        <Route
          path="/job-description-python"
          element={<JobDescriptionPython />}
        />
        <Route
          path="/job-description-rust"
          element={<JobDescriptionRust />}
        />
      </Routes>
    </>
    // </div>
  );
}

export default App;
