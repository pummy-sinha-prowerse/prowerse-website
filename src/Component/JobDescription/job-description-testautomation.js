import React from "react";
import Footer from "../../Pages/Footer";
import { Link } from "react-router-dom";

function JobDescription() {
  return (
    <>
      <section id="hero-blog" className="d-flex align-items-center">
        <div className="container" data-aos="zoom-out" data-aos-delay="100">
          <div className="row">
            <div className="col-xl-6">
              <h1>#CAREERS</h1>
              <h5>
                At Prowerse, we believe in offering much more than just a job.
                We strive to give you a full-fledged growing career driven with
                passion.
              </h5>
              {/* <a href="#about" className="btn-get-started scrollto">
                Get Started
              </a> */}
            </div>
          </div>
        </div>
      </section>

      {/* <!-- ======= Blog Single Section ======= --> */}
      <section id="blog" class="blog">
        <div className="container" data-aos="fade-up">
          <div className="row">
            <div className="col-lg-8 entries">
              <article className="entry entry-single">
                <h2 className="entry-title">Test Automation Engineer </h2>

                <div className="entry-meta">
                  <ul>
                    <li className="d-flex align-items-center">
                      Experience: 6-8 Years
                    </li>

                    <li className="d-flex align-items-center">
                      Location: Ahmedabad
                    </li>
                  </ul>
                </div>

                <div className="entry-content">
                  <p>
                    We are looking for a Test Automation Engineer to join our
                    engineering team and help us testing and maintain various
                    software products. Engineer should expert at test automation
                    for APIs as well as UI, creating test plans and test
                    strategies for testing product feature. Ultimately, you’ll
                    build test suits which will inspire enough confidence for
                    every build which is being rolled out.{" "}
                  </p>
                  <h3>RESPONSIBILITIES</h3>
                  <p>
                    <ul>
                      <li>
                        Will be involved in developing automation scripts for
                        Web based, standalone and Web services.
                      </li>
                      <li>
                        Maintenance of existing automation suite and execution.{" "}
                      </li>
                      <li>
                        Participate in automation executions and reporting.
                      </li>
                      <li>
                        Participate in optimizing existing automation suites.
                      </li>
                      <li>
                        Working one on one with QA to understand automation
                        requirements and implementation.{" "}
                      </li>
                      <li>
                        Well versed with testing process to apply in Agile/Scrum
                        framework.{" "}
                      </li>
                      <li>
                        Collaborate with internal & external teams with good
                        communication and soft skills to make automation
                        deliverables with smooth transition and achieve team
                        goals and objectives.
                      </li>
                    </ul>
                  </p>
                  <h3>REQUIREMENTS</h3>
                  <p>
                    <ul>
                      <li>Good understanding of automation frameworks.</li>
                      <li>3+ years of prior experience in similar role.</li>
                      <li>Experience in UFT/QTP test automation tool.</li>
                      <li>Experience in Test Management tools (ALM)</li>
                      <li>
                        Experience in Selenium or any other open-source
                        automation tool.
                      </li>
                      <li>Knowledge on Performance testing with JMeter. </li>
                      <li>Experience on SDLC process and practices</li>
                      <li>
                        Experience in Blockchain technology is great to have{" "}
                      </li>
                      <li>
                        Good experience in automation of Web & Stand-alone
                        applications.{" "}
                      </li>
                      <li>
                        Good communications skills both written and verbal.
                      </li>
                      <li>
                        Experience in Rest-API test automation using Postman,
                        Cypress.{" "}
                      </li>
                    </ul>
                  </p>
                </div>
                <div class="contact-bar">
                  {" "}
                  <div class="contact-bttn">
                    <Link to="/post-resume">Apply Now</Link>
                  </div>
                </div>
              </article>
              {/* <!-- End blog entry --> */}

              {/* <!-- End blog author bio --> */}
            </div>
            {/* <!-- End blog entries list --> */}

            <div className="col-lg-4">
              <div className="sidebar">
                <div id="text-11" class="widgetContainer widget_text">
                  {" "}
                  <div class="textwidget">
                    <div class="contact-bar">
                      <h3>
                        Looking for
                        <br /> Certified &amp; <br />
                        Experienced <br />
                        <span class="red-text">Developers</span>
                      </h3>
                      <ul>
                        <li>50+ Experts</li>
                        <li>Flexible Engagement</li>
                        <li>NDA Protection</li>
                        <li>100% Satisfaction</li>
                        <li>24X7 Support</li>
                        <li>Moneyback Guarantee</li>
                      </ul>
                      <div class="contact-bttn">
                        <Link to="/contact">Contact Now!</Link>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <h3 className="sidebar-title">Search</h3> */}
                <div className="sidebar-item search-form">
                  {/* <form action="">
                    <input type="text" />
                    <button type="submit">
                      <i className="bi bi-search"></i>
                    </button>
                  </form> */}
                </div>
                {/* <!-- End sidebar search formn--> */}

                {/* <!-- End sidebar recent posts--> */}

                {/* <h3 class="sidebar-title">Tags</h3>
                <div class="sidebar-item tags">
                  <ul>
                    <li>
                      <a href="#">App</a>
                    </li>
                    <li>
                      <a href="#">IT</a>
                    </li>
                    <li>
                      <a href="#">Business</a>
                    </li>
                    <li>
                      <a href="#">Mac</a>
                    </li>
                    <li>
                      <a href="#">Design</a>
                    </li>
                    <li>
                      <a href="#">Office</a>
                    </li>
                    <li>
                      <a href="#">Creative</a>
                    </li>
                    <li>
                      <a href="#">Studio</a>
                    </li>
                    <li>
                      <a href="#">Smart</a>
                    </li>
                    <li>
                      <a href="#">Tips</a>
                    </li>
                    <li>
                      <a href="#">Marketing</a>
                    </li>
                  </ul>
                </div> */}
                {/* <!-- End sidebar tags--> */}
              </div>
              {/* <!-- End sidebar --> */}
            </div>
            {/* <!-- End blog sidebar --> */}
          </div>
        </div>
      </section>
      {/* <!-- End Blog Single Section --> */}

      {/* <!-- ======= Footer ======= --> */}
      <Footer />
    </>
  );
}
export default JobDescription;
