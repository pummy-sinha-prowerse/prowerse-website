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

      {/* <!-- ======= Services Section ======= --> */}
      <section id="pricing" className="pricing section-bg dedicated-teams">
        <div className="container" data-aos="fade-up">
          <div className="section-title text-center position-relative pb-3 mx-auto">
            <h2>BUILD YOUR DEDICATED TEAM</h2>
          </div>

          <div className="row" style={{ marginTop: "20px" }}>
            <div className="col-lg-6 col-md-6">
              <div className="box" data-aos="fade-up" data-aos-delay="100">
                <h3>
                  BUILD YOUR DEDICATED TEAM
                </h3>
                <h5>Your own agile team for evolving
                  scope of work</h5>
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
                    ACCESS TO A WIDE RANGE OF EXPERIENCED IT ENGINEERS WITH DIVERSE SKILL SETS.
                    </p>
                  </div>
                  <div className="col-lg-4 col-sm-6 sm-cols">
                    <p>
                    RIGHT TO CHOOSE TEAM AS PER YOUR SET CRITERIA. 
                    </p>
                  </div>

                  <div className="col-lg-4 col-sm-6 sm-cols">
                    <p>FAST RAMP-UP, RAMP-DOWN TIME.</p>
                  </div>

                  <div className="col-lg-4 col-sm-6 sm-cols">
                    <p>
                    DEDICATED PROJECT MANAGER AS SINGLE POINT OF DELIVERY CONTACT.
                    </p>
                  </div>

                  <div className="col-lg-4 col-sm-6 sm-cols">
                    <p>
                    TRANSPARENT ENGAGEMENT MODELS WITH COMPREHENSIVE REPORTING SYSTEM.
                    </p>
                  </div>

                  <div className="col-lg-4 col-sm-6 sm-cols">
                    <p>
                    TRUSTED IP PROTECTION MECHANISMS.
                    </p>
                  </div>
                  <div className="col-lg-6 col-sm-6 sm-cols">
                    <p>
                    DIRECT COMMUNICATION CHANNELS THROUGH VARIOUS MODES.
                    </p>
                  </div>
                  <div className="col-lg-6 col-sm-6 sm-cols"><p>ESCALATION MATRIX.</p></div>
                </div>
                {/* <h3>Mobile Applications</h3>
                <p>
                  Prowerse brings to life product ideas of native,
                  cross-platform, and hybrid mobile applications, targeting
                  smartphones and tablets. Be it e-commerce experience or
                  geo-tracking of users, Prowerse has delivered such examples
                  with ease of use. Prowerse can participate from concept screen
                  sketching till seamless deployments of Apps to the respective
                  app stores.
                </p> */}
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
