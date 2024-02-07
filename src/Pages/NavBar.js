import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

export default function Navbar() {
  return (
    <nav id="navbar" className="navbar order-last order-lg-0">
      <ul>
        <li>
          <CustomLink className="nav-link scrollto" to="/">
            Home
          </CustomLink>
        </li>
        <li>
          <CustomLink className="nav-link scrollto" to="/about">
            Company Insights
          </CustomLink>
        </li>

        <li class="dropdown has-dropdown">
          <CustomLink className="nav-link scrollto" to="/service">
            <span>Services</span> <i class="bi bi-chevron-down"></i>
          </CustomLink>

          <ul class="dd-box-shadow">
            <li>
              <CustomLink className="nav-link scrollto" to="/buildyourteam">
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
        {/* <li>
          <CustomLink className="nav-link scrollto" to="/blog">
            Knowledge Center
          </CustomLink>
        </li> */}

        <li>
          <CustomLink className="nav-link scrollto" to="/careers">
            Careers
          </CustomLink>
        </li>
      </ul>
      <i className="bi bi-list mobile-nav-toggle"></i>
    </nav>
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
