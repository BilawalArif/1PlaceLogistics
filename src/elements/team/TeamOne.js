import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

const TeamOne = ({ column, teamStyle, teamData }) => {
  return (
    <div className="row row--15">
      {teamData.map((data, index) => (
        <div className={`${column}`} key={index}>
          <div className={`rn-team ${teamStyle}`}>
            <ScrollAnimation
              animateIn="fadeInUp"
              animateOut="fadeInOut"
              animateOnce={true}
            >
              <div className="inner">
                <figure className="thumbnail">
                  <img
                    src={`./images/team/${data.image}`}
                    alt="Corporate React Template"
                    style={{objectFit: "cover"}}
                  />
                </figure>
                <figcaption className="content" style={{minHeight:"360px"}}>
                  <h2 className="title">{data.name}</h2>
                  <h6 className="subtitle theme-gradient">
                    {data.designation}
                  </h6>
                  <span className="team-form">
                    <img
                      src="./images/team/location.svg"
                      alt="Corporate React Template"
                    />
                    <span className="location">{data.location}</span>
                  </span>
                  <p className="description">{data.description}</p>

                  {/* <ul className="social-icon social-default icon-naked mt--20">
                    {data.socialNetwork.map((social, index) => (
                      <li key={index}>
                        <a href={`${social.url}`}>{social.icon}</a>
                      </li>
                    ))}
                  </ul> */}
                </figcaption>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TeamOne;
