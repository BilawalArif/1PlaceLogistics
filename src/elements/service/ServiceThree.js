import React from "react";
import { Link } from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";

const ServiceList = [
  {
    image: "/images/service/icon-01.png",
    title: "Dynamic Websites",
    description:
      "Crafting dynamic and engaging websites to captivate your audience.",
  },
  {
    image: "/images/service/icon-02.png",
    title: "Mobile Applications",
    description:
      "Creating innovative mobile apps that provide seamless user experiences.",
  },
  {
    image: "/images/service/icon-03.png",
    title: "Blockchain",
    description:
      "Leveraging blockchain technology for secure and transparent solutions.",
  },
];
const ServiceThree = ({ textAlign, serviceStyle }) => {
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
              <div className="inner">
                <div className="image">
                  <img src={`${val.image}`} alt="card Images" />
                </div>
                <div className="content">
                  <h4 className="title">
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
            </div>
          </ScrollAnimation>
        </div>
      ))}
    </div>
  );
};
export default ServiceThree;
