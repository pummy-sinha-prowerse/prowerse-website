import React, { useEffect } from "react";
import Footer from "../../Pages/Footer";
import { Link } from "react-router-dom";

function ViewCaseStudy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleDownload = () => {
    // Replace 'your-pdf-file.pdf' with the actual path or URL of your PDF file
    const pdfUrl =
      "/assets/img/casestudies/Prowerse Case Study-PerfSo_v1.2.pdf";

    // Trigger download
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.setAttribute("download", "Prowerse Case Study-PerfSo_v1.2.pdf"); // You can specify the filename here
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <>
      <section id="hero-casestudy" className="d-flex align-items-center">
        <div className="container" data-aos="zoom-out" data-aos-delay="100">
          <div className="row">
            <div className="col-xl-6">
              <h1>#Case Studies</h1>
              <h5>
                Prowerse provides software development and mobile app
                development services that are driven by the ambition to help you
                derive maximum value from your IT investments.
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
                <h4 className="entry-title">
                  <span style={{ color: "#ff8050" }}>
                    ABOUT AFRICAN VENTURE IN HEALTH CARE
                  </span>
                </h4>

                <div className="entry-content">
                  <p>
                    SIGNIFICANT REDUCTION IN MVP ROLL OUT TIMELINES THROUGH
                    PORTABLE WEB APPS (PWA'S) AND ABOUT 45% REDUCTION IN COSTS
                  </p>
                  <p>
                    {" "}
                    <button
                      className="download-casestudy"
                      onClick={handleDownload}
                    >
                      Download CaseStudy PDF
                    </button>
                  </p>
                  <h3 className="sidebar-title">
                    <span style={{ color: "#ff8050" }}>PROWERSE APPROACH</span>
                  </h3>
                  <p>
                    PROWERSE WORKED ON FOUR PARALLELS TO SPEED UP EARLY MV
                    PRELEASE
                  </p>
                  <ul>
                    <li>
                      <span style={{ fontWeight: "bold" }}>Firstly</span>{" "}
                      defined & developed ground work for diseases prediction
                      algorithm.
                    </li>
                    <li>
                      <span style={{ fontWeight: "bold" }}>Secondly,</span>{" "}
                      finalized on PWA as choice of app stack. This allowed us
                      to combine Android, iOS, Web & Admin portals into one
                      single source offering, enabling client to roll out quick
                      weekly updates to enhance MVP's desired impact.
                    </li>
                    <li>
                      <span style={{ fontWeight: "bold" }}>Thirdly,</span>{" "}
                      ensured set up of cloud infra IT infrastructure, and CI-CD
                      pipelines to make release cycles shorter and more
                      effective.
                    </li>
                    <li>
                      <span style={{ fontWeight: "bold" }}>Importantly,</span>{" "}
                      streamlined communication channels with existing
                      freelancing units and delivering towards one common
                      objective.
                    </li>
                  </ul>
                  <h3 className="sidebar-title">
                    <span style={{ color: "#ff8050" }}>BUSINESS SCENARIO</span>
                  </h3>

                  <p>
                    After understanding client requirements through initial
                    meetings, we convened upon developing ML algorithm for
                    disease prediction, setting-up end-to-end product
                    development life cycle. Rapid feature deliveries as well was
                    expected from Prowerse to make MVP more appealing to early
                    adopters.
                  </p>
                  <p>
                    We knew that client was on a tight budget with limited
                    timeline and was then dealing with multiple freelancers with
                    negligible control and coordination between them and that
                    with our client.
                  </p>

                  <h3 className="sidebar-title">
                    <span style={{ color: "#ff8050" }}>VALUE PROPOSITIONS</span>
                  </h3>

                  <ul>
                    <li>
                      Rapid Productization: Shortened release cycles by 75% to 1
                      week to deleiver freshly build features in MVP.
                    </li>
                    <li>
                      Cost Reduction: About 45% reduction in engineering costs.
                    </li>
                    <li>
                      Enhanced Delivery Efficiency: Helped client present more
                      APT business case in front of investors and early
                      adopters.
                    </li>
                  </ul>
                </div>

                {/* <div class="entry-footer">
                  <i class="bi bi-folder"></i>
                  <ul class="cats">
                    <li>
                      <a href="#">Business</a>
                    </li>
                  </ul>

                  <i class="bi bi-tags"></i>
                  <ul class="tags">
                    <li>
                      <a href="#">Creative</a>
                    </li>
                    <li>
                      <a href="#">Tips</a>
                    </li>
                    <li>
                      <a href="#">Marketing</a>
                    </li>
                  </ul>
                </div> */}
              </article>
              {/* <!-- End blog entry --> */}

              {/* <div className="blog-author d-flex align-items-center">
                <img
                  src="assets/img/blog/blog-author.jpg"
                  className="rounded-circle float-left"
                  alt=""
                />
                <div>
                  <h4>Jane Smith</h4>
                  <div className="social-links">
                    <a href="https://twitters.com/#">
                      <i className="bi bi-twitter"></i>
                    </a>
                    <a href="https://facebook.com/#">
                      <i className="bi bi-facebook"></i>
                    </a>
                    <a href="https://instagram.com/#">
                      <i className="biu bi-instagram"></i>
                    </a>
                  </div>
                  <p>
                    Itaque quidem optio quia voluptatibus dolorem dolor. Modi
                    eum sed possimus accusantium. Quas repellat voluptatem
                    officia numquam sint aspernatur voluptas. Esse et
                    accusantium ut unde voluptas.
                  </p>
                </div>
              </div> */}
              {/* <!-- End blog author bio --> */}
            </div>
            {/* <!-- End blog entries list --> */}

            <div className="col-lg-4">
              <div className="sidebar">
                <div id="text-11" class="widgetContainer widget_text">
                  {" "}
                  <div class="textwidget">
                    <div class="contact-bar">
                      <h3>REQUEST INFORMATION</h3>
                      <p className="text-inner">
                        To start a dialogue with our consultant, please complete
                        our contact form and we shall get in touch with you
                        shortly.
                      </p>
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

                <h3 className="sidebar-title">
                  <span style={{ color: "#ff8050" }}>TOOLS & TECHNOLOGIES</span>
                </h3>
                <div className="sidebar-item categories">
                  <p>
                    <span style={{ fontWeight: "bold" }}>Tools:</span> PWA,
                    Python, Django, MS Azure, Lighthouse, MySQL
                  </p>
                  <p>
                    <span style={{ fontWeight: "bold" }}>Technologies:</span> VS
                    Code, Selenium for Automation Testing, Cucumber for BDD
                  </p>
                </div>
                {/* <!-- End sidebar categories--> */}

                <h3 className="sidebar-title">
                  <span style={{ color: "#ff8050" }}>CLIENT REVIEWS</span>
                </h3>
                <div className="sidebar-item recent-posts">
                  <p>
                    Prowerse is best suited for an emerging brands eying quality
                    deliveries at optimum costs. Glad we found them. Can't speak
                    higher of any other brand.
                  </p>
                </div>
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
export default ViewCaseStudy;
