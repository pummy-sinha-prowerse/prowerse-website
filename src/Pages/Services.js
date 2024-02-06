import React, { useEffect } from "react";
import Footer from "./Footer";

function Service() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <section id="service-about" className="d-flex align-items-center">
        <div className="container" data-aos="zoom-out" data-aos-delay="100">
          <div className="row">
            <div className="col-xl-6">
              <h1>#Services</h1>
              {/* <h2>Software Development. Delivered.</h2> */}
              <h5>
              
                In the realm of tech services, we're not just providers; we're
                architects of solutions. From code intricacies to system
                scalability, our tech services embody precision and
                adaptability. Whether it's troubleshooting challenges or
                envisioning future enhancements, we're your partners in
                navigating the ever-evolving landscape of technology.
              </h5>
              {/* <a href="#about" className="btn-get-started scrollto">
                Get Started
              </a> */}
            </div>
          </div>
        </div>
      </section>

      {/* <!-- ======= Services Section ======= --> */}
      <section id="services" className="services ">
        <div className="container" data-aos="fade-up">
          <div className="section-title text-center position-relative pb-3 mx-auto">
            <h2>Services</h2>
          </div>
          <div className="sub-section-title">
            <p>Software Development Outsourcing</p>
          </div>

          <div className="row">
            <div className="col-md-6">
              <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
                <i className="bi bi-briefcase"></i>
                <h4>
                  <a href="#">Staff Augmentation</a>
                </h4>
                <p className="service-fill">
                  Fill in the skill gap of in-house resources with the best
                  Prowerse offshore talents assigned to projects full-time and
                  managed by you directly. Prowerse provides staff augmentation
                  services to speed up development and optimize development
                  costs.
                </p>
              </div>
            </div>
            <div className="col-md-6 mt-4 mt-md-0">
              <div className="icon-box" data-aos="fade-up" data-aos-delay="200">
                <i className="bi bi-card-checklist"></i>
                <h4>
                  <a href="#">Dedicated Team</a>
                </h4>
                <p className="service-fill">
                  Expand your software development capabilities and minimize
                  management efforts with a dedicated Prowerse development team
                  managed by a PM from Prowerse who regularly reports to you and
                  collaborates on all important decisions in the project.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- ======= Service Section ======= --> */}
      <section id="pricing" className="pricing section-bg">
        <div className="container" data-aos="fade-up">
          <div className="section-title text-center position-relative pb-3 mx-auto">
            <h2>Software Product Development</h2>
          </div>

          <div className="sub-section-title">
            <p>
              In the realm of software product development, we orchestrate
              brilliance—conceptualizing, coding, and refining to birth
              seamless, user-centric solutions. Our commitment lies in crafting
              software that not only meets expectations but exceeds them, one
              line of code at a time.
            </p>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="box" data-aos="fade-up" data-aos-delay="100">
                <h3>Enterprise Applications</h3>
                <p>
                  Enterprise Applications are large-scale software packages that
                  support business processes, information flows, reporting, and
                  data analytics in complex organizations. Prowerse focuses on
                  Simplicity, Maintainability, Reusability, Decoupling of
                  Technology and Functionality. Prowerse's proven approach of
                  breaking large-scale application in to the small.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mt-4 mt-md-0">
              <div
                className="box featured"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <h3>Mobile Applications</h3>
                <p>
                  Prowerse brings to life product ideas of native,
                  cross-platform, and hybrid mobile applications, targeting
                  smartphones and tablets. Be it e-commerce experience or
                  geo-tracking of users, Prowerse has delivered such examples
                  with ease of use. Prowerse can participate from concept screen
                  sketching till seamless deployments of Apps to the respective
                  app stores.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mt-4 mt-lg-0">
              <div className="box" data-aos="fade-up" data-aos-delay="300">
                <h3>Web Applications</h3>
                <p>
                  Prowerse provides flexible and seamless website development
                  services. Prowerse's approach to design attractive and
                  customer-friendly web designs has helped many businesses to
                  enlarge digital footprint. Prowerse is proud of excellent team
                  of designers & developers, which can collaborate with you
                  during the journey of concept to website hosting.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ======= Tech======= --> */}
      <section id="services" className="services techstack-section">
        <div className="container" data-aos="fade-up">
          <div className="section-title text-center position-relative pb-3 mx-auto">
            <h2>TechStacks</h2>
          </div>
          <div className="sub-section-title">
            <p>
              Our tech stacks are the backbone of our wizardry—powered by a
              blend of the latest frameworks, languages, and tools. We thrive on
              staying at the forefront of technology to craft solutions that are
              not just efficient but also future-ready.
            </p>
          </div>
          <div className="row">
            <div className="col-md-3">
              <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
                <div class="example-wrap">
                  <div class="button-wrap-1 example">
                    <a href class="clicker text-style">
                      Backends
                    </a>
                    <div class="circle"></div>
                  </div>
                </div>

                <p className="service-fill techstack">
                  {" "}
                  Microsoft .Net & .Net Core, Java, PHP, Node.js, Python
                </p>
              </div>
            </div>

            <div className="col-md-3 mt-4 mt-md-0">
              <div className="icon-box" data-aos="fade-up" data-aos-delay="200">
                <div class="example-wrap">
                  <div class="button-wrap-1 example">
                    <a href class="clicker text-style">
                      AI/ML
                    </a>
                    <div class="circle"></div>
                  </div>
                </div>

                <p className="service-fill techstack">
                  Azure ML, LUIS, BOT Framework, TensorFlow
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
                <div class="example-wrap">
                  <div class="button-wrap-1 example">
                    <a href class="clicker text-style">
                      CloudOps
                    </a>
                    <div class="circle"></div>
                  </div>
                </div>

                <p className="service-fill techstack">
                  Amazon Web Services, Microsoft Azure, Google Cloud Platform
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
                <div class="example-wrap">
                  <div class="button-wrap-1 example">
                    <a href class="clicker text-style">
                      DevOps
                    </a>
                    <div class="circle"></div>
                  </div>
                </div>

                <p className="service-fill techstack">
                  Azure Pipelines, TeamCity, Kubernetes, Jenkins, Docker
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
                <div class="example-wrap">
                  <div class="button-wrap-1 example">
                    <a href class="clicker text-style">
                      Mobility
                    </a>
                    <div class="circle"></div>
                  </div>
                </div>

                <p className="service-fill techstack">
                  iOS, Android, React Native, Xamarin, Flutter, Ionic
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
                <div class="example-wrap">
                  <div class="button-wrap-1 example">
                    <a href class="clicker text-style">
                      Frontends
                    </a>
                    <div class="circle"></div>
                  </div>
                </div>

                <p className="service-fill techstack">
                  PWA, Angular, React, Vue, ASP.NET
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
                <div class="example-wrap">
                  <div class="button-wrap-1 example">
                    <a href class="clicker">
                      UI Bundles
                    </a>
                    <div class="circle"></div>
                  </div>
                </div>

                <p className="service-fill techstack">
                  Bootstrap, Materialize, Semantic, PureCSS, FluentUI
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
                <div class="example-wrap">
                  <div class="button-wrap-1 example">
                    <a href class="clicker text-style">
                      UX
                    </a>
                    <div class="circle"></div>
                  </div>
                </div>

                <p className="service-fill techstack">
                  Sketch, InVision, Figma, Adobe Suite, Balsamiq
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
                <div class="example-wrap">
                  <div class="button-wrap-1 example">
                    <a href class="clicker text-style">
                      Validation
                    </a>
                    <div class="circle"></div>
                  </div>
                </div>

                <p className="service-fill techstack">
                  Selenium, Katalon, Cucumber, Sauce Labs, Cross Browser
                  Testing, Appium, JMeter, SoapUI
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
                <div class="example-wrap">
                  <div class="button-wrap-1 example">
                    <a href class="clicker text-style">
                      Databases
                    </a>
                    <div class="circle"></div>
                  </div>
                </div>

                <p className="service-fill techstack">
                  MSSQL, MySQL, MongoDB, Redis, Cassandra, Azure CosmosDB, AWS
                  DynamoDB
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
                <div class="example-wrap">
                  <div class="button-wrap-1 example">
                    <a href class="clicker">
                      Block Chain
                    </a>
                    <div class="circle"></div>
                  </div>
                </div>

                <p className="service-fill techstack">
                  Web3, Ether, WASM, Bluzelle, Polkadot, Whisper, MetaMask
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
           {/* <!-- Techstack --> */}

            {/* Table section start */}
      <section id="pricing" className="pricing section-bg dedicated-teams">
        <div className="container" data-aos="fade-up">
          <div className="section-title text-center position-relative pb-3 mx-auto">
            <h2>BENEFITS OF OUR DEDICATED TEAMS MODEL</h2>
          </div>

          <div className="row" style={{marginTop: "20px"}}>
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
      {/* Table section end */}
      {/* <!-- ======= Footer ======= --> */}
      <Footer />
    </>
  );
}
export default Service;
