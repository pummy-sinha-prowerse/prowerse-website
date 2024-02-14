// About.js
import React, { useState, useEffect } from "react";
import Footer from "./Footer";
import { Link } from "react-router-dom";
// import Count from "../Component/Count";

function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <section id="hero-about" className="d-flex align-items-center">
        <div className="container" data-aos="zoom-out" data-aos-delay="100">
          <div className="row">
            <div className="col-xl-6">
              <h1>#Company Insights</h1>
              {/* <h2>Software Development. Delivered.</h2> */}
              <h5>
                Embark on a journey through our company's insights—a tapestry
                woven with innovation, milestones, and a relentless pursuit of
                excellence. From humble beginnings to soaring achievements, our
                story is etched with dedication, fueled by a vision to redefine
                industry norms. Explore the heartbeat of our organization, where
                every challenge becomes an opportunity, and every success is a
                testament to our unwavering commitment.
              </h5>
              {/* <a href="#about" className="btn-get-started scrollto">
                Get Started
              </a> */}
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

      {/* <section id="about" className="about section-bg">
        <div className="container" data-aos="fade-up">
          <div className="row no-gutters">
            <div className="content col-xl-5 d-flex align-items-stretch">
              <div className="content">
                <h3>Prowerse Values</h3>
                <p>
                  Prowerse believes in a personalized approach to every
                  customer. The selection of development practice is tailored to
                  customer's specific business needs. Be it classical
                  methodologies, such as Waterfall or Prototype development, or
                  modern approaches like Agile, Kanban, Lean or Extreme
                  Programming, Prowerse ensures a timely delivery of the
                  project.
                </p>
                <a href="#" className="about-btn">
                  <span>About us</span> <i className="bx bx-chevron-right"></i>
                </a>
              </div>
            </div>
            <div className="col-xl-7 d-flex align-items-stretch">
              <div className="icon-boxes d-flex flex-column justify-content-center">
                <div className="row">
                  <div
                    className="col-md-6 icon-box"
                    data-aos="fade-up"
                    data-aos-delay="100"
                  >
                    <i className="bx bx-body"></i>
                    <h4>People</h4>
                    <p>
                      People are the focus of fundamental belief at Prowerse. To
                      attract, hire and retain the best talents and provide
                      first-class learning, growing & working experiences is the
                      core Prowerse value.
                    </p>
                  </div>
                  <div
                    className="col-md-6 icon-box"
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    <i className="bx bx-book-reader"></i>
                    <h4>Journey</h4>
                    <p>
                      Prowerse passionately believes that moments, experiences,
                      and memories shared by team while on a project delivery
                      must be enjoyable & wholesome. As they say, Happiness is a
                      journey, not a destination.
                    </p>
                  </div>
                  <div
                    className="col-md-6 icon-box"
                    data-aos="fade-up"
                    data-aos-delay="300"
                  >
                    <i className="bx bx-receipt"></i>
                    <h4>Progress</h4>
                    <p>
                      Stay focused on the continuous march toward achieving the
                      milestones, the successes, and the breakthroughs.
                    </p>
                  </div>
                  <div
                    className="col-md-6 icon-box"
                    data-aos="fade-up"
                    data-aos-delay="400"
                  >
                    <i className="bx bx-bulb"></i>
                    <h4>Latest Thinking</h4>
                    <p>
                      Prowerse unlocks latest thinking and business values by
                      deploying calibrated and proven process methodology that
                      offers high performance business excellence.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

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
                    {/* <a href="">
                      <i className="bi bi-twitter"></i>
                    </a>
                    <a href="">
                      <i className="bi bi-facebook"></i>
                    </a>
                    <a href="">
                      <i className="bi bi-instagram"></i>
                    </a> */}
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

      {/* deticated team */}
      {/* <section id="about" className="about section-bg hire-developers-sec about-box">
        <div className="container" data-aos="fade-up">
          <div className="section-title text-center position-relative pb-3 mx-auto">
            <h2>HIRE DEDICATED DEVELOPERS</h2>
          </div>
          <div className="sub-section-title">
            <p>
              Hire dedicated developers from our team at a reasonable price,
              customized 100% as per your requirements. We offer world-class
              development skills with a strong inhouse team of 300+ dedicated
              web, mobile app and software developers.
            </p>
          </div>
          <div class="row">
          <div class="col-xl-3 col-md-6 d-flex align-items-stretch aos-init aos-animate" data-aos="zoom-in" data-aos-delay="100">
            <div class="icon-box">
              <div class="icon"><i class="bx bxl-dribbble"></i></div>
              <h4><a href="">Lorem Ipsum</a></h4>
              <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
            </div>
          </div>

          <div class="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-md-0 aos-init aos-animate" data-aos="zoom-in" data-aos-delay="200">
            <div class="icon-box">
              <div class="icon"><i class="bx bx-file"></i></div>
              <h4><a href="">Sed ut perspici</a></h4>
              <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
            </div>
          </div>

          <div class="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0 aos-init aos-animate" data-aos="zoom-in" data-aos-delay="300">
            <div class="icon-box">
              <div class="icon"><i class="bx bx-tachometer"></i></div>
              <h4><a href="">Magni Dolores</a></h4>
              <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</p>
            </div>
          </div>

          <div class="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0 aos-init aos-animate" data-aos="zoom-in" data-aos-delay="400">
            <div class="icon-box">
              <div class="icon"><i class="bx bx-layer"></i></div>
              <h4><a href="">Nemo Enim</a></h4>
              <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
            </div>
          </div>

        </div>

         
        </div>
      </section> */}

      {/* <!-- ======= Team Section ======= --> */}
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
                  Our team will contact you within 1-2 business days to discuss the project and its execution plan in depth, and to offer the best suited solution for the given business scenario. 
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
                  Based on the initial discussions and requirements review, we can discuss and agree on the relevant engagement model for project execution. Timelines would be transparently discussed and mutually agreed upon before the project kick-off.
                  </p>
                </div>
              </li>
              <li className="step4">
                <div className="dashed-circle get-started"></div>
                <div className="figcaption">
                  <h4 className="heading">
                  LETS CREATE ANOTHER SUCCESS-STORY
                  </h4>
                  <p className="sub-title-area">
                  We mutually agree on the engagement terms, defining milestones and moving forward to creating another success-story.
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
