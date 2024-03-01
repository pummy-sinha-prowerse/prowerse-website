import React, { useEffect } from "react";
import Footer from "../../Pages/Footer";
import { Link } from "react-router-dom";

function ViewCaseStudy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleDownload = () => {
    // Replace 'your-pdf-file.pdf' with the actual path or URL of your PDF file
    const pdfUrl = "/assets/img/casestudies/Prowerse Case Study-EB_v1.2.pdf";

    // Trigger download
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.setAttribute("download", "Prowerse Case Study-EB_v1.2.pdf"); // You can specify the filename here
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
                    ABOUT HEALTH, WELNESS & FITNESS
                  </span>
                </h4>

                <div className="entry-content">
                  <p>
                    Scaling MVP to market ready product offering by keeping
                    product north star in sight and increasing marketable
                    feature releases with 50% more agility
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
                  <ul>
                    <li>
                      Prowerse reviewed MVP tech stacks and analyzed whether it
                      can continue in release- ready project as well.
                    </li>
                    <li>
                      Adjusted and altered tech stacks in journey from MVP to
                      release ready. Removing PHP based APIs with Node.JS
                    </li>
                    <li>
                      Using ReactNative to maintain correct balance between
                      availability of native features and maintaining single
                      source for cross platform app.
                    </li>
                    <li>
                      Ensured setting-up of cloud IT infrastructure, and CI/CD
                      pipelines to make release cycles shorter and more
                      effective.
                    </li>
                    <li>
                      Prowerse managed, prioritized and groomed product backlog
                      to ship as many feature and fixes possible in short 1 week
                      delivery webs.
                    </li>
                    <li>
                      The approach for creating database backups at predefined
                      intervals making it fault-tolerant were recommended and
                      implemented.
                    </li>
                  </ul>
                  <h3 className="sidebar-title">
                    <span style={{ color: "#ff8050" }}>BUSINESS SCENARIO</span>
                  </h3>

                  <p>
                    The initial MVP was developed by client himself as a lone
                    contributor. The client wanted to progress the product
                    journey from the existing MVP to a scalable product offering
                    by:
                  </p>
                  <ul>
                    <li>Setting up a product team.</li>
                    <li>
                      Reviewing and adjusting tech stacks in line with final
                      version of business requirement.
                    </li>
                    <li>
                      Setting up a product development team for native apps
                      development and continuous delivery cycle for the same.
                    </li>
                  </ul>
                  <h3 className="sidebar-title">
                    <span style={{ color: "#ff8050" }}>VALUE PROPOSITIONS</span>
                  </h3>
                 
                  <ul>
                    <li>
                    Rapid productization and reduced GO-TO-MARKET time by 20%.
                    </li>
                    <li>
                    Cost Reduction: Reduced business expenses by about 30%
                    </li>
                    <li>
                    Scaled product development team to deliver as many feature on top of bare bones CII
                    </li>
                    <li>
                    Enabling client to focus on market expansion strategy.
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
                    <span style={{ fontWeight: "bold" }}>Tools:</span> VS Code,
                    Jenkins
                  </p>
                  <p>
                    <span style={{ fontWeight: "bold" }}>Technologies:</span>{" "}
                    React Native, ReactJS, HTML, AWS, MySql
                  </p>
                </div>
                {/* <!-- End sidebar categories--> */}

                <h3 className="sidebar-title">
                  <span style={{ color: "#ff8050" }}>CLIENT REVIEWS</span>
                </h3>
                <div className="sidebar-item recent-posts">
                  <p>
                  Development results are great and skills of the developers are effective. Communication as an aspect is given high regard. Overall good value for money.
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
