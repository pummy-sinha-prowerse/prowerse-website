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
                <h2 className="entry-title">DevOps Engineer </h2>

                <div className="entry-meta">
                  <ul>
                    <li className="d-flex align-items-center">
                      Experience: 3+ Years
                    </li>

                    <li className="d-flex align-items-center">
                      Location: Ahmedabad
                    </li>
                  </ul>
                </div>

                <div className="entry-content">
                  <p>
                    To help us build functional systems that improve customer
                    experience we are now looking for an experienced DevOps
                    Engineer with experience in Infrastructure optimization.
                    They will be responsible for deploying product updates,
                    identifying production issues and implementing integrations
                    that meet our customers' needs. If you have a solid
                    background in software engineering and are familiar with
                    Python, we’d love to speak with you.{" "}
                  </p>
                  <h3>RESPONSIBILITIES</h3>
                  <p>
                    <ul>
                      <li>
                        Work with development teams to ideate software solutions.
                      </li>
                      <li>
                        Building and setting up new development tools and
                        infrastructure.{" "}
                      </li>
                      <li>
                        Working on ways to automate and improve development and
                        release processes.
                      </li>
                      <li>
                        Ensuring that systems are safe and secure against
                        cybersecurity threats.
                      </li>
                      <li>Deploy updates and fixes.</li>
                      <li>
                        Perform root cause analysis for production errors.{" "}
                      </li>
                      <li>
                        Develop scripts to automate infrastructure provision.
                      </li>
                      <li>
                        Working with software developers and software engineers
                        to ensure that development follows established processes
                        and works as intended.
                      </li>
                    </ul>
                  </p>
                  <h3>TECHNOLOGIES WE USE</h3>
                  <p>
                    <ul>
                      <li>GitOps – GitHub, GitLab, BitBucket.</li>
                      <li>
                        CI/CD – Jenkins, Circle CI, Travis CI, TeamCity, Azure
                        DevOps.{" "}
                      </li>
                      <li>Containerization – Docker, Swarm, Kubernetes.</li>
                      <li>Provisioning – Terraform.</li>
                      <li>CloudOps – Azure, AWS, GCP.</li>
                      <li>
                        Observability – Prometheus, Grafana, GrayLog, ELK .{" "}
                      </li>
                    </ul>
                  </p>
                  <h3>QUALIFICATIONS</h3>
                  <p>
                    <ul>
                      <li>Graduate / Postgraduate in Technology sector. </li>
                      <li>
                        Proven experience as a DevOps Engineer or similar role.{" "}
                      </li>
                      <li>Effective communication and teamwork skills.</li>
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
