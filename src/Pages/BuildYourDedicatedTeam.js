import React, { useEffect } from "react";
import Footer from "./Footer";

function BuildYourDedicatedTeam() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <section id="service-about" className="d-flex align-items-center">
        <div className="container" data-aos="zoom-out" data-aos-delay="100">
          <div className="row">
            <div className="col-xl-6">
              <h1>#BuildYourOwnTeam</h1>
              {/* <h2>Software Development. Delivered.</h2> */}
              <h5>
                {/* In the realm of tech services, we're not just providers; we're
                architects of solutions. From code intricacies to system
                scalability, our tech services embody precision and
                adaptability. Whether it's troubleshooting challenges or
                envisioning future enhancements, we're your partners in
                navigating the ever-evolving landscape of technology. */}
              </h5>
              {/* <a href="#about" className="btn-get-started scrollto">
                Get Started
              </a> */}
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="about hire-developers-sec about-box">
        <div className="container" data-aos="fade-up">
          <div className="section-title text-center position-relative pb-3 mx-auto">
            <h2>You demand, we deliver.</h2>
          </div>
          <div className="sub-section-title">
            <p>
              {/* Hire dedicated developers from our team at a reasonable price,
              customized 100% as per your requirements. We offer world-class
              development skills with a strong inhouse team of 300+ dedicated
              web, mobile app and software developers. */}
            </p>
          </div>
          <div class="row">
            <div
              class="col-xl-3 col-md-6 d-flex align-items-stretch aos-init aos-animate"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <div class="icon-box">
                <div class="icon">
                  <i class="bx bxl-dribbble"></i>
                </div>
                <h4>{/* <a href="">Lorem Ipsum</a> */}</h4>
                <p>Hire dedicated engineers on a full time basis.</p>
              </div>
            </div>

            <div
              class="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-md-0 aos-init aos-animate"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <div class="icon-box">
                <div class="icon">
                  <i class="bx bx-file"></i>
                </div>
                <h4>{/* <a href="">Sed ut perspici</a> */}</h4>
                <p>
                  You can also choose to hire on part-time or hourly basis,
                  whatever fits your need.
                </p>
              </div>
            </div>

            <div
              class="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0 aos-init aos-animate"
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              <div class="icon-box">
                <div class="icon">
                  <i class="bx bx-tachometer"></i>
                </div>
                <h4>{/* <a href="">Magni Dolores</a> */}</h4>
                <p>
                  Hire single developer or build your own team of
                  cross-functional engineers or developers with similar
                  skill-set.
                </p>
              </div>
            </div>

            <div
              class="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0 aos-init aos-animate"
              data-aos="zoom-in"
              data-aos-delay="400"
            >
              <div class="icon-box">
                <div class="icon">
                  <i class="bx bx-layer"></i>
                </div>
                <h4>{/* <a href="">Nemo Enim</a> */}</h4>
                <p>
                  Experienced to work independently or in collaboration with
                  existing client team.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="services section-bg">
        <div className="container aos-init aos-animate" data-aos="fade-up">
          <div className="section-title text-center position-relative pb-3 mx-auto">
            <h2>BUILD YOUR DEDICATED TEAM</h2>
          </div>
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <div
                className="heading-value icon-box  aos-init aos-animate"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <h6>
                  Hire skilled engineers from our rich pool of individuals at
                  reasonable prices. Avail on-demand, dedicated engineers
                  through our strong, hand-picked inhouse team of Business
                  Analysts, Software Engineers, Automation QAs, DevOps,
                  service-support executives, etc. We support various businesses
                  in growing their IT teams with fast ramp-up time, keeping
                  costs in check.
                </h6>
              </div>
            </div>
          </div>
          {/* <p>VALUE FOR YOU…!!!</p> */}
          <div className="row">
            <h3 className="value-box icon-box  aos-init aos-animate ">VALUE FOR YOU…!!!</h3>
            <div className="col-md-3">
              <div
                className="icon-box aos-init aos-animate buid-your-team-box"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <i className="bi bi-briefcase"></i>
                {/* <h4>
                  <a href="#">Lorem Ipsum</a>
                </h4> */}
                <p>
                  ACCESS TO A WIDE RANGE OF EXPERIENCED IT ENGINEERS WITH
                  DIVERSE SKILL SETS.
                </p>
              </div>
            </div>
            <div className="col-md-3 mt-4 mt-md-0">
              <div
                className="icon-box aos-init aos-animate buid-your-team-box"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <i className="bi bi-card-checklist"></i>

                <p>RIGHT TO CHOOSE TEAM AS PER YOUR SET CRITERIA.</p>
              </div>
            </div>
            <div className="col-md-3 mt-4 mt-md-0">
              <div
                className="icon-box aos-init aos-animate buid-your-team-box"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <i className="bi bi-card-checklist"></i>
                {/* <h4>
                  <a href="#">Dolor Sitema</a>
                </h4> */}
                <p>FAST RAMP-UP, RAMP-DOWN TIME.</p>
              </div>
            </div>
            <div className="col-md-3 mt-4 mt-md-0">
              <div
                className="icon-box aos-init aos-animate buid-your-team-box"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <i className="bi bi-binoculars"></i>
                {/* <h4>
                  <a href="#">Nemo Enim</a>
                </h4> */}
                <p>
                  DEDICATED PROJECT MANAGER AS SINGLE POINT OF DELIVERY CONTACT.
                </p>
              </div>
            </div>
            <div className="col-md-3 mt-4 mt-md-0">
              <div
                className="icon-box aos-init aos-animate buid-your-team-box"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                <i className="bi bi-brightness-high"></i>
                {/* <h4>
                  <a href="#">Magni Dolore</a>
                </h4> */}
                <p>
                  TRANSPARENT ENGAGEMENT MODELS WITH COMPREHENSIVE REPORTING
                  SYSTEM.
                </p>
              </div>
            </div>
            <div className="col-md-3 mt-4 mt-md-0">
              <div
                className="icon-box aos-init aos-animate buid-your-team-box"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                <i className="bi bi-calendar4-week"></i>
                {/* <h4>
                  <a href="#">Eiusmod Tempor</a>
                </h4> */}
                <p>TRUSTED IP PROTECTION MECHANISMS.</p>
              </div>
            </div>
            <div className="col-md-3 mt-4 mt-md-0">
              <div
                className="icon-box aos-init aos-animate buid-your-team-box"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                <i className="bi bi-brightness-high"></i>
                {/* <h4>
                  <a href="#">Magni Dolore</a>
                </h4> */}
                <p>DIRECT COMMUNICATION CHANNELS THROUGH VARIOUS MODES.</p>
              </div>
            </div>
            <div className="col-md-3 mt-4 mt-md-0">
              <div
                className="icon-box aos-init aos-animate buid-your-team-box"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                <i className="bi bi-calendar4-week"></i>
                <h4>{/* <a href="#">Eiusmod Tempor</a> */}</h4>
                <p>ESCALATION MATRIX.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ======= Services Section ======= --> */}
      {/* <section id="pricing" className="pricing section-bg dedicated-teams">
        <div className="container" data-aos="fade-up">
          <div className="section-title text-center position-relative pb-3 mx-auto">
            <h2>BUILD YOUR DEDICATED TEAM</h2>
          </div>

          <div className="row" style={{ marginTop: "20px" }}>
            <div className="col-lg-6 col-md-6">
              <div className="box" data-aos="fade-up" data-aos-delay="100">
                <h3>BUILD YOUR DEDICATED TEAM</h3>
                <h5>Your own agile team for evolving scope of work</h5>
                <p>
                  Hire skilled engineers from our rich pool of individuals at
                  reasonable prices. Avail on-demand, dedicated engineers
                  through our strong, hand-picked inhouse team of Business
                  Analysts, Software Engineers, Automation QAs, DevOps,
                  service-support executives, etc. We support various businesses
                  in growing their IT teams with fast ramp-up time, keeping
                  costs in check.
                </p>
              </div>
            </div>

            <div className="col-lg-6 col-md-6 mt-4 mt-md-0">
              <div className="box" data-aos="fade-up" data-aos-delay="200">
                <div className="row column-box">
                  <div className="col-lg-12 col-sm-6 sm-cols">
                    <h6 className="heading">
                      <span className="benefits">VALUE FOR YOU…!!!</span>
                    </h6>
                  </div>
                  <div className="col-lg-4 col-sm-6 sm-cols">
                    <p>
                      ACCESS TO A WIDE RANGE OF EXPERIENCED IT ENGINEERS WITH
                      DIVERSE SKILL SETS.
                    </p>
                  </div>
                  <div className="col-lg-4 col-sm-6 sm-cols">
                    <p>RIGHT TO CHOOSE TEAM AS PER YOUR SET CRITERIA.</p>
                  </div>

                  <div className="col-lg-4 col-sm-6 sm-cols">
                    <p>FAST RAMP-UP, RAMP-DOWN TIME.</p>
                  </div>

                  <div className="col-lg-4 col-sm-6 sm-cols">
                    <p>
                      DEDICATED PROJECT MANAGER AS SINGLE POINT OF DELIVERY
                      CONTACT.
                    </p>
                  </div>

                  <div className="col-lg-4 col-sm-6 sm-cols">
                    <p>
                      TRANSPARENT ENGAGEMENT MODELS WITH COMPREHENSIVE REPORTING
                      SYSTEM.
                    </p>
                  </div>

                  <div className="col-lg-4 col-sm-6 sm-cols">
                    <p>TRUSTED IP PROTECTION MECHANISMS.</p>
                  </div>
                  <div className="col-lg-6 col-sm-6 sm-cols">
                    <p>DIRECT COMMUNICATION CHANNELS THROUGH VARIOUS MODES.</p>
                  </div>
                  <div className="col-lg-6 col-sm-6 sm-cols">
                    <p>ESCALATION MATRIX.</p>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section id="about" className="about hire-developers-sec about-box">
        <div className="container" data-aos="fade-up">
          <div className="section-title text-center position-relative pb-3 mx-auto">
            <h2>Pay As You Go</h2>
          </div>
          <div className="sub-section-title">
            <p>
              {/* Hire dedicated developers from our team at a reasonable price,
              customized 100% as per your requirements. We offer world-class
              development skills with a strong inhouse team of 300+ dedicated
              web, mobile app and software developers. */}
            </p>
          </div>
          {/* <div className="row">
            <div
              className="col-xl-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0 aos-init aos-animate"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <div className="icon-box">
                <div className="icon">
                  <i className="bx bx-file"></i>
                </div>
                <h4>8 hours/day</h4>
                <h4>5 days/weeks</h4>
              </div>
            </div>

            <div
              className="col-xl-4 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0 aos-init aos-animate"
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              <div className="icon-box">
                <div className="icon">
                  <p>full time</p>
                </div>
                <h4>4 hours/day</h4>
                <h4>5 days/weeks</h4>
              </div>
            </div>

            <div
              className="col-xl-4 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0 aos-init aos-animate"
              data-aos="zoom-in"
              data-aos-delay="400"
            >
              <div className="icon-box">
                <div className="icon">
                  <i className="bx bx-layer"></i>
                </div>
                <h4>Starts with 40 hours</h4>
              </div>
            </div>
          </div> */}
          <div className="row">
            <div className="col-12 mt-5 "></div>
            <div className="col-12 col-md-6 col-lg-4">
              <div className="core-expertise-box bg-white position-relative">
                <div className="core-inner-box primary-bg-color">
                  <div className="button-wrap-1 example">
                    <a href className="clicker text-style">
                      Full Time
                    </a>
                    <div className="circle"></div>
                  </div>
                </div>

                <h5 class="text-center d-block text-dark hr-text">
                  8 hours/day{" "}
                </h5>
                <h5 className="text-center d-block text-dark hr-text">
                  5 days/weeks
                </h5>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <div className="core-expertise-box bg-white position-relative">
                <div className="core-inner-box yellow-bg-color">
                  <div className="button-wrap-1 example">
                    <a href className="clicker text-style">
                      Part Time
                    </a>
                    <div className="circle"></div>
                  </div>
                </div>

                <h5 className="text-center d-block text-dark hr-text">
                  8 hours/day{" "}
                </h5>
                <h5 className="text-center d-block text-dark hr-text">
                  5 days/weeks
                </h5>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <div className="core-expertise-box bg-white position-relative">
                <div className="core-inner-box lightBlue-bg-color">
                  <div className="button-wrap-1 example">
                    <a href className="clicker text-style-2">
                      Hourly Basic
                    </a>
                    <div className="circle"></div>
                  </div>
                  {/* <p>HOURLY BASIC</p> */}
                </div>
                <h5 className="text-center d-block text-dark hr-text">
                  Starts with 40 hours
                </h5>
                <p></p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ======= Footer ======= --> */}
      <Footer />
    </>
  );
}
export default BuildYourDedicatedTeam;
