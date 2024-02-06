// import logo from "./logo.svg";
import "./App.css";
import React from "react";
import About from "./Pages/About";
import Navbar from "./Pages/NavBar";
import { Route, Routes, Link } from "react-router-dom";
import Home from "./Pages/Home";
import Service from "./Pages/Services";
import ContactUS from "./Pages/ContactUs";
import Testimonials from "./Pages/Testimonials";
import Careers from './Pages/Careers';
import Blog from "./Pages/Blog";
import Post1 from "./Pages/post-1";
import Post3 from "./Pages/post-3";
import Post2 from "./Pages/post-3";

import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    // <div className="App">
    <>
      <header id="header" className="fixed-top d-flex align-items-center">
        <div className="container d-flex align-items-center">
          {/* <h1 ClassName="logo me-auto"><a href="index.html">Presento<span>.</span></a></h1> */}
          {/* <!-- Uncomment below if you prefer to use an image logo --> */}

          <Link to="/" className="logo me-auto">
            <img src="assets/img/prowerse.png" alt="logo" />
          </Link>
          {/* <!-- .navbar --> */}
          <Navbar />
          <Link to="/contact" className="get-started-btn scrollto">
            Let's Talk
          </Link>
        </div>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<ContactUS />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/post-1" element={<Post1 />} />
        <Route path="/blog/post-2" element={<Post2 />} />
        <Route path="/blog/post-3" element={<Post3 />} />
        <Route path="/hire-developers" element={<Post3 />} />
        <Route path="/careers" element={<Careers />} />
      </Routes>
    </>
    // </div>
  );
}

export default App;
