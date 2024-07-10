import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

const TabTwo = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const images = [
    "./images/tab/powerOnly.png",
    "./images/tab/hotShot.jpg",
    "./images/tab/boxTruck.png",
  ];

  const handleTabSelect = (index) => {
    setSelectedTab(index);
  };
  return (
    <div>
      <div className="row">
        <div className="col-lg-12">
          <Tabs selectedIndex={selectedTab} onSelect={handleTabSelect}>
            <div className="row row--30 align-items-center">
              <div className="col-lg-5">
                <img
                  className="radius-small"
                  //   src="./images/tab/tabs-02.jpg"
                  src={images[selectedTab]}
                  alt="Corporate React Template"
                />
              </div>
              <div className="col-lg-7 mt_md--40 mt_sm--40">
                <div className="rn-default-tab style-two">
                  <div className="tab-button-panel">
                    <TabList className="tab-button">
                      <Tab>
                        <div className="rn-tab-button">
                          <button>Power Only</button>
                        </div>
                      </Tab>
                      <Tab>
                        <div className="rn-tab-button">
                          <button>Hot Shot</button>
                        </div>
                      </Tab>
                      <Tab>
                        <div className="rn-tab-button">
                          <button>Box Truck</button>
                        </div>
                      </Tab>
                    </TabList>
                  </div>

                  <div className="tab-content-panel">
                    <TabPanel>
                      <div className="rn-tab-content">
                        <div className="inner">
                          <p>
                            Since 2023, ! Place Logistics has provided power
                            only dispatch service to owner-operators and truck
                            fleets. Our team makes it easy to match power-only
                            loads to independent owners and truck fleets any
                            time you need to move equipment on a flatbed
                            trailer, dry van trailer, refrigerated van, shipping
                            container, or tanker trailers.
                          </p>

                          <p>
                            We can find the best power only trucks solution to
                            fit any transport situation.
                          </p>
                        </div>
                      </div>
                    </TabPanel>

                    <TabPanel>
                      <div className="rn-tab-content">
                        <div className="inner">
                          <p>
                            A lot of people outside the trucking industry have
                            no idea what goes into getting their equipment,
                            appliances, and materials to them. At Logity
                            Dispatch, we know that hotshot drivers like you are
                            really the minutemen of trucking, delivering loads
                            to where they need to be on time.
                          </p>

                          <p>
                            That's why we offer top-notch hotshot dispatch
                            services that can make all the difference when it
                            comes to the bottom line for your hotshot trucking
                            business.
                          </p>
                        </div>
                      </div>
                    </TabPanel>

                    <TabPanel>
                      <div className="rn-tab-content">
                        <div className="inner">
                          <p>
                            A box trucking business takes advantage of the
                            versatility and freedom to run loads without much
                            downtime and without needing to obtain a commercial
                            driver's license.
                          </p>

                          {/* <p>
                            Ipsa Quibusdam, deleniti soluta minima minus
                            asperiores doloribus enim vitae obcaecati fuga
                            assumenda laudantium nemo odio provident nulla
                            exercitationem tempore corrupti! Nemo.
                          </p> */}
                        </div>
                      </div>
                    </TabPanel>
                  </div>
                </div>
              </div>
            </div>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default TabTwo;
