import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { Link } from "react-router-dom";
import { FiArrowRight, FiCheck } from "react-icons/fi";

const AboutTwo = () => {
  return (
    <div className="rwt-about-area about-style-2 rn-section-gap">
      <div className="container">
        <div className="row row--30 align-items-center">
          <div className="col-lg-5">
            <div className="thumbnail">
              <img
                className="w-100"
                src={`${process.env.PUBLIC_URL}images/about/3.png`}
                alt="About Images"
              />
            </div>
          </div>

          <div className="col-lg-7 mt_md--30 mt_sm--30">
            <div className="content">
              <div className="section-title">
                <ScrollAnimation
                  animateIn="fadeInUp"
                  animateOut="fadeInOut"
                  animateOnce={true}
                >
                  <h4 className="subtitle">
                    <span className="theme-gradient">Enterprise About.</span>
                  </h4>
                  <h2 className="title mt--10">About Our Business.</h2>
                </ScrollAnimation>

                <ScrollAnimation
                  animateIn="fadeInUp"
                  animateOut="fadeInOut"
                  animateOnce={true}
                >
                  <p>
                    1Place Logistics provides dispatching services for
                    owner-operators and truck fleets since 2015. We suggest not
                    only searching for loads but an array of services for
                    drivers and carrier companies including billing, document
                    management, and paperwork, broker and shipper
                    communications, SAFETY DOT compliance, and much more.
                  </p>

                  <ul className="list-icon">
                    <li>
                      <span className="icon">
                        <FiCheck />
                      </span>{" "}
                      We offer a scalable and cost-effective solution to our
                      clients
                    </li>
                    <li>
                      <span className="icon">
                        <FiCheck />
                      </span>{" "}
                      We offer ongoing support throughout the duration of the
                      order
                    </li>
                    <li>
                      <span className="icon">
                        <FiCheck />
                      </span>{" "}
                      Drive, deliver, earn; we’ll do all the rest for you.
                    </li>
                    {/* <li>
                      <span className="icon">
                        <FiCheck />
                      </span>{" "}
                      We take pride in the relationships we build with our
                      clients and our team of software professionals.{" "}
                    </li> */}
                  </ul>
                </ScrollAnimation>
                <ScrollAnimation
                  animateIn="fadeInUp"
                  animateOut="fadeInOut"
                  animateOnce={true}
                >
                  <div className="read-more-btn mt--40">
                    <Link className="btn-default btn-icon" to="/about-us">
                      More About Us{" "}
                      <i className="icon">
                        <FiArrowRight />
                      </i>
                    </Link>
                  </div>
                </ScrollAnimation>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutTwo;
