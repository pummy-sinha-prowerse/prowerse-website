import React, { useEffect } from "react";
import Footer from "./Footer";
import { Link } from "react-router-dom";
// import Count from "../Component/Count";

function Careers() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  // const data = {
  //   counts: [
  //     {
  //       id: "001",
  //       label: "Years of Industry Experience",
  //       number: "15",
  //       duration: "5",
  //       type: "",
  //       icon: "bi bi-emoji-smile",
  //     },
  //     {
  //       id: "002",
  //       label: "Client Retention Rate",
  //       number: "92",
  //       duration: "5",
  //       type: "%",
  //       icon: "bi bi-journal-richtext",
  //     },
  //     {
  //       id: "003",
  //       label: "Projects Executed",
  //       number: "500",
  //       duration: "5",
  //       type: "+",
  //       icon: "bi bi-headset",
  //     },
  //     {
  //       id: "004",
  //       label: "Reduction In Your IT Budgets",
  //       number: "50",
  //       duration: "5",
  //       type: "%",
  //       icon: "bi bi-people",
  //     },
  //   ],
  // };
  return (
    <>
      <section id="hero-career" className="d-flex align-items-center">
        <div className="container" data-aos="zoom-out" data-aos-delay="100">
          <div className="row">
            <div className="col-xl-6">
              <h1>Become a Part of Prowerse Family</h1>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>

              <h5>
                We are fast-driven professionals who are not afraid to think out
                of the box and pursue excellence. A career with Prowerse will
                motivate you to aspire high and perform your best without any
                obstructions from the hierarchy.
              </h5>
              {/* <a href="#about" className="btn-get-started scrollto">
                Get Started
              </a> */}
            </div>
          </div>
        </div>
      </section>
      <main id="main">
        {/* <!-- ======= Counts Section ======= --> */}
        {/* <section id="counts" className="counts">
          <div className="container" data-aos="fade-up">
            <div className="row">
              {data.counts.map((count) => (
                <>
                  <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
                    <div className="count-box">
                      <i className={count.icon}></i>
                      <span
                        data-purecounter-start="0"
                        data-purecounter-end="345"
                        data-purecounter-duration="1"
                        className="purecounter"
                      ></span>
                      <Count key={count.id} data={count} />
                      <p>{count.label}</p>
                    </div>
                  </div>
                </>
              ))}
            </div>
          </div>
        </section> */}
        {/* <!-- ======= About Section ======= --> */}
        {/* <section id="services" className="services section-bg">
        <div className="container" data-aos="fade-up">
          <div className="section-title text-center position-relative pb-3 mx-auto">
            <h2>We Care For Our Team</h2>
            
          </div>

          <div className="row" style={{marginTop: "20px"}}>
            <div className="col-md-4">
              <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
                <i className="bi bi-clock"></i>
                <h4>
                  <a href="#">Flexible Timings</a>
                </h4>
               
              </div>
            </div>
            <div className="col-md-4 mt-4 mt-md-0">
              <div className="icon-box" data-aos="fade-up" data-aos-delay="200">
                <i className="bi bi-cake-fill"></i>
                <h4>
                  <a href="#">Festive Celebrations</a>
                </h4>
               
              </div>
            </div>
            <div className="col-md-4">
              <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
                <i className="bi bi-code"></i>
                <h4>
                  <a href="#">Training & Development</a>
                </h4>
               
              </div>
            </div>
            <div className="col-md-4 mt-4 mt-md-0">
              <div className="icon-box" data-aos="fade-up" data-aos-delay="200">
                <i className="bi bi-capsule"></i>
                <h4>
                  <a href="#">Mental Health & Well Being</a>
                </h4>
               
              </div>
            </div>
            <div className="col-md-4 mt-4 mt-md-0">
              <div className="icon-box" data-aos="fade-up" data-aos-delay="200">
                <i className="bi bi-award"></i>
                <h4>
                  <a href="#">Rewards & Recognitions</a>
                </h4>
               
              </div>
            </div>
            <div className="col-md-4 mt-4 mt-md-0">
              <div className="icon-box" data-aos="fade-up" data-aos-delay="200">
                <i className="bi bi-calendar4-event"></i>
                <h4>
                  <a href="#">Maternal Paternal Leaves</a>
                </h4>
               
              </div>
            </div>
          </div>
        </div>
      </section> */}
     
      <section id="services" className="services ">
        <div className="container" data-aos="fade-up">
          <div className="section-title text-center position-relative pb-3 mx-auto">
            <h2>Find Your Place</h2>
            {/* <p>Software Development Outsourcing</p> */}
          </div>

          <div className="row" style={{marginTop: "20px"}}>
            <div className="col-md-6 card-first">
              <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
                <i className="bi bi-filetype-jsx"></i>
                <h4>
                  <a href="#">React Js</a>
                </h4>
               
              </div>
            </div>
            <div className="col-md-6 mt-4 mt-md-0">
              <div className="icon-box" data-aos="fade-up" data-aos-delay="200">
                <i className="bi bi-server"></i>
                <h4>
                  <a href="#">ASP .Net</a>
                </h4>
              
              </div>
            </div>
            <div className="col-md-6">
              <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
                <i className="bi bi-filetype-php"></i>
                <h4>
                  <a href="#">PHP</a>
                </h4>
               
              </div>
            </div>
            <div className="col-md-6 mt-4 mt-md-0 card-last">
              <div className="icon-box" data-aos="fade-up" data-aos-delay="200">
                <i className="bi bi-cpu"></i>
                <h4>
                  <a href="#">DevOps</a>
                </h4>
               
              </div>
            </div>
          </div>
        </div>
      </section>
      </main>
      {/* <!-- End #main --> */}


      {/* <!-- ======= Footer ======= --> */}
      <Footer />
    </>
  );
}
export default Careers;
