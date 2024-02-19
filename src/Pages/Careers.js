import React, { useEffect } from "react";
import Footer from "./Footer";
import { Link } from "react-router-dom";
// import Count from "../Component/Count";

function Careers() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  // const data = {
  //   counts: [
  //     {
  //       id: "001",
  //       label: "Years of Industry Experience",
  //       number: "15",
  //       duration: "5",
  //       type: "",
  //       icon: "bi bi-emoji-smile",
  //     },
  //     {
  //       id: "002",
  //       label: "Client Retention Rate",
  //       number: "92",
  //       duration: "5",
  //       type: "%",
  //       icon: "bi bi-journal-richtext",
  //     },
  //     {
  //       id: "003",
  //       label: "Projects Executed",
  //       number: "500",
  //       duration: "5",
  //       type: "+",
  //       icon: "bi bi-headset",
  //     },
  //     {
  //       id: "004",
  //       label: "Reduction In Your IT Budgets",
  //       number: "50",
  //       duration: "5",
  //       type: "%",
  //       icon: "bi bi-people",
  //     },
  //   ],
  // };
  return (
    <>
      <section id="hero-career" className="d-flex align-items-center">
        <div className="container" data-aos="zoom-out" data-aos-delay="100">
          <div className="row">
            <div className="col-xl-6">
              <br />
              <br />
              <br />
              <br />
              <h1>Become a Part of Prowerse Family</h1>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />

              <h5>
                We are fast-driven professionals who are not afraid to think out
                of the box and pursue excellence. A career with Prowerse will
                motivate you to aspire high and perform your best without any
                obstructions from the hierarchy.
              </h5>
              {/* <a href="#about" className="btn-get-started scrollto">
                Get Started
              </a> */}
            </div>
          </div>
        </div>
      </section>
      <main id="main">
        {/* <!-- ======= Counts Section ======= --> */}
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
        {/* <!-- ======= About Section ======= --> */}
        {/* <section id="services" className="services section-bg">
        <div className="container" data-aos="fade-up">
          <div className="section-title text-center position-relative pb-3 mx-auto">
            <h2>We Care For Our Team</h2>
            
          </div>

          <div className="row" style={{marginTop: "20px"}}>
            <div className="col-md-4">
              <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
                <i className="bi bi-clock"></i>
                <h4>
                  <a href="#">Flexible Timings</a>
                </h4>
               
              </div>
            </div>
            <div className="col-md-4 mt-4 mt-md-0">
              <div className="icon-box" data-aos="fade-up" data-aos-delay="200">
                <i className="bi bi-cake-fill"></i>
                <h4>
                  <a href="#">Festive Celebrations</a>
                </h4>
               
              </div>
            </div>
            <div className="col-md-4">
              <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
                <i className="bi bi-code"></i>
                <h4>
                  <a href="#">Training & Development</a>
                </h4>
               
              </div>
            </div>
            <div className="col-md-4 mt-4 mt-md-0">
              <div className="icon-box" data-aos="fade-up" data-aos-delay="200">
                <i className="bi bi-capsule"></i>
                <h4>
                  <a href="#">Mental Health & Well Being</a>
                </h4>
               
              </div>
            </div>
            <div className="col-md-4 mt-4 mt-md-0">
              <div className="icon-box" data-aos="fade-up" data-aos-delay="200">
                <i className="bi bi-award"></i>
                <h4>
                  <a href="#">Rewards & Recognitions</a>
                </h4>
               
              </div>
            </div>
            <div className="col-md-4 mt-4 mt-md-0">
              <div className="icon-box" data-aos="fade-up" data-aos-delay="200">
                <i className="bi bi-calendar4-event"></i>
                <h4>
                  <a href="#">Maternal Paternal Leaves</a>
                </h4>
               
              </div>
            </div>
          </div>
        </div>
      </section> */}

        {/* <section id="services" className="services ">
        <div className="container" data-aos="fade-up">
          <div className="section-title text-center position-relative pb-3 mx-auto">
            <h2>Find Your Place</h2>
          </div> */}


        <section id="services" className="services ">
          <div className="container" data-aos="fade-up">
            <div className="section-title text-center position-relative pb-3 mx-auto">
              <h2>Find Your Place</h2>
              {/* <p>Software Development Outsourcing</p> */}
            </div>

            <div className="row" style={{ marginTop: "20px" }}>
              <div className="job-list__wrapper mb-6">
                <h3 className="mb-4">Development</h3>

               
                {/* <!-- Job Card --> */}

                {/* <!-- Job Card --> */}
              </div>
              <div className="col-md-6 card-first">
              <Link
                  to="/job-description"
                  className="card p-0 mb-3 border-0"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <div
                  className="icon-box"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <span className="row justify-content-between align-items-center">
                    <span className="col-md-4 color--heading">
                        {/* <span className="badge badge-circle text-white mr-3"> */}
                        <i className="bi bi-filetype-py"></i>
                        {/* </span>{" "} */}
                        <span className="position">Python</span>
                        
                      </span>
                      <span className="col-5 col-md-3 my-3 my-sm-0 color--text">
                        <i className="fas fa-clock mr-1"></i>2-4 years Experience
                      </span>

                    <span className="col-5 col-md-3 my-3 my-sm-0 color--text">
                        <i className="fas fa-clock mr-1"></i>Ahmedabad
                      </span>

                      {/* <span className="col-6 col-md-2 my-3 my-sm-0 color--text">
                        <i className="fas fa-map-marker-alt mr-1"></i> India,
                        In
                      </span> */}
                  </span>

                  <h4>{/* <Link to="/job-description">Python</Link> */}</h4>
                </div>
                </Link>
                
              </div>
              <div className="col-md-6">
              <Link
                  to="/job-description"
                  className="card p-0 mb-3 border-0"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <div
                  className="icon-box"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <span className="row justify-content-between align-items-center">
                    <span className="col-md-5 color--heading">
                        {/* <span className="badge badge-circle text-white mr-3"> */}
                        <i className="bi bi-server"></i>
                        {/* </span>{" "} */}
                        <span className="position">.Net</span>
                        
                      </span>

                      <span className="col-5 col-md-3 my-3 my-sm-0 color--text">
                        <i className="fas fa-clock mr-1"></i> 2-4 years Experience
                      </span>

                    <span className="col-5 col-md-3 my-3 my-sm-0 color--text">
                        <i className="fas fa-clock mr-1"></i> Ahmedabad
                      </span>
                  </span>

                  <h4>{/* <Link to="/job-description">Python</Link> */}</h4>
                </div>
                </Link>
                
              </div>
              <div className="col-md-6">
              <Link
                  to="/job-description"
                  className="card p-0 mb-3 border-0"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <div
                  className="icon-box"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <span className="row justify-content-between align-items-center">
                    <span className="col-md-5 color--heading">
                        {/* <span className="badge badge-circle text-white mr-3"> */}
                        <i className="bi bi-cpu"></i>
                        {/* </span>{" "} */}
                        <span className="position">DevOps</span>
                        
                      </span>

                      <span className="col-5 col-md-3 my-3 my-sm-0 color--text">
                        <i className="fas fa-clock mr-1"></i>2-4 years Experience
                      </span>

                    <span className="col-5 col-md-3 my-3 my-sm-0 color--text">
                        <i className="fas fa-clock mr-1"></i> Ahmedabad
                      </span>
                  </span>

                  <h4>{/* <Link to="/job-description">Python</Link> */}</h4>
                </div>
                </Link>
                
              </div>
              {/*
            <div className="col-md-6 mt-4 mt-md-0">
              <div className="icon-box" data-aos="fade-up" data-aos-delay="200">
                <i className="bi bi-server"></i>
                <h4>
                  <Link to="/job-description"> .Net</Link>
                </h4>
              
              </div>
            </div>
            <div className="col-md-6 mt-4 mt-md-0 card-last">
              <div className="icon-box" data-aos="fade-up" data-aos-delay="200">
                <i className="bi bi-cpu"></i>
                <h4>
                <Link to="/job-description">DevOps</Link>
                </h4>
               
              </div>
            </div> */}
            </div>
          </div>
        </section>
      </main>
      {/* <!-- End #main --> */}
      {/* <!-- ======= Portfolio Section ======= --> */}
      <section id="portfolio" class="portfolio">
        <div className="container" data-aos="fade-up">
          <div className="section-title text-center position-relative pb-3 mx-auto">
            <h2>Life at Prowerse</h2>
            {/* <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.</p> */}
          </div>

          {/* <div class="row" data-aos="fade-up" data-aos-delay="100">
          <div class="col-lg-12 d-flex justify-content-center">
            <ul id="portfolio-flters">
              <li data-filter="*" class="filter-active">All</li>
              <li data-filter=".filter-app">App</li>
              <li data-filter=".filter-card">Card</li>
              <li data-filter=".filter-web">Web</li>
            </ul>
          </div>
        </div> */}

          <div
            className="row portfolio-container"
            data-aos="fade-up"
            data-aos-delay="200"
            style={{ marginTop: "20px" }}
          >
            <div className="col-lg-4 col-md-6 portfolio-item filter-app">
              <div className="portfolio-wrap">
                <img
                  src="assets/img/portfolio/portfolio-1.jpg"
                  className="img-fluid"
                  alt=""
                />
                <div className="portfolio-info">
                  {/* <h4>App 1</h4>
                <p>App</p> */}
                  <div className="portfolio-links">
                    <a
                      href="assets/img/portfolio/portfolio-1.jpg"
                      data-gallery="portfolioGallery"
                      className="portfolio-lightbox"
                      title="App 1"
                    >
                      <i className="bx bx-plus"></i>
                    </a>
                    {/* <a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a> */}
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item filter-web">
              <div className="portfolio-wrap">
                <img
                  src="assets/img/portfolio/portfolio-2.jpg"
                  className="img-fluid"
                  alt=""
                />
                <div className="portfolio-info">
                  {/* <h4>Web 3</h4>
                <p>Web</p> */}
                  <div className="portfolio-links">
                    <a
                      href="assets/img/portfolio/portfolio-2.jpg"
                      data-gallery="portfolioGallery"
                      className="portfolio-lightbox"
                      title="Web 3"
                    >
                      <i className="bx bx-plus"></i>
                    </a>
                    {/* <a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a> */}
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item filter-app">
              <div className="portfolio-wrap">
                <img
                  src="assets/img/portfolio/portfolio-3.jpg"
                  className="img-fluid"
                  alt=""
                />
                <div className="portfolio-info">
                  {/* <h4>App 2</h4>
                <p>App</p> */}
                  <div className="portfolio-links">
                    <a
                      href="assets/img/portfolio/portfolio-3.jpg"
                      data-gallery="portfolioGallery"
                      className="portfolio-lightbox"
                      title="App 2"
                    >
                      <i className="bx bx-plus"></i>
                    </a>
                    {/* <a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a> */}
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item filter-card">
              <div className="portfolio-wrap">
                <img
                  src="assets/img/portfolio/portfolio-4.jpg"
                  className="img-fluid"
                  alt=""
                />
                <div className="portfolio-info">
                  {/* <h4>Card 2</h4>
                <p>Card</p> */}
                  <div className="portfolio-links">
                    <a
                      href="assets/img/portfolio/portfolio-4.jpg"
                      data-gallery="portfolioGallery"
                      className="portfolio-lightbox"
                      title="Card 2"
                    >
                      <i className="bx bx-plus"></i>
                    </a>
                    {/* <a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a> */}
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item filter-web">
              <div className="portfolio-wrap">
                <img
                  src="assets/img/portfolio/portfolio-5.jpg"
                  className="img-fluid"
                  alt=""
                />
                <div className="portfolio-info">
                  {/* <h4>Web 2</h4>
                <p>Web</p> */}
                  <div className="portfolio-links">
                    <a
                      href="assets/img/portfolio/portfolio-5.jpg"
                      data-gallery="portfolioGallery"
                      className="portfolio-lightbox"
                      title="Web 2"
                    >
                      <i className="bx bx-plus"></i>
                    </a>
                    {/* <a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a> */}
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item filter-app">
              <div className="portfolio-wrap">
                <img
                  src="assets/img/portfolio/portfolio-6.jpg"
                  className="img-fluid"
                  alt=""
                />
                <div className="portfolio-info">
                  {/* <h4>App 3</h4>
                <p>App</p> */}
                  <div className="portfolio-links">
                    <a
                      href="assets/img/portfolio/portfolio-6.jpg"
                      data-gallery="portfolioGallery"
                      className="portfolio-lightbox"
                      title="App 3"
                    >
                      <i className="bx bx-plus"></i>
                    </a>
                    {/* <a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a> */}
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item filter-card">
              <div className="portfolio-wrap">
                <img
                  src="assets/img/portfolio/portfolio-7.jpg"
                  className="img-fluid"
                  alt=""
                />
                <div className="portfolio-info">
                  {/* <h4>Card 1</h4>
                <p>Card</p> */}
                  <div className="portfolio-links">
                    <a
                      href="assets/img/portfolio/portfolio-7.jpg"
                      data-gallery="portfolioGallery"
                      className="portfolio-lightbox"
                      title="Card 1"
                    >
                      <i className="bx bx-plus"></i>
                    </a>
                    {/* <a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a> */}
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item filter-card">
              <div className="portfolio-wrap">
                <img
                  src="assets/img/portfolio/portfolio-8.jpg"
                  className="img-fluid"
                  alt=""
                />
                <div className="portfolio-info">
                  {/* <h4>Card 3</h4>
                <p>Card</p> */}
                  <div className="portfolio-links">
                    <a
                      href="assets/img/portfolio/portfolio-8.jpg"
                      data-gallery="portfolioGallery"
                      className="portfolio-lightbox"
                      title="Card 3"
                    >
                      <i className="bx bx-plus"></i>
                    </a>
                    {/* <a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a> */}
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item filter-web">
              <div className="portfolio-wrap">
                <img
                  src="assets/img/portfolio/portfolio-9.jpg"
                  className="img-fluid"
                  alt=""
                />
                <div className="portfolio-info">
                  {/* <h4>Web 3</h4>
                <p>Web</p> */}
                  <div className="portfolio-links">
                    <a
                      href="assets/img/portfolio/portfolio-9.jpg"
                      data-gallery="portfolioGallery"
                      className="portfolio-lightbox"
                      title="Web 3"
                    >
                      <i className="bx bx-plus"></i>
                    </a>
                    {/* <a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Portfolio Section --> */}

      {/* <!-- ======= Footer ======= --> */}
      <Footer />
    </>
  );
}
export default Careers;
