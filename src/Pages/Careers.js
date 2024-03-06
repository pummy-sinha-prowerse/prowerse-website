import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import { Link } from "react-router-dom";
// import Count from "../Component/Count";
import JoinUsForm from "./../Component/JoinUsForm/JoinUsForm";

function Careers() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [
    [
      "prowerse-website/assets/img/portfolio/portfolio-1.jpg",
      "prowerse-website/assets/img/portfolio/portfolio-2.jpg",
      "prowerse-website/assets/img/portfolio/portfolio-3.jpg",
    ],
    [
      "prowerse-website/assets/img/portfolio/portfolio-4.jpg",
      "prowerse-website/assets/img/portfolio/portfolio-5.jpg",
      "prowerse-website/assets/img/portfolio/portfolio-6.png",
    ],
  ];

  const totalSlides = images.length;

  const nextSlide = () => {
    setCurrentSlide(currentSlide === totalSlides - 1 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? totalSlides - 1 : currentSlide - 1);
  };
  // const images = [
  //   "assets/img/portfolio/portfolio-1.jpg",
  //   "/assets/img/portfolio/portfolio-2.jpg",
  //   "/assets/img/portfolio/portfolio-3.jpg",
  //   "/assets/img/portfolio/portfolio-1.jpg",
  //   "/assets/img/portfolio/portfolio-2.jpg",
  //   "/assets/img/portfolio/portfolio-3.jpg",
  // ];
  // const nextSlide = () => {
  //   setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
  // };

  // const prevSlide = () => {
  //   setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
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
                {/* <!-- Job Card --> */}

                {/* <!-- Job Card --> */}
              </div>
              <div className="col-md-6">
                <Link
                  to="/job-description-python"
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
                        <span className="position position-title">
                          Python Engineer
                        </span>
                      </span>
                      <span className="col-5 col-md-3 my-3 my-sm-0 color--text">
                        <i className="fas fa-clock mr-1"></i>3+ years Experience
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
                  to="/job-description-business-executive"
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
                        <i className="bi bi-briefcase"></i>
                        {/* </span>{" "} */}
                        <span
                          className="position position-title"
                          style={{ marginTop: "-9px" }}
                        >
                          Business Development <br />
                          Executive{" "}
                        </span>
                      </span>
                      <span className="col-5 col-md-3 my-3 my-sm-0 color--text">
                        <i className="fas fa-clock mr-1"></i>2+ years Experience
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
                  to="/job-description-automation"
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
                        <span className="position position-title">
                          Test Automation Engineer
                        </span>
                      </span>

                      <span className="col-5 col-md-3 my-3 my-sm-0 color--text">
                        <i className="fas fa-clock mr-1"></i> 4-5 years
                        Experience
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
                  to="/job-description-devops"
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
                        <span className="position position-title">
                          DevOps Engineer
                        </span>
                      </span>

                      <span className="col-5 col-md-3 my-3 my-sm-0 color--text">
                        <i className="fas fa-clock mr-1"></i>3+ years Experience
                      </span>

                      <span className="col-5 col-md-3 my-3 my-sm-0 color--text">
                        <i className="fas fa-clock mr-1"></i> Ahmedabad
                      </span>
                    </span>

                    <h4>{/* <Link to="/job-description">Python</Link> */}</h4>
                  </div>
                </Link>
              </div>
              {/* card-last */}
              <div className="row last-row-career">
                <div className="col-md-6 mt-4 mt-md-0">
                  <Link
                    to="/job-description-rust"
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
                          <i className="bi bi-braces"></i>
                          {/* </span>{" "} */}
                          <span className="position position-title">
                            Rust Engineer
                          </span>
                        </span>

                        <span className="col-5 col-md-3 my-3 my-sm-0 color--text">
                          <i className="fas fa-clock mr-1"></i>3+ years
                          Experience
                        </span>

                        <span className="col-5 col-md-3 my-3 my-sm-0 color--text">
                          <i className="fas fa-clock mr-1"></i> Ahmedabad
                        </span>
                      </span>

                      <h4>{/* <Link to="/job-description">Python</Link> */}</h4>
                    </div>
                  </Link>
                </div>
              </div>
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
            <div className="carousel">
              <button className="prev" onClick={prevSlide}>
                &#10094;
              </button>
              <button className="next" onClick={nextSlide}>
                &#10095;
              </button>
              <div className="slides col-lg-4 col-md-6 portfolio-item">
                {images.map((imageGroup, index) => (
                  <div
                    key={index}
                    className={
                      index === currentSlide ? "slide active" : "slide"
                    }
                  >
                    {imageGroup.map((image, subIndex) => (
                      <img
                        key={subIndex}
                        src={image}
                        alt={`Slide ${index + 1} Image ${subIndex + 1}`}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>

            {/* <div className="carousel">
              <button className="prev" onClick={prevSlide}>
                &#10094;
              </button>
              <button className="next" onClick={nextSlide}>
                &#10095;
              </button>
              <div className="slides">
                {images.map((image, index) => (
                  <div
                    key={index}
                    className={
                      index === currentSlide ? "slide active" : "slide"
                    }
                  >
                    <img src={image} alt={`Slide ${index}`} />
                  </div>
                ))}
              </div>
            </div> */}
          </div>
        </div>
      </section>

      <JoinUsForm />
      {/* <!-- End Portfolio Section --> */}

      {/* <!-- ======= Footer ======= --> */}
      <Footer />
    </>
  );
}
export default Careers;
