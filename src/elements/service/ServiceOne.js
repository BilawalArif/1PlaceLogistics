import React from "react";
import { FiActivity, FiCast, FiMap } from "react-icons/fi";
import { Link } from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";

const ServiceList = [
  {
    icon: <FiActivity />,
    title: "Truck Dispatching",
    description: "Keeping Your Business Moving",
  },
  {
    icon: <FiCast />,
    title: "Billing",
    description: "Truck Driver Accounting Services",
  },
  {
    icon: <FiMap />,
    title: "IFTA",
    description: "Straightforward route to IFTA Fuel Report",
  },
  {
    icon: <FiActivity />,
    title: "Factoring service",
    description: "Assistance in Selecting a Reliable Partner",
  },
  {
    icon: <FiCast />,
    title: "Rate Negotiation",
    description: "Best Pay Rate on Every Job",
  },
  {
    icon: <FiMap />,
    title: "SAFETY / DOT Compliance",
    description: "FMCSA/DoT requirements",
  },
];

const ServiceOne = ({ textAlign, serviceStyle }) => {
  return (
    <div className="row row--15 service-wrapper">
      {ServiceList.map((val, i) => (
        <div className="col-lg-4 col-md-6 col-sm-6 col-12" key={i}>
          <ScrollAnimation
            animateIn="fadeInUp"
            animateOut="fadeInOut"
            animateOnce={true}
          >
            <div className={`service ${serviceStyle} ${textAlign}`}>
              <div className="icon">{val.icon}</div>
              <div className="content">
                <h4 className="title w-600">
                  <Link
                    to="#service"
                    dangerouslySetInnerHTML={{ __html: val.title }}
                  ></Link>
                </h4>
                <p
                  className="description b1 color-gray mb--0"
                  dangerouslySetInnerHTML={{ __html: val.description }}
                ></p>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      ))}
    </div>
  );
};
export default ServiceOne;
