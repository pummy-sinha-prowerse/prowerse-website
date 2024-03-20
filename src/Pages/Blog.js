import React, { useEffect } from "react";
import Footer from "./Footer";
import { Link } from "react-router-dom";

function Blog() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      {/* <!-- ======= Header Section ======= --> */}
      <section id="hero" className="d-flex align-items-center">
        <div className="container" data-aos="zoom-out" data-aos-delay="100">
          <div className="row">
            <div className="col-xl-6">
              <h1>#Knowledge Center</h1>
              <h5>
                Dive into our Knowledge Center—an intellectual hub where
                insights meet innovation. Unlock the doors to wisdom as we
                curate a wealth of resources, articles, and expertise,
                empowering you to stay ahead in the dynamic world of information
                and technology.
              </h5>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Blog Section - Blog Page --> */}
      <section id="recent-posts" className="recent-posts">
        {/* <!--  Section Title --> */}

        <div className="container">
          <div className="row gy-4">
            <div
              className="col-xl-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <article>
                <div className="post-img">
                  <img
                    src="assets/img/blog/blog-1.png"
                    alt=""
                    className="img-fluid"
                  />
                </div>

                <p className="post-category">Product Engineering</p>

                <h2 className="title">
                  <a href="blog-details.html">
                    The importance of effective product engineering strategy
                  </a>
                </h2>

                <div className="d-flex align-items-center">
                  <img
                    src="assets/img/blog/pradyuman-zala.jpg"
                    alt=""
                    className="img-fluid post-author-img flex-shrink-0"
                  />
                  <div className="post-meta">
                    <p className="post-author">Pradyuman Zala</p>
                    <p className="post-date">
                      <time dateTime="2022-01-01">Aug 06, 2021</time>
                    </p>
                  </div>
                </div>
              </article>
            </div>

            <div
              className="col-xl-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <article>
                <div className="post-img">
                  <img
                    src="assets/img/blog/blog-2.png"
                    alt=""
                    className="img-fluid"
                  />
                </div>

                <p className="post-category">Infrastructure</p>

                <h2 className="title">
                  <a href="blog-details.html">
                    Infrastructure As Code and it's Relevance
                  </a>
                </h2>

                <div className="d-flex align-items-center">
                  <img
                    src="assets/img/blog/pradyuman-zala.jpg"
                    alt=""
                    className="img-fluid post-author-img flex-shrink-0"
                  />
                  <div className="post-meta">
                    <p className="post-author">Pradyuman Zala</p>
                    <p className="post-date">
                      <time dateTime="2022-01-01">July 29, 2021</time>
                    </p>
                  </div>
                </div>
              </article>
            </div>
            {/* <!-- End post list item --> */}

            <div
              className="col-xl-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <article>
                <div className="post-img">
                  <img
                    src="assets/img/blog/blog-3.png"
                    alt=""
                    className="img-fluid"
                  />
                </div>

                <p className="post-category">Cloud</p>

                <h2 className="title">
                  <a href="blog-details.html">
                    Hybrid Cloud - What, Why & How?
                  </a>
                </h2>

                <div className="d-flex align-items-center">
                  <img
                    src="assets/img/blog/pradyuman-zala.jpg"
                    alt=""
                    className="img-fluid post-author-img flex-shrink-0"
                  />
                  <div className="post-meta">
                    <p className="post-author">Pradyuman Zala</p>
                    <p className="post-date">
                      <time dateTime="2022-01-01">July 06, 2021</time>
                    </p>
                  </div>
                </div>
              </article>
            </div>
            {/* <!-- End post list item --> */}
          </div>
          {/* <!-- End recent posts list --> */}
        </div>
      </section>
      {/* <!-- End Blog Section --> */}

      {/* Benefits section start */}
      <section id="pricing" className="pricing section-bg dedicated-teams">
        <div className="container" data-aos="fade-up">
          <div className="section-title text-center position-relative pb-3 mx-auto">
            <h2>BENEFITS OF OUR DEDICATED TEAMS MODEL</h2>
          </div>

          <div className="row" style={{ marginTop: "20px" }}>
            <div className="col-lg-6 col-md-6">
              <div className="box" data-aos="fade-up" data-aos-delay="100">
                <h3>
                  EASY & COST EFFECTIVE SOLUTION FOR ENGAGING DIFFERENT KINDS OF
                  TECHNICAL GROUPS & RESOURCES.
                </h3>
                <p>
                  Dedicated Teams Model is an excellent solution if you need a
                  complete control over human and technical resources involved
                  into the development process. DTM features a high level of
                  transparency, security, flexibility and scalability. All
                  infrastructure and personnel are at your dedicated service as
                  long as you need them for a fixed monthly fee. DTM is a good
                  choice if you need a team of highly-qualified professionals
                  that will exactly match your IT and business needs.
                </p>
              </div>
            </div>

            <div className="col-lg-6 col-md-6 mt-4 mt-md-0">
              <div className="box" data-aos="fade-up" data-aos-delay="200">
                <div className="row column-box">
                  <div className="col-lg-12 col-sm-6 sm-cols">
                    <h6 className="heading">
                      <span className="benefits">BENEFITS</span> OF OUR
                      DEDICATED TEAMS MODEL
                    </h6>
                  </div>
                  <div className="col-lg-4 col-sm-6 sm-cols">
                    <p>
                      ACCESS TO A WIDE RANGE OF EXPERT IT RESOURCES WITH DIVERSE
                      SKILL SETS.
                    </p>
                  </div>
                  <div className="col-lg-4 col-sm-6 sm-cols">
                    <p>
                      READY TO USE IT INFRASTRUCTURE WITH BEST IN CLASS
                      FACILITIES.
                    </p>
                  </div>

                  <div className="col-lg-4 col-sm-6 sm-cols">
                    <p>DEDICATED PROJECT MANAGER AS SINGLE POINT OF CONTACT.</p>
                  </div>

                  <div className="col-lg-4 col-sm-6 sm-cols">
                    <p>
                      COMPLETE CONTROL OVER THE TEAM STRUCTURE AND PROJECTS
                      FLOW.
                    </p>
                  </div>

                  <div className="col-lg-4 col-sm-6 sm-cols">
                    <p>
                      TRANSPARENT ENGAGEMENT PROCESS & COMPREHENSIVE REPORTING
                      SYSTEM.
                    </p>
                  </div>

                  <div className="col-lg-4 col-sm-6 sm-cols">
                    <p>
                      ESTABLISHED INTELLECTUAL PROPERTY PROTECTION PROCEDURES.
                    </p>
                  </div>
                  <div className="col-lg-12 col-sm-6 sm-cols">
                    <p>
                      WE CAN ALSO CUSTOMIZE OUR ENGAGEMENT MODELS TO ADDRESS
                      YOUR SPECIFIC BUSINESS NEEDS. PLEASE CONTACT US REGARDING
                      YOUR PROJECT REQUIREMENTS AND ONE OUR REPRESENTATIVE SHALL
                      GET IN TOUCH WITH YOU SHORTLY.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Benefits section end */}

      {/* <!-- ======= Footer ======= --> */}
      <Footer />
    </>
  );
}
export default Blog;
