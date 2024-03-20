import React, { useState, useEffect } from "react";
import Footer from "./Footer";
import { Link } from "react-router-dom";

function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* <!-- ======= headery Section ======= --> */}
      <section id="hero-about" className="d-flex align-items-center">
        <div className="container" data-aos="zoom-out" data-aos-delay="100">
          <div className="row">
            <div className="col-xl-6">
              <h1>#Company Insights</h1>
              <h5>
                Embark on a journey through our company's insights—a tapestry
                woven with innovation, milestones, and a relentless pursuit of
                excellence. From humble beginnings to soaring achievements, our
                story is etched with dedication, fueled by a vision to redefine
                industry norms. Explore the heartbeat of our organization, where
                every challenge becomes an opportunity, and every success is a
                testament to our unwavering commitment.
              </h5>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- ======= CaseStudy Section ======= --> */}
      <section id="team" className="team">
        <div className="container" data-aos="fade-up">
          <div className="section-title text-center position-relative pb-3 mx-auto">
            <h2>CaseStudy</h2>
          </div>
          <div className="sub-section-title">
            <p>
              CASE STUDIES OF HOW OUR CLIENTS HAVE EXPERIENCED{" "}
              <span>COMPETITIVE</span>
              ADVANTAGE
            </p>
          </div>

          <div className="row">
            <div
              className="case-studies-banner row mr0 aos-init aos-animate"
              data-aos="fade-up"
            >
              <div className="item col-lg-4 col-sm-6 aos-init aos-animat">
                <div className="inner-cols banner4">
                  <div className="banner-col-content">
                    <div className="col-logo">
                      <img
                        src="prowerse-website/assets/img/casestudies/logo4.png"
                        alt=""
                      />
                    </div>
                    <p className="para">
                      AlgoTrader is the first fully-integrated algorithmic
                      trading software solution for quantitative hedge funds.
                    </p>
                    <Link to="/algo-trader" className="red-btn circle-btn">
                      View Case Study{" "}
                    </Link>
                  </div>
                </div>
              </div>
              <div className="item col-lg-4 col-sm-6 aos-init aos-animat">
                <div className="inner-cols banner4">
                  <div className="banner-col-content">
                    <div className="col-logo">
                      <img
                        src="prowerse-website/assets/img/casestudies/logo4.png"
                        alt=""
                      />
                    </div>
                    <p className="para">
                      AlgoTrader is the first fully-integrated algorithmic
                      trading software solution for quantitative hedge funds.
                    </p>
                    <Link to="/algo-trader" className="red-btn circle-btn">
                      {" "}
                      View Case Study{" "}
                    </Link>
                  </div>
                </div>
              </div>
              <div className="item col-lg-4 col-sm-6 aos-init aos-animat">
                <div className="inner-cols banner4">
                  <div className="banner-col-content">
                    <div className="col-logo">
                      <img
                        src="prowerse-website/assets/img/casestudies/logo4.png"
                        alt=""
                      />
                    </div>
                    <p className="para">
                      AlgoTrader is the first fully-integrated algorithmic
                      trading software solution for quantitative hedge funds.
                    </p>
                    <Link to="/algo-trader" className="red-btn circle-btn">
                      {" "}
                      View Case Study{" "}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- ======= Team Section ======= --> */}
      <section id="team" className="team">
        <div className="container" data-aos="fade-up">
          <div className="section-title text-center position-relative pb-3 mx-auto">
            <h2>Team</h2>
          </div>
          <div className="sub-section-title">
            <p>
              Meet our dynamic team dedicated to transforming ideas into
              cutting-edge software solutions. With diverse expertise and
              knowledge in their respective fields, we collaborate seamlessly to
              elevate your experience of engaging with Prowerse.
            </p>
          </div>

          <div className="row">
            <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
              <div className="member" data-aos="fade-up" data-aos-delay="100">
                <div className="member-img">
                  <img
                    src="prowerse-website/assets/img/team/pradyuman-zala.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="social">
                    <a
                      href="https://www.linkedin.com/in/zalaps/"
                      target="_blank"
                    >
                      <i className="bi bi-linkedin"></i>
                    </a>
                  </div>
                </div>
                <div className="member-info">
                  <h4>Pradyuman Zala</h4>
                  <span>Founder & Technology Evangelist</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- ======= Our Development Section ======= --> */}
      <section id="team" className="team">
        <div className="container" data-aos="fade-up">
          <div className="section-title text-center position-relative pb-3 mx-auto">
            <h2>OUR DEVELOPMENT PROCESS</h2>
          </div>
          <div className="sub-section-title">
            <p>
              We strive to deliver highest level of customer service through
              innovative and collaborative project management systems to build
              robust, secure and highly scalable digital solutions with superior
              quality standards.
            </p>
          </div>
          <div className="row">
            <ul className="hire-team-process">
              <li className="step1">
                <div className="dashed-circle project-requirment"></div>
                <div className="figcaption">
                  <h4 className="heading">
                    {" "}
                    SHARE YOUR PROJECT &amp; REQUIREMENTS
                  </h4>
                  <p className="sub-title-area">
                    Our team will analyze the project requirements and select
                    relevant engineers suited for the project. We also offer our
                    clients to screen our engineers as per their set criteria.
                  </p>
                </div>
              </li>
              <li className="step2">
                <div className="dashed-circle discuss-project"></div>
                <div className="figcaption">
                  <h4 className="heading">
                    DISCUSS PROJECT DETAILS WITH OUR ANALYSTS
                  </h4>
                  <p className="sub-title-area">
                    Our team will contact you within 1-2 business days to
                    discuss the project and its execution plan in depth, and to
                    offer the best suited solution for the given business
                    scenario.
                  </p>
                </div>
              </li>
              <li className="step3">
                <div className="dashed-circle terms-n-timelines"></div>
                <div className="figcaption">
                  <h4 className="heading">
                    REVIEW ENGAGEMENT TERMS & TIMELINES
                  </h4>
                  <p className="sub-title-area">
                    Based on the initial discussions and requirements review, we
                    can discuss and agree on the relevant engagement model for
                    project execution. Timelines would be transparently
                    discussed and mutually agreed upon before the project
                    kick-off.
                  </p>
                </div>
              </li>
              <li className="step4">
                <div className="dashed-circle get-started"></div>
                <div className="figcaption">
                  <h4 className="heading">LETS CREATE ANOTHER SUCCESS-STORY</h4>
                  <p className="sub-title-area">
                    We mutually agree on the engagement terms, defining
                    milestones and moving forward to creating another
                    success-story.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default About;
