import React from "react";
import Footer from "./Footer";
import { Link } from "react-router-dom";

function Post1() {
  return (
    <>
      <section id="hero" className="d-flex align-items-center">
        <div className="container" data-aos="zoom-out" data-aos-delay="100">
          <div className="row">
            <div className="col-xl-6">
              <h1>#Blog</h1>
              <h5>
                Odio et unde deleniti. Deserunt numquam exercitationem. Officiis
                quo odio sint voluptas consequatur ut a odio voluptatem. Sit
                dolorum debitis veritatis natus dolores. Quasi ratione sint. Sit
                quaerat ipsum dolorem.
              </h5>
              {/* <a href="#about" className="btn-get-started scrollto">
                Get Started
              </a> */}
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

      {/* <!-- ======= Footer ======= --> */}
      <Footer />
    </>
  );
}
export default Post1;
