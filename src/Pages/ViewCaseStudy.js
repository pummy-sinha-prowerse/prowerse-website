import React from "react";
import Footer from "./Footer";
import { Link } from "react-router-dom";

function ViewCaseStudy() {
  return (
    <>
      <section id="hero" className="d-flex align-items-center">
        <div className="container" data-aos="zoom-out" data-aos-delay="100">
          <div className="row">
            <div className="col-xl-6">
              <h1>#CASE STUDIES</h1>
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
                  <a href="/blog-product"><span style={{ color: "#ff8050" }}>ABOUT ALGOTRADER</span></a>
                </h4>

                <div className="entry-content">
                  <p>
                    AlgoTrader is basically a first fully-integrated algorithmic
                    trading software solution for quantitative hedge funds. It
                    allows automation of complex, quantitative trading
                    strategies in Equity, Forex and Derivative markets.
                    AlgoTrader provides everything a typical quantitative hedge
                    fund needs on an everyday basis to run his operation and it
                    is also the very first and only algorithmic trading software
                    product to allow automated trading of Bitcoin and other
                    Cryptocurrencies. Any hedge fund, brokerage firm or
                    individual can get and use AlgoTrader's inbuilt algorithms,
                    past data and key indicators to create innovative and
                    successful trading strategies and take their trading
                    decisions based on that with high level of probability of
                    success. AlgoTrader currently supports over 100 trading
                    strategies and already has more than 80 clients and 400+
                    supported brokers and exchanges.
                  </p>
                  <h3 className="sidebar-title"><span style={{ color: "#ff8050" }}>KEY CHALLENGES</span></h3>
                  <ul>
                    <li>
                      AlgoTrader company already had an old site with an
                      outdated design and it required badly to be updated as per
                      latest technologies especially its user interface (UI),
                      design and other internal pages. Prowerse was asked to
                      redesign the outdated website as per client needs and as
                      per PSDs provided to Prowerse.
                    </li>
                    <li>
                      The client wanted the AlgoTrader website to be fully
                      responsive so that it can be opened on any kind of mobile
                      devices and desktop computers.
                    </li>
                    <li>
                      All Existing Plugins in the AlgoTrader site were to be
                      maintained as they are required for the functionality of
                      the website.
                    </li>
                    <li>
                      Project was in a bottleneck situation and needed lots of
                      dedicated work and efforts and Prowerse just did that.
                    </li>
                    <li>
                      The website required rigorous and thorough testing as the
                      client was very particular in terms of web designs and
                      wanted it to be pixel perfect.
                    </li>
                  </ul>
                  <h3 className="sidebar-title"><span style={{ color: "#ff8050" }}>PROPOSITION & SOLUTION</span></h3>

                  <p>
                  Prowerse has worked on many projects similar to AlgoTrader
                    before. Hence, we presented the following solution to the
                    owners of AlgoTrader:
                    
                  </p>
                  <ul>
                    <li>
                      We have shown our earlier work in which we have developed
                      similar websites.
                    </li>
                    <li>
                      We have converted a sample PSD file given to us by
                      AlgoTrader into HTML to show AlgoTrader our capabilities
                      and expertise.
                    </li>
                    <li>
                      During the development of the AlgoTrader website, first we
                      converted all the PSD files into HTML and then integrated
                      them into WordPress and implemented other things.
                    </li>
                    <li>
                      We have thoroughly tested AlgoTrader website and done
                      extensive quality assurance analysis to deliver the client
                      a perfect website without any flaws.
                    </li>
                    <li>
                      We made sure that the AlgoTrader website is pixel perfect
                      and fully responsive which works perfectly on all mobile
                      devices as per the specific needs of the client.
                    </li>
                  </ul>
                  <h3 className="sidebar-title"><span style={{ color: "#ff8050" }}>RESULTS & BENEFITS</span></h3>
                  <p>
                    The solution designed and developed by Prowerse met all of the
                    expectations of the AlgoTrader website owner regarding the
                    new fully responsive website which works perfectly on all
                    kinds of mobile devices and desktop computers. Today, so
                    many of AlgoTrader clients which are hedge funds or other
                    brokerage firms work from mobile platforms hence newly build
                    AlgoTrader website was fit for them as it was attractive as
                    well as robust. Following were the key benefits that we as a
                    contractor successfully provided to AlgoTader.
                  </p>
                  <ul>
                    <li>AlgoTrader was delivered the product on time thus allowing them with appropriate time to market their product.</li>
                    <li>AlgoTrader is extremely satisfied with the deliverables provided on time and within their budget.</li>
                    <li>New features introduced within the AlgoTrader system were taken up and Prowerse ensured the faster delivery for the same to take the system to the next level. This overall dedicated effort from Xicom along with the overall software quality increased the customer satisfaction level, thereby increasing our client’s revenue and customer retention by huge margin.</li>
                    <li>The website developed by Prowerse has been appreciated a lot from all kinds of users i.e. hedge funds, traders, individual investors, brokerage firms, investment firms etc. further strengthening AlgoTrader’s relationship with its customers.</li>
                    <li>AlgoTrader was extremely satisfied with the Quality Assurance Analysis (QA) efforts provided by Prowerse.</li>
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
                        <a href="/contact">Contact Now!</a>
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

                <h3 className="sidebar-title"><span style={{ color: "#ff8050" }}>TECHNOLOGIES</span></h3>
                <div className="sidebar-item categories">
                  <p>
                    WordPress CMS, JQuery, Mailchimp, Yoast plugin for SEO,
                    Apache Server
                  </p>
                </div>
                {/* <!-- End sidebar categories--> */}

                <h3 className="sidebar-title"><span style={{ color: "#ff8050" }}>CLIENT REVIEWS</span></h3>
                <div className="sidebar-item recent-posts">
                  <p>
                    We have found Prowerse through internet search and right now
                    feeling extremely satisfied with the quality of work they
                    have delivered to us. It has an expert team of designers and
                    developers and demonstrated a high degree of professionalism
                    in its work. They have been highly committed and completed
                    the project in very smooth manner meeting all the
                    requirements of the project and delivered the same in
                    timeframe provided. Now our new WordPress website is fully
                    responsive, quite attractive and has an excellent user
                    interface as required and is being appreciated and highly
                    likened by our clients who are using it. We will definitely
                    contact Prowerse in future too whenever we will have any
                    requirement for any project.
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
