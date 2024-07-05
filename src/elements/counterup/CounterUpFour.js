import React from "react";
import CountUp from "react-countup";
import TrackVisibility from "react-on-screen";

const Data = [
  {
    countNum: 10,
    countTitle: "Happy Clients",
  },
  {
    countNum: 10,
    countTitle: "Dedicated Employees",
  },
  {
    countNum: 13,
    countTitle: "Effective Solutions",
  },
  {
    countNum: 15,
    countTitle: "Innovative Softwares",
  },
];
const CounterUpFour = ({ textALign, counterStyle, column }) => {
  return (
    <div className="row">
      {Data.map((data, index) => (
        <div className={`${column}`} key={index}>
          <div className={`count-box ${counterStyle} ${textALign}`}>
            <TrackVisibility once>
              {({ isVisible }) =>
                isVisible && (
                  <div className="count-number">
                    {isVisible ? <CountUp end={data.countNum} /> : 0}
                  </div>
                )
              }
            </TrackVisibility>
            <h5 className="counter-title">{data.countTitle}</h5>
          </div>
        </div>
      ))}
    </div>
  );
};
export default CounterUpFour;
