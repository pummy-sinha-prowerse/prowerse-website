import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import Clock from "../Component/Clock";
function ContactUS() {
  const [ratios, setRatios] = useState({
    secondRatio: 0,
    minuteRatio: 0,
    hourRatio: 0,
  });

  const { secondRatio, minuteRatio, hourRatio } = ratios;

  // india time
  // const setClockIndia = () => {
  //   const currentDate = new Date();
  //   const secondRatio = currentDate.getSeconds() / 60;
  //   const minuteRatio = (secondRatio + currentDate.getMinutes()) / 60;
  //   const hourRatio = (minuteRatio + currentDate.getHours()) / 12;

  //   setRatios({
  //     secondRatio,
  //     minuteRatio,
  //     hourRatio,
  //   });
  // };

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     setClockIndia();
  //   }, 1000);

  //   return () => {
  //     clearInterval(intervalId);
  //   };
  // }, []);
  const [time, setTime] = useState({
    india: new Date(),
    uk: new Date(),
    usa: new Date(),
  });

  const setClock = () => {
    const indiaTime = new Date();
    // Get the time zone offset for the UK
    // Get the time zone offset for the UK
    const ukTime = new Date(
      indiaTime.toLocaleString("en-US", { timeZone: "Europe/London" })
    );
    const usaTime = new Date(
      indiaTime.toLocaleString("en-US", { timeZone: "America/New_York" })
    );
    setTime({ india: indiaTime, uk: ukTime, usa: usaTime });
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setClock();
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const { india, uk, usa } = time;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <section id="hero-contact" className="d-flex align-items-center">
        <div className="container" data-aos="zoom-out" data-aos-delay="100">
          <div className="row">
            <div className="col-xl-6">
              <h1>#Connect</h1>
              <h2>Let's Build Great Products</h2>
              <h5>
                Let's bridge the gap and connect the dots! Whether you're
                seeking collaboration, have burning questions, or just fancy a
                digital chat, we're here—ready to engage, inspire, and make
                meaningful connections in the vast landscape of possibilities.
              </h5>
              {/* <a href="#about" className="btn-get-started scrollto">
                Get Started
              </a> */}
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ======= Contact Section ======= --> */}
      <section id="contact" className="contact">
        <div className="container" data-aos="fade-up">
          <div className="section-title text-center position-relative pb-3 mx-auto">
            <h2>Contact</h2>
          </div>
          <div className="sub-section-title">
            <p>
              Contact us today and let us help you build that next great
              software turning disruption into opportunity.
            </p>
          </div>

          <div className="row" data-aos="fade-up" data-aos-delay="100">
            <div className="col-lg-6 ">
              <div className="row">
                <div className="col-md-12">
                  <div className="info-box">
                    <i className="bx bx-map"></i>
                    <h3>Our Address</h3>
                    <p>
                      401, D and C Dynasty CG Road, Stadium Cross Rd, Ahmedabad,
                      Gujarat, 380009
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="info-box mt-4">
                    <i className="bx bx-envelope"></i>
                    <h3>Email Us</h3>
                    <p>
                      info@prowerse.com
                      {/* <br />
                      contact@example.com */}
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="info-box mt-4">
                    <i className="bx bx-phone-call"></i>
                    <h3>Call Us</h3>
                    <p>
                      +91-9537485017
                      {/* <br />
                      +1 6678 254445 41 */}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <form
                action="forms/contact.php"
                method="post"
                role="form"
                className="php-email-form"
              >
                <div className="row">
                  <div className="col form-group">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      id="name"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div className="col form-group">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      id="email"
                      placeholder="Your Email"
                      required
                    />
                  </div>
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    name="subject"
                    id="subject"
                    placeholder="Subject"
                    required
                  />
                </div>
                <div className="form-group">
                  <textarea
                    className="form-control"
                    name="message"
                    rows="5"
                    placeholder="Message"
                    required
                  ></textarea>
                </div>
                <div className="my-3">
                  <div className="loading">Loading</div>
                  <div className="error-message"></div>
                  <div className="sent-message">
                    Your message has been sent. Thank you!
                  </div>
                </div>
                <div className="text-center">
                  <button type="submit">Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- ======= Services Section ======= --> */}
      <section id="services" className="services section-bg">
        <div className="container" data-aos="fade-up">
          <div className="section-title text-center position-relative pb-3 mx-auto">
            <h2>What's Next?</h2>
            {/* <p>Software Development Outsourcing</p> */}
          </div>

          <div className="row" style={{marginTop: "20px"}}>
            <div className="col-md-6">
              <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
                <i className="bi bi-briefcase"></i>
                <h4>
                  <a href="#">Share Requirements</a>
                </h4>
                <p className="service-fill">
                  Our team will analyze project requirements and select the most
                  apt developers best suited for tech stack.
                </p>
              </div>
            </div>
            <div className="col-md-6 mt-4 mt-md-0">
              <div className="icon-box" data-aos="fade-up" data-aos-delay="200">
                <i className="bi bi-card-checklist"></i>
                <h4>
                  <a href="#">Discuss Project Details</a>
                </h4>
                <p className="service-fill">
                  Our team will reach out to discuss project related queries and
                  to offer the best solution for given business scenario.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
                <i className="bi bi-briefcase"></i>
                <h4>
                  <a href="#">Review Engagement Terms</a>
                </h4>
                <p className="service-fill">
                  Based on the details provided, you can choose the engagement
                  model & timelines for project execution.
                </p>
              </div>
            </div>
            <div className="col-md-6 mt-4 mt-md-0">
              <div className="icon-box" data-aos="fade-up" data-aos-delay="200">
                <i className="bi bi-card-checklist"></i>
                <h4>
                  <a href="#">Let's create another success-story</a>
                </h4>
                <p className="service-fill">
                  We mutually agree on a timeline and costing, define milestones
                  and move forward to creating another success-story
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services " className="our-office">
        <div className="container" data-aos="fade-up">
          <div className="section-title text-center position-relative pb-3 mx-auto">
            <h2>Our Offices</h2>
            {/* <p>Software Development Outsourcing</p> */}
          </div>

          <div className="row" style={{marginTop: "20px"}}>
            <div className="col-md-4 card-first">
              <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
                <h4>
                  <a href="#">India</a>
                </h4>
                <p className="service-fill">
                  401, D and C Dynasty CG Road, Stadium Cross Rd, Ahmedabad,
                  Gujarat 380009
                </p>
                <p>
                  <b className="service-fill">Phone:-</b>
                  <span className="service-fill">+91-9537485017</span>
                  <br />
                  <b className="service-fill">Email:-</b>{" "}
                  <span className="service-fill">info@prowerse.com</span>
                  <br />
                  <Link
                    to="https://www.google.co.in/maps/place/Prowerse/@23.0419532,72.5453409,14z/data=!4m6!3m5!1s0x395c2985ee155555:0x7f4b353f9d5a755a!8m2!3d23.0389321!4d72.563301!16s%2Fg%2F11ngmktn3p?entry=ttu"
                    target="_blank"
                  >
                    {" "}
                    <b className="service-fill">Get Direction</b>
                  </Link>
                  {/* <Clock
                    secondRatio={secondRatio}
                    minuteRatio={minuteRatio}
                    hourRatio={hourRatio}
                  /> */}
                  <Clock
                    hourRatio={
                      ((india.getHours() % 12) + india.getMinutes() / 60) / 12
                    }
                    minuteRatio={
                      (india.getMinutes() + india.getSeconds() / 60) / 60
                    }
                    secondRatio={india.getSeconds() / 60}
                  />
                  {/* <Clock size={400} timeFormat="24hour" hourFormat="standard" /> */}
                </p>
              </div>
            </div>
            <div className="col-md-4 mt-4 mt-md-0">
              <div className="icon-box" data-aos="fade-up" data-aos-delay="200">
                <h4>
                  <a href="#">United Kingdom</a>
                </h4>
                <p className="service-fill">
                  11 Black Rod Close Hayes London - UB3 4QJ
                </p>
                <br />
                <br />
                <p>
                  <b className="service-fill">Email:-</b>{" "}
                  <span className="service-fill">info@prowerse.com</span>
                  <br />
                  <Link
                    to="https://www.google.com/maps/place/11+Black+Rod+Cl,+Hayes+UB3+4QJ,+UK/@51.5004728,-0.421755,17z/data=!3m1!4b1!4m5!3m4!1s0x48767289181e4a17:0x2d3dc8133d061e0c!8m2!3d51.5004728!4d-0.4195663"
                    target="_blank"
                  >
                    {" "}
                    <b className="service-fill">Get Direction</b>
                  </Link>
                  {/* <Clock
                    secondRatio={secondRatioUK}
                    minuteRatio={minuteRatioUK}
                    hourRatio={hourRatioUK}
                  /> */}
                  <Clock
                    hourRatio={
                      ((uk.getHours() % 12) + uk.getMinutes() / 60) / 12
                    }
                    minuteRatio={(uk.getMinutes() + uk.getSeconds() / 60) / 60}
                    secondRatio={uk.getSeconds() / 60}
                  />
                </p>
              </div>
            </div>
            <div className="col-md-4 card-last">
              <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
                <h4>
                  <a href="#">United States</a>
                </h4>
                <p className="service-fill">
                  643 Liberty Avenue Jersey City NJ 07307
                </p>
                <br />
                <br />
                <p>
                  <b className="service-fill">Email:-</b>{" "}
                  <span className="service-fill">info@prowerse.com</span>
                  <br />
                  <Link
                    to="https://www.google.com/maps/place/643+Liberty+Ave,+Jersey+City,+NJ+07307,+USA/@40.7585426,-74.0513325,17z/data=!4m6!3m5!1s0x89c2577312992427:0x4d1233267f2a868c!8m2!3d40.7585426!4d-74.0513325!16s%2Fg%2F11c132sd1r?entry=ttu"
                    target="_blank"
                  >
                    {" "}
                    <b className="service-fill">Get Direction</b>
                  </Link>
                  <Clock
                    hourRatio={
                      ((usa.getHours() % 12) + usa.getMinutes() / 60) / 12
                    }
                    minuteRatio={
                      (usa.getMinutes() + usa.getSeconds() / 60) / 60
                    }
                    secondRatio={usa.getSeconds() / 60}
                  />
                </p>
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
export default ContactUS;
