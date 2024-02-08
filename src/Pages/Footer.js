import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      {/* <!-- ======= Footer ======= --> */}
      <footer id="footer">
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6 footer-contact">
                <h3>
                  Prowerse<span></span>
                </h3>
                <p>
                  401, D and C Dynasty CG Road, Stadium Cross Rd, <br />
                  Ahmedabad
                  <br />
                  Gujarat <br />
                  <br />
                  <strong>Phone:</strong> +91-9537485017
                  <br />
                  <strong>Email:</strong> info@prowerse.com
                  <br />
                </p>
              </div>

              <div className="col-lg-2 col-md-6 footer-links">
                <h4>Useful Links</h4>
                <ul>
                  <li>
                    <i className="bx bx-chevron-right"></i>{" "}
                    <Link to="/">Main Hub</Link>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>{" "}
                    <Link to="/about">Company Insights</Link>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>{" "}
                    <Link to="/service">Services</Link>
                  </li>

                  <li>
                    <i className="bx bx-chevron-right"></i>{" "}
                    <Link to="/careers">Careers</Link>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>{" "}
                    <Link to="/contact">Contact</Link>
                  </li>
                </ul>
              </div>

              <div className="col-lg-3 col-md-6 footer-links">
                <h4>Our Services</h4>
                <ul>
                  <li>
                    <i className="bx bx-chevron-right"></i>{" "}
                    <Link to="/buildyourteam">Build Your Own Team</Link>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>{" "}
                    <Link to="/product">Product Engineering </Link>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>{" "}
                    <Link to="#">DevOps</Link>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>{" "}
                    <Link to="#">Test Automation</Link>
                  </li>
                  {/* <li>
                    <i className="bx bx-chevron-right"></i>{" "}
                    <a href="#">Graphic Design</a>
                  </li> */}
                </ul>
              </div>

              <div className="col-lg-3 col-md-6 footer-newsletter">
                <h4>Follow US:</h4>
                <p>
                  {" "}
                  <div className="social-links ">
                  <Link
                    to="https://www.linkedin.com/company/prowerse/mycompany/"
                    target="_blank"
                    className="linkedin"
                  >
                    <i className="bx bxl-linkedin"></i>
                  </Link>
                  </div>
                </p>
                {/* <p>
                  Stay ahead of the curve and subscribe to our newsletter for
                  exclusive updates, valuable insights, and a front-row seat to
                  the latest in tech and innovation.
                </p>
                <form action="" method="post">
                  <input type="email" name="email" />
                  <input type="submit" value="Subscribe" />
                </form> */}
              </div>
            </div>
          </div>
        </div>

        <div className="container d-md-flex py-4">
          <div className="me-md-auto text-center text-md-start">
            <div className="copyright">
              &copy; Copyright{" "}
              <strong>
                <span>Prowerse</span>
              </strong>
              . All Rights Reserved
            </div>
          </div>
          <div className="social-links text-center text-md-end pt-3 pt-md-0">
            {/* <a href="#" className="twitter">
              <i className="bx bxl-twitter"></i>
            </a>
            <a href="#" className="facebook">
              <i className="bx bxl-facebook"></i>
            </a>
            <a href="#" className="instagram">
              <i className="bx bxl-instagram"></i>
            </a>
            <a href="#" className="google-plus">
              <i className="bx bxl-skype"></i>
            </a> */}
            <a
              href="https://www.linkedin.com/company/prowerse/mycompany/"
              target="_blank"
              className="linkedin"
            >
              <i className="bx bxl-linkedin"></i>
            </a>
          </div>
        </div>
      </footer>
      <Link
        href="#"
        className="back-to-top d-flex align-items-center justify-content-center"
      >
        <i className="bi bi-arrow-up-short"></i>
      </Link>
    </>
  );
}
export default Footer;
