import React, { useState } from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuOpenDrop, setIsMenuOpenDrop] = useState(false);
  const [isMenuOpenFull, setIsMenuOpenFull] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsMenuOpenFull(!isMenuOpenFull);
  };
  const toggleDropMenu = () => {
    setIsMenuOpenDrop(!isMenuOpenDrop);
    console.log("ppppppp");
  };
  return (
    <>
      <header
        id="header"
        className={`fixed-top d-flex align-items-center  ${
          isMenuOpen ? "header-scrolled" : ""
        }`}
      >
        <div className="container d-flex align-items-center">
          <Link to="/" className="logo me-auto">
            <img src="assets/img/prowerse.png" alt="logo" />
          </Link>
          <nav
            id="navbar"
            className={`navbar order-last order-lg-0 ${
              isMenuOpen ? "navbar-mobile" : ""
            }`}
          >
            {isMenuOpen ? (
              <ul>
                <li>
                  <CustomLink
                    className="nav-link scrollto"
                    to="/"
                    onClick={toggleMenu}
                  >
                    Company Insights
                  </CustomLink>
                </li>
                <li>
                  <CustomLink
                    className="nav-link scrollto"
                    to="/build-your-dedicated-team"
                    onClick={toggleMenu}
                  >
                    Build your dedicated team
                  </CustomLink>
                </li>

                <li class="dropdown has-dropdown">
                  <CustomLinkDropDown
                    className="nav-link scrollto"
                    to="/service"
                  >
                    <span>Services</span>{" "}
                    <i class="bi bi-chevron-down" onClick={toggleDropMenu}></i>
                  </CustomLinkDropDown>

                          <ul
                            className={`${
                              isMenuOpenDrop && isMenuOpen ? "dropdown-active" : ""
                            }`}
                            // class="dd-box-shadow dropdown-active"
                            // {(isMenuOpenDrop && isMenuOpen ) {onClick={toggleDropMenu}} }
                          >
                            <li>
                              <CustomLink
                                className="nav-link scrollto"
                                to="/buildyourteam"
                                onClick={toggleMenu}
                              >
                                Build Your Own Team
                              </CustomLink>
                              {/* <a href="/buildyourteam">Build Your Own Team</a> */}
                            </li>
                            <li>
                              <CustomLink className="nav-link scrollto" to="/product" onClick={toggleMenu}> 
                                Product Engineering
                              </CustomLink>
                              {/* <a href="/product">Product Engineering</a> */}
                            </li>
                            <li>
                              <a href="#" onClick={toggleMenu}>Test Automation</a>
                            </li>
                            <li>
                              <a href="#" onClick={toggleMenu}>DevOps</a>
                            </li>
                          </ul>
                </li>
                <li>
                  <CustomLink
                    className="nav-link scrollto"
                    to="/careers"
                    onClick={toggleMenu}
                  >
                    Careers
                  </CustomLink>
                </li>
              </ul>
            ) : (
              <ul>
                <li>
                  <CustomLink className="nav-link scrollto" to="/">
                    Company Insights
                  </CustomLink>
                </li>
                <li>
                  <CustomLink className="nav-link scrollto" to="/build-your-dedicated-team">
                    Build your dedicated team
                  </CustomLink>
                </li>

                <li class="dropdown has-dropdown">
                  <CustomLink className="nav-link scrollto" to="/service">
                    <span>Services</span>{" "}
                    <i
                      class="bi bi-chevron-down"
                      onClick={
                        isMenuOpenDrop && isMenuOpen ? toggleDropMenu : null
                      }
                    ></i>
                  </CustomLink>

                  <ul
                    className={`${
                      isMenuOpenDrop && isMenuOpen ? "dropdown-active" : ""
                    }`}
                    // class="dd-box-shadow dropdown-active"
                    // {(isMenuOpenDrop && isMenuOpen ) {onClick={toggleDropMenu}} }
                  >
                    <li>
                      <CustomLink
                        className="nav-link scrollto"
                        to="/buildyourteam"
                      >
                        Build Your Own Team
                      </CustomLink>
                      {/* <a href="/buildyourteam">Build Your Own Team</a> */}
                    </li>
                    <li>
                      <CustomLink className="nav-link scrollto" to="/product">
                        Product Engineering
                      </CustomLink>
                      {/* <a href="/product">Product Engineering</a> */}
                    </li>
                    <li>
                      <a href="#">Test Automation</a>
                    </li>
                    <li>
                      <a href="#">DevOps</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <CustomLink className="nav-link scrollto" to="/careers">
                    Careers
                  </CustomLink>
                </li>
              </ul>
            )}

            <i
              className={`bi mobile-nav-toggle ${
                isMenuOpen ? "bi-x" : "bi-list"
              }`}
              onClick={toggleMenu}
              // className="bi bi-list mobile-nav-toggle"
            ></i>
          </nav>
          <Link to="/contact" className="get-started-btn scrollto">
            Let's Talk
          </Link>
        </div>
      </header>
    </>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}

function CustomLinkDropDown({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <Link to={to} {...props} className={isActive ? "active" : ""}>
      {children}
    </Link>
  );
}
