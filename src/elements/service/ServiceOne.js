import React from "react";
import { FiActivity, FiCast, FiMap } from "react-icons/fi";
import { Link } from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";

const ServiceList = [
  {
    icon: <FiActivity />,
    title: "Web Development",
    description: "Crafting Dynamic Websites",
  },
  {
    icon: <FiCast />,
    title: "Design & Creative",
    description: "Inspiring Visual Solutions",
  },
  {
    icon: <FiMap />,
    title: "App Development",
    description: "Building Innovative Mobile Apps",
  },
  {
    icon: <FiActivity />,
    title: "Dynamic Websites",
    description:
      "Crafting dynamic and engaging websites to captivate your audience.",
  },
  {
    icon: <FiCast />,
    title: "Mobile Applications",
    description:
      "Creating innovative mobile apps that provide seamless user experiences.",
  },
  {
    icon: <FiMap />,
    title: "Blockchain",
    description:
      "Leveraging blockchain technology for secure and transparent solutions.",
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
