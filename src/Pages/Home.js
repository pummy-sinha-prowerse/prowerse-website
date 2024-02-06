import React, { useState, useEffect } from "react";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import Count from "../Component/Count";
// const Counter = ({ counterNumber, maxCount, sharedStop }) => {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       // Increment the count by 1, but check if it exceeds the maximum value
//       setCount((prevCount) =>
//         prevCount < maxCount && !sharedStop ? prevCount + 1 : prevCount
//       );
//     }, 10);

//     return () => clearInterval(intervalId);
//   }, [maxCount, sharedStop]);

//   return <div>{count}+</div>;
// };
const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const data = {
    counts: [
      {
        id: "001",
        label: "Years of Industry Experience",
        number: "15",
        duration: "5",
        type: "",
        icon: "bi bi-emoji-smile",
      },
      {
        id: "002",
        label: "Client Retention Rate",
        number: "92",
        duration: "5",
        type: "%",
        icon: "bi bi-journal-richtext",
      },
      {
        id: "003",
        label: "Projects Executed",
        number: "500",
        duration: "5",
        type: "+",
        icon: "bi bi-headset",
      },
      {
        id: "004",
        label: "Reduction In Your IT Budgets",
        number: "50",
        duration: "5",
        type: "%",
        icon: "bi bi-people",
      },
    ],
  };
  // const maxCount = 110;
  // const [sharedStop, setSharedStop] = useState(false);

  // useEffect(() => {
  //   // Set a timeout to stop both counters after a certain time (e.g., 5 seconds)
  //   const timeoutId = setTimeout(() => {
  //     setSharedStop(true);
  //   }, 6000);

  //   return () => clearTimeout(timeoutId);
  // }, []);
  return (
    <>
      {/* <!-- ======= Hero Section ======= --> */}
      <section id="hero" className="d-flex align-items-center">
        <div className="container" data-aos="zoom-out" data-aos-delay="100">
          <div className="row">
            <div className="col-xl-6">
              <h1>#RightFirstTime</h1>
              <h2>Software Development. Delivered.</h2>
              <h5>
                The development of reliable and scalable software solutions for
                any OS, browser and device. Reduced implementation costs and
                timely delivery with organized development process, modern
                methodologies, competencies in cutting-edge technologies, and a
                rich pool of developers.
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
        <section id="counts" className="counts">
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
        </section>
        {/* <!-- ======= About Section ======= --> */}
        <section id="about" className="about section-bg">
          <div className="container" data-aos="fade-up">
            <div className="row no-gutters">
              <div className="content col-xl-5 d-flex align-items-stretch">
                <div className="content">
                  <h3>Prowerse Values</h3>
                  <p>
                    Prowerse believes in a personalized approach to every
                    customer. The selection of development practice is tailored
                    to customer's specific business needs. Be it classical
                    methodologies, such as Waterfall or Prototype development,
                    or modern approaches like Agile, Kanban, Lean or Extreme
                    Programming, Prowerse ensures a timely delivery of the
                    project.
                  </p>
                  <Link to="/about" className="about-btn">
                    <span>About us</span>{" "}
                    <i className="bx bx-chevron-right"></i>
                  </Link>
                </div>
              </div>
              <div className="col-xl-7 d-flex align-items-stretch">
                <div className="icon-boxes d-flex flex-column justify-content-center">
                  <div className="row">
                    <div
                      className="col-md-6 icon-box"
                      data-aos="fade-up"
                      data-aos-delay="100"
                    >
                      <i className="bx bx-body"></i>
                      <h4>People</h4>
                      <p>
                        People are the focus of fundamental belief at Prowerse.
                        To attract, hire and retain the best talents and provide
                        first-class learning, growing & working experiences is
                        the core Prowerse value.
                      </p>
                    </div>
                    <div
                      className="col-md-6 icon-box"
                      data-aos="fade-up"
                      data-aos-delay="200"
                    >
                      <i className="bx bx-book-reader"></i>
                      <h4>Journey</h4>
                      <p>
                        Prowerse passionately believes that moments,
                        experiences, and memories shared by team while on a
                        project delivery must be enjoyable & wholesome. As they
                        say, Happiness is a journey, not a destination.
                      </p>
                    </div>
                    <div
                      className="col-md-6 icon-box"
                      data-aos="fade-up"
                      data-aos-delay="300"
                    >
                      <i className="bx bx-receipt"></i>
                      <h4>Progress</h4>
                      <p>
                        Stay focused on the continuous march toward achieving
                        the milestones, the successes, and the breakthroughs.
                      </p>
                    </div>
                    <div
                      className="col-md-6 icon-box"
                      data-aos="fade-up"
                      data-aos-delay="400"
                    >
                      <i className="bx bx-bulb"></i>
                      <h4>Latest Thinking</h4>
                      <p>
                        Prowerse unlocks latest thinking and business values by
                        deploying calibrated and proven process methodology that
                        offers high performance business excellence.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- ======= Tabs Section ======= --> */}
        <section id="tabs" className="tabs">
          <div className="container" data-aos="fade-up">
            <ul className="nav nav-tabs row d-flex">
              <li className="nav-item col-3">
                <a
                  className="nav-link active show"
                  data-bs-toggle="tab"
                  data-bs-target="#tab-1"
                >
                  <i className="ri-gps-line"></i>
                  <h4 className="d-none d-lg-block">
                    Extensive experience and Industry Knowledge
                  </h4>
                </a>
              </li>
              <li className="nav-item col-3">
                <a
                  className="nav-link"
                  data-bs-toggle="tab"
                  data-bs-target="#tab-2"
                >
                  <i className="ri-body-scan-line"></i>
                  <h4 className="d-none d-lg-block">
                    Specialise in customized plan
                  </h4>
                </a>
              </li>
              <li className="nav-item col-3">
                <a
                  className="nav-link"
                  data-bs-toggle="tab"
                  data-bs-target="#tab-3"
                >
                  <i className="ri-sun-line"></i>
                  <h4 className="d-none d-lg-block">
                    Work as part of your team
                  </h4>
                </a>
              </li>
              <li className="nav-item col-3">
                <a
                  className="nav-link"
                  data-bs-toggle="tab"
                  data-bs-target="#tab-4"
                >
                  <i className="ri-store-line"></i>
                  <h4 className="d-none d-lg-block">
                    Work as part of your team
                  </h4>
                </a>
              </li>
            </ul>

            <div className="tab-content">
              <div className="tab-pane active show" id="tab-1">
                <div className="row">
                  <div
                    className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0"
                    data-aos="fade-up"
                    data-aos-delay="100"
                  >
                    <h3>Why Choose Us</h3>
                    <p className="fst-italic">
                      Prowerse is a Best Business consulting agency and
                      Professional web developing firm, provide superior
                      processes with the right tools. Our fresh techniques and
                      approach that allow clients to understand & solve their
                      problems.
                    </p>
                    <ul>
                      <li>
                        <i className="ri-check-double-line"></i>
                        <b>Client-Centric Solutions:</b> Extensive experience in
                        a company translates into a deep understanding of client
                        needs. This knowledge allows for the development of
                        tailor-made solutions that not only meet but exceed
                        client expectations. The ability to anticipate
                        industry-specific challenges enables the delivery of
                        software products that are not just functional, but
                        truly impactful for clients.
                      </li>
                      <li>
                        <i className="ri-check-double-line"></i>
                        <b>Efficient Problem Solving:</b>Industry knowledge is a
                        powerful tool when it comes to problem-solving. With a
                        wealth of experience, professionals can quickly identify
                        issues that may arise during software development and
                        implementation. This foresight allows for proactive
                        problem resolution, minimizing downtime and ensuring a
                        seamless experience for clients.
                      </li>
                      <li>
                        <i className="ri-check-double-line"></i>
                        <b>Optimized Processes:</b>
                        Over time, extensive experience in the industry results
                        in a refined and optimized development process. This
                        efficiency not only accelerates project timelines but
                        also enhances the overall quality of the software
                        delivered. A service-based software company with a
                        well-established and streamlined workflow can provide
                        faster, more cost-effective, and reliable solutions to
                        its clients.
                      </li>
                    </ul>
                    {/* <p>
                      Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum
                    </p> */}
                  </div>
                  <div
                    className="col-lg-6 order-1 order-lg-2 text-center"
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    <img
                      src="assets/img/tabs-1.jpg"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
              <div className="tab-pane" id="tab-2">
                <div className="row">
                  <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
                    <h3>Why Choose Us</h3>
                    <p>
                      Prowerse is a Best Business consulting agency and
                      Professional web developing firm, provide superior
                      processes with the right tools. Our fresh techniques and
                      approach that allow clients to understand & solve their
                      problems.
                    </p>
                    {/* <p className="fst-italic">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p> */}
                    <ul>
                      <li>
                        <i className="ri-check-double-line"></i>We specialize in
                        tailoring personalized plans, ensuring that our
                        solutions precisely align with your unique needs and
                        aspirations.
                      </li>
                      <li>
                        <i className="ri-check-double-line"></i>
                        From concept to execution, our focus on customized plans
                        goes beyond one-size-fits-all approaches.
                      </li>
                      <li>
                        <i className="ri-check-double-line"></i>We delve into
                        the intricacies of your requirements, sculpting
                        solutions that not only meet expectations but elevate
                        them.
                      </li>
                      <li>
                        <i className="ri-check-double-line"></i>With a
                        commitment to personalized excellence, we turn your
                        vision into a bespoke reality.
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-6 order-1 order-lg-2 text-center">
                    <img
                      src="prowerse-website/assets/img/tabs-2.jpg"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
              <div className="tab-pane" id="tab-3">
                <div className="row">
                  <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
                    <h3>Why Choose Us</h3>
                    <p>
                      Prowerse is a Best Business consulting agency and
                      Professional web developing firm, provide superior
                      processes with the right tools. Our fresh techniques and
                      approach that allow clients to understand & solve their
                      problems.
                    </p>
                    <ul>
                      <li>
                        <i className="ri-check-double-line"></i>We are partner
                        on paper and integral part of your team in real. We work
                        with you and your staffs inside your business
                      </li>
                      <li>
                        <i className="ri-check-double-line"></i>Embedded
                        seamlessly in your operations, we work as an extension
                        of your team, fostering collaboration and synergy for
                        shared success.
                      </li>
                      <li>
                        <i className="ri-check-double-line"></i>Our
                        professionals integrate seamlessly into your work
                        culture, contributing expertise and dedication to
                        amplify your team's capabilities.
                      </li>
                      <li>
                        <i className="ri-check-double-line"></i>As your
                        strategic partners, we immerse ourselves in your goals,
                        ensuring a cohesive and synchronized approach to every
                        project and initiative.
                      </li>
                      <li>
                        <i className="ri-check-double-line"></i>By aligning our
                        efforts with your vision, we become not just service
                        providers but invested collaborators, driving collective
                        achievements in tandem.
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-6 order-1 order-lg-2 text-center">
                    <img
                      src="prowerse-website/assets/img/tabs-3.jpg"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
              <div className="tab-pane" id="tab-4">
                <div className="row">
                  <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
                    <h3>Why Choose Us</h3>
                    <p>
                      Prowerse is a Best Business consulting agency and
                      Professional web developing firm, provide superior
                      processes with the right tools. Our fresh techniques and
                      approach that allow clients to understand & solve their
                      problems.
                    </p>

                    <ul>
                      <li>
                        <i className="ri-check-double-line"></i> Our commitment
                        is to achieve the revenues goals of the company without
                        compromising on the business values
                      </li>
                      <li>
                        <i className="ri-check-double-line"></i> We prioritize
                        open communication and active engagement, functioning as
                        more than just service providers but as responsive team
                        members attuned to your objectives.
                      </li>
                      <li>
                        <i className="ri-check-double-line"></i> Adaptable and
                        agile, we navigate challenges alongside your team,
                        leveraging our skills to enhance efficiency and
                        contribute to the overall success of your projects.
                      </li>
                      <li>
                        <i className="ri-check-double-line"></i> Our
                        collaborative ethos means that we share in both triumphs
                        and hurdles, fostering a sense of unity that elevates
                        the collective capabilities of your extended team.
                      </li>
                      <li>
                        <i className="ri-check-double-line"></i> Dedicated to
                        mutual growth, we bring a proactive mindset, actively
                        seeking opportunities to add value, innovate, and evolve
                        as an integral part of your dynamic workforce.
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-6 order-1 order-lg-2 text-center">
                    <img
                      src="prowerse-website/assets/img/tabs-4.jpg"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- ======= Services Section ======= --> */}
        <section id="services" className="services section-bg ">
          <div className="container" data-aos="fade-up">
            <div className="section-title text-center position-relative pb-3 mx-auto">
              <h2>Services</h2>
            </div>
            <div className="sub-section-title">
              <p>Software Development Outsourcing</p>
            </div>

            <div className="row">
              <div className="col-md-6">
                <div
                  className="icon-box"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <i className="bi bi-people-fill"></i>
                  <h4>
                    <a href="#">Staff Augmentation</a>
                  </h4>
                  <p>
                    Fill in the skill gap of in-house resources with the best
                    Prowerse offshore talents assigned to projects full-time and
                    managed by you directly. Prowerse provides staff
                    augmentation services to speed up development and optimize
                    development costs.
                  </p>
                </div>
              </div>
              <div className="col-md-6 mt-4 mt-md-0">
                <div
                  className="icon-box"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <i className="bi bi-people-fill"></i>
                  <h4>
                    <a href="#">Dedicated Team</a>
                  </h4>
                  <p>
                    Expand your software development capabilities and minimize
                    management efforts with a dedicated Prowerse development
                    team managed by a PM from Prowerse who regularly reports to
                    you and collaborates on all important decisions in the
                    project.
                  </p>
                </div>
              </div>
              {/* <div className="col-md-6 mt-4 mt-md-0">
                <div
                  className="icon-box"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <i className="bi bi-bar-chart"></i>
                  <h4>
                    <a href="#">Sed ut perspiciatis</a>
                  </h4>
                  <p>
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur
                  </p>
                </div>
              </div>
              <div className="col-md-6 mt-4 mt-md-0">
                <div
                  className="icon-box"
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  <i className="bi bi-binoculars"></i>
                  <h4>
                    <a href="#">Nemo Enim</a>
                  </h4>
                  <p>
                    Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum
                  </p>
                </div>
              </div>
              <div className="col-md-6 mt-4 mt-md-0">
                <div
                  className="icon-box"
                  data-aos="fade-up"
                  data-aos-delay="500"
                >
                  <i className="bi bi-brightness-high"></i>
                  <h4>
                    <a href="#">Magni Dolore</a>
                  </h4>
                  <p>
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui blanditiis praesentium voluptatum deleniti atque
                  </p>
                </div>
              </div>
              <div className="col-md-6 mt-4 mt-md-0">
                <div
                  className="icon-box"
                  data-aos="fade-up"
                  data-aos-delay="600"
                >
                  <i className="bi bi-calendar4-week"></i>
                  <h4>
                    <a href="#">Eiusmod Tempor</a>
                  </h4>
                  <p>
                    Et harum quidem rerum facilis est et expedita distinctio.
                    Nam libero tempore, cum soluta nobis est eligendi
                  </p>
                </div>
              </div> */}
            </div>
          </div>
        </section>
        {/* <!-- ======= Portfolio Section ======= --> */}
        {/* <section id="portfolio" className="portfolio">
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              <h2>Portfolio</h2>
              <p>
                Magnam dolores commodi suscipit. Necessitatibus eius consequatur
                ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
                quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
              </p>
            </div>

            <div className="row" data-aos="fade-up" data-aos-delay="100">
              <div className="col-lg-12 d-flex justify-content-center">
                <ul id="portfolio-flters">
                  <li data-filter="*" className="filter-active">
                    All
                  </li>
                  <li data-filter=".filter-app">App</li>
                  <li data-filter=".filter-card">Card</li>
                  <li data-filter=".filter-web">Web</li>
                </ul>
              </div>
            </div>

            <div
              className="row portfolio-container"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                <div className="portfolio-wrap">
                  <img
                    src="assets/img/portfolio/portfolio-1.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="portfolio-info">
                    <h4>App 1</h4>
                    <p>App</p>
                    <div className="portfolio-links">
                      <a
                        href="assets/img/portfolio/portfolio-1.jpg"
                        data-gallery="portfolioGallery"
                        className="portfolio-lightbox"
                        title="App 1"
                      >
                        <i className="bx bx-plus"></i>
                      </a>
                      <a href="portfolio-details.html" title="More Details">
                        <i className="bx bx-link"></i>
                      </a>
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
                    <h4>Web 3</h4>
                    <p>Web</p>
                    <div className="portfolio-links">
                      <a
                        href="assets/img/portfolio/portfolio-2.jpg"
                        data-gallery="portfolioGallery"
                        className="portfolio-lightbox"
                        title="Web 3"
                      >
                        <i className="bx bx-plus"></i>
                      </a>
                      <a href="portfolio-details.html" title="More Details">
                        <i className="bx bx-link"></i>
                      </a>
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
                    <h4>App 2</h4>
                    <p>App</p>
                    <div className="portfolio-links">
                      <a
                        href="assets/img/portfolio/portfolio-3.jpg"
                        data-gallery="portfolioGallery"
                        className="portfolio-lightbox"
                        title="App 2"
                      >
                        <i className="bx bx-plus"></i>
                      </a>
                      <a href="portfolio-details.html" title="More Details">
                        <i className="bx bx-link"></i>
                      </a>
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
                    <h4>Card 2</h4>
                    <p>Card</p>
                    <div className="portfolio-links">
                      <a
                        href="assets/img/portfolio/portfolio-4.jpg"
                        data-gallery="portfolioGallery"
                        className="portfolio-lightbox"
                        title="Card 2"
                      >
                        <i className="bx bx-plus"></i>
                      </a>
                      <a href="portfolio-details.html" title="More Details">
                        <i className="bx bx-link"></i>
                      </a>
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
                    <h4>Web 2</h4>
                    <p>Web</p>
                    <div className="portfolio-links">
                      <a
                        href="assets/img/portfolio/portfolio-5.jpg"
                        data-gallery="portfolioGallery"
                        className="portfolio-lightbox"
                        title="Web 2"
                      >
                        <i className="bx bx-plus"></i>
                      </a>
                      <a href="portfolio-details.html" title="More Details">
                        <i className="bx bx-link"></i>
                      </a>
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
                    <h4>App 3</h4>
                    <p>App</p>
                    <div className="portfolio-links">
                      <a
                        href="assets/img/portfolio/portfolio-6.jpg"
                        data-gallery="portfolioGallery"
                        className="portfolio-lightbox"
                        title="App 3"
                      >
                        <i className="bx bx-plus"></i>
                      </a>
                      <a href="portfolio-details.html" title="More Details">
                        <i className="bx bx-link"></i>
                      </a>
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
                    <h4>Card 1</h4>
                    <p>Card</p>
                    <div className="portfolio-links">
                      <a
                        href="assets/img/portfolio/portfolio-7.jpg"
                        data-gallery="portfolioGallery"
                        className="portfolio-lightbox"
                        title="Card 1"
                      >
                        <i className="bx bx-plus"></i>
                      </a>
                      <a href="portfolio-details.html" title="More Details">
                        <i className="bx bx-link"></i>
                      </a>
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
                    <h4>Card 3</h4>
                    <p>Card</p>
                    <div className="portfolio-links">
                      <a
                        href="assets/img/portfolio/portfolio-8.jpg"
                        data-gallery="portfolioGallery"
                        className="portfolio-lightbox"
                        title="Card 3"
                      >
                        <i className="bx bx-plus"></i>
                      </a>
                      <a href="portfolio-details.html" title="More Details">
                        <i className="bx bx-link"></i>
                      </a>
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
                    <h4>Web 3</h4>
                    <p>Web</p>
                    <div className="portfolio-links">
                      <a
                        href="assets/img/portfolio/portfolio-9.jpg"
                        data-gallery="portfolioGallery"
                        className="portfolio-lightbox"
                        title="Web 3"
                      >
                        <i className="bx bx-plus"></i>
                      </a>
                      <a href="portfolio-details.html" title="More Details">
                        <i className="bx bx-link"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        {/* <!-- ======= Testimonials Section ======= --> */}
        {/* <section id="testimonials" className="testimonials">
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              <h2>Testimonials</h2>
              <p>
                Magnam dolores commodi suscipit. Necessitatibus eius consequatur
                ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
                quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
              </p>
            </div>

            <div
              className="testimonials-slider swiper"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="testimonial-wrap">
                    <div className="testimonial-item">
                      <img
                        src="assets/img/testimonials/testimonials-1.jpg"
                        className="testimonial-img"
                        alt=""
                      />
                      <h3>Saul Goodman</h3>
                      <h4>Ceo &amp; Founder</h4>
                      <p>
                        <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                        Proin iaculis purus consequat sem cure digni ssim donec
                        porttitora entum suscipit rhoncus. Accusantium quam,
                        ultricies eget id, aliquam eget nibh et. Maecen aliquam,
                        risus at semper.
                        <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="testimonial-wrap">
                    <div className="testimonial-item">
                      <img
                        src="assets/img/testimonials/testimonials-2.jpg"
                        className="testimonial-img"
                        alt=""
                      />
                      <h3>Sara Wilsson</h3>
                      <h4>Designer</h4>
                      <p>
                        <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                        Export tempor illum tamen malis malis eram quae irure
                        esse labore quem cillum quid cillum eram malis quorum
                        velit fore eram velit sunt aliqua noster fugiat irure
                        amet legam anim culpa.
                        <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="testimonial-wrap">
                    <div className="testimonial-item">
                      <img
                        src="assets/img/testimonials/testimonials-3.jpg"
                        className="testimonial-img"
                        alt=""
                      />
                      <h3>Jena Karlis</h3>
                      <h4>Store Owner</h4>
                      <p>
                        <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                        Enim nisi quem export duis labore cillum quae magna enim
                        sint quorum nulla quem veniam duis minim tempor labore
                        quem eram duis noster aute amet eram fore quis sint
                        minim.
                        <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="testimonial-wrap">
                    <div className="testimonial-item">
                      <img
                        src="assets/img/testimonials/testimonials-4.jpg"
                        className="testimonial-img"
                        alt=""
                      />
                      <h3>Matt Brandon</h3>
                      <h4>Freelancer</h4>
                      <p>
                        <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                        Fugiat enim eram quae cillum dolore dolor amet nulla
                        culpa multos export minim fugiat minim velit minim dolor
                        enim duis veniam ipsum anim magna sunt elit fore quem
                        dolore labore illum veniam.
                        <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="testimonial-wrap">
                    <div className="testimonial-item">
                      <img
                        src="assets/img/testimonials/testimonials-5.jpg"
                        className="testimonial-img"
                        alt=""
                      />
                      <h3>John Larson</h3>
                      <h4>Entrepreneur</h4>
                      <p>
                        <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                        Quis quorum aliqua sint quem legam fore sunt eram irure
                        aliqua veniam tempor noster veniam enim culpa labore
                        duis sunt culpa nulla illum cillum fugiat esse veniam
                        culpa fore nisi cillum quid.
                        <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-pagination"></div>
            </div>
          </div>
        </section> */}
        <section className="testimonial-section">
          <div className="large-container">
            <div
              className="section-title text-center position-relative pb-3 mx-auto"
              data-aos="fade-up"
            >
              {/* <span class="title">Testimonial</span> */}
              <h2>What Our core client say ?</h2>
            </div>
            <div className="container" data-aos="fade-up">
              <div className="row gy-4">
                <div
                  className="col-xl-6 col-md-6 inner-box"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <article>
                    <div className="inner-article">
                      <p className="text">
                        DevOps is their forte. Bring what you got. AWS, Azure,
                        GCP. Strong technical acumen. In other terms, it's like
                        a tennis player with qualities of Fed, Rafa and Novak.
                      </p>
                      <p>
                        <h6>
                          CTO, Sports event management firm, Prague, Czechia
                        </h6>
                      </p>
                    </div>

                    {/* <h2 className="title">
                      <a href="blog-details.html">
                        The importance of effective product engineering strategy
                      </a>
                    </h2> */}

                    {/* <div className="d-flex align-items-center">
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
                    </div> */}
                  </article>
                </div>

                <div
                  className="col-xl-6 col-md-6 inner-box"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <article>
                    <div className="inner-article">
                      {" "}
                      <p className="text">
                        Prowerse is best suited for an emerging brands eying
                        quality deliveries at optimum costs. Glad we found them.
                        Can't speak higher of any other brand.
                      </p>
                      <p>
                        <h6>Diana, Event Management firm from Durban, SA</h6>
                      </p>
                    </div>
                  </article>
                </div>

                <div
                  className="col-xl-6 col-md-6 inner-box"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <article>
                    <div className="inner-article">
                      <p className="text">
                        DevOps is their forte. Bring what you got. AWS, Azure,
                        GCP. Strong technical acumen. In other terms, it's like
                        a tennis player with qualities of Fed, Rafa and Novak.
                      </p>
                      <p>
                        <h6>
                          CTO, Sports event management firm, Prague, Czechia
                        </h6>
                      </p>
                    </div>
                  </article>
                </div>
                <div
                  className="col-xl-6 col-md-6 inner-box"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <article>
                    <div className="inner-article">
                      <p className="text">
                        DevOps is their forte. Bring what you got. AWS, Azure,
                        GCP. Strong technical acumen. In other terms, it's like
                        a tennis player with qualities of Fed, Rafa and Novak.
                      </p>
                      <p>
                        <h6>
                          CTO, Sports event management firm, Prague, Czechia
                        </h6>
                      </p>
                    </div>
                  </article>
                </div>
              </div>
              {/* <!-- End recent posts list --> */}
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
                Crafting innovative solutions through meticulous code and
                creative design, software product development transforms ideas
                into tangible, user-centric realities, pushing the boundaries of
                technological possibilities
              </p>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="box" data-aos="fade-up" data-aos-delay="100">
                  <h3>Enterprise Applications</h3>
                  <p>
                    Enterprise Applications are large-scale software packages
                    that support business processes, information flows,
                    reporting, and data analytics in complex organizations.
                    Prowerse focuses on Simplicity, Maintainability,
                    Reusability, Decoupling of Technology and Functionality.
                    Prowerse's proven approach of breaking large-scale
                    application in to the small.
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
                    with ease of use. Prowerse can participate from concept
                    screen sketching till seamless deployments of Apps to the
                    respective app stores.
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
                    enlarge digital footprint. Prowerse is proud of excellent
                    team of designers & developers, which can collaborate with
                    you during the journey of concept to website hosting.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="recent-posts" className="recent-posts">
          {/* <!--  Section Title --> */}
          <div className="container section-title text-center position-relative pb-3 mx-auto" data-aos="fade-up">
            <h2>Recent Posts</h2>
         
          </div>
          <div className="sub-section-title">
          <p>
              Explore the latest insights and updates in our hub of recent
              posts, staying in the loop with the pulse of our dynamic
              discussions.
            </p>
            </div>

          <div className="container">
            <div className="row gy-4">
              <div
                className="col-xl-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <article > 
                  <div className="post-img">
                    <img
                      src="prowerse-website/assets/img/blog/blog-1.png"
                      alt=""
                      className="img-fluid"
                    />
                  </div>

                  <p className="post-category">Product Engineering</p>

                  <h2 className="title">
                    <a href="/blog-product">
                      The importance of effective product engineering strategy
                    </a>
                  </h2>

                  {/* <div className="d-flex align-items-center">
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
                  </div> */}
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
                      src="prowerse-website/assets/img/blog/blog-2.png"
                      alt=""
                      className="img-fluid"
                    />
                  </div>

                  <p className="post-category">Infrastructure</p>

                  <h2 className="title">
                    <a href="blog-infra">
                      Infrastructure As Code and it's Relevance
                    </a>
                  </h2>

                  {/* <div className="d-flex align-items-center">
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
                  </div> */}
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
                      src="prowerse-website/assets/img/blog/blog-3.png"
                      alt=""
                      className="img-fluid"
                    />
                  </div>

                  <p className="post-category">Cloud</p>

                  <h2 className="title">
                  <a href="/blog-cloud">
                      Hybrid Cloud - What, Why & How?
                    </a>
                  </h2>

                  {/* <div className="d-flex align-items-center">
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
                  </div> */}
                </article>
              </div>
              {/* <!-- End post list item --> */}
            </div>
            {/* <!-- End recent posts list --> */}
          </div>
        </section>
        {/* <!-- End Contact Section --> */}
      </main>
      {/* <!-- End #main --> */}
      {/* <!-- Call-to-action Section - Home Page --> */}
      <section id="call-to-action" className="call-to-action">
        <img src="prowerse-website/assets/img/cta-bg.jpg" alt="" />

        <div className="container">
          <div
            className="row justify-content-center"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <div className="col-xl-10">
              <div className="text-center">
                <h3>Let's Build Great Products</h3>

                <p>
                  Let's connect on how we can assist you build your dream with
                  high performance business applications suited for today's
                  digital environment.
                </p>
                <Link className="cta-btn" to="/contact">
                  Call To Action
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Call-to-action Section --> */}

      <Footer />
    </>
  );
};
export default Home;
