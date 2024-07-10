import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

const TabOne = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const images = [
    "./images/tab/dryVan.png",
    "./images/tab/stepDeck.png",
    "./images/tab/flatBed.png",
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
                  //   src="./images/blog/Dry-Van.png"
                  src={images[selectedTab]}
                  alt="Corporate React Template"
                />
              </div>
              <div className="col-lg-7 mt_md--40 mt_sm--40">
                <div className="rn-default-tab">
                  <div className="tab-button-panel">
                    <TabList className="tab-button">
                      <Tab>
                        <div className="rn-tab-button">
                          <button>Dry Van</button>
                        </div>
                      </Tab>
                      <Tab>
                        <div className="rn-tab-button">
                          <button>Step Deck</button>
                        </div>
                      </Tab>
                      <Tab>
                        <div className="rn-tab-button">
                          <button>Flatbed</button>
                        </div>
                      </Tab>
                    </TabList>
                  </div>

                  <div className="tab-content-panel">
                    <TabPanel>
                      <div className="rn-tab-content">
                        <div className="inner">
                          <p>
                            Dry vans provide a huge benefit to clients across
                            the United States, keeping their goods and safe and
                            sound while they are out on the roads. To achieve
                            the best for your clients, you need a friendly,
                            honest dry van dispatcher to support your efforts.
                          </p>

                          <p>
                            This is where Logity Dispatch comes in — we have
                            spent years building great relationships with
                            drivers.
                          </p>
                        </div>
                      </div>
                    </TabPanel>

                    <TabPanel>
                      <div className="rn-tab-content">
                        <div className="inner">
                          <p>
                            It is a big responsibility to transport oversize and
                            over-height cargo, never mind having to jump through
                            logistical and organizational hoops to keep your
                            business afloat.
                          </p>

                          <p>
                            We got your back on looking for and assessing
                            prospective loads, haggling over prices and rates,
                            generating and completing all the paperwork required
                            by regulations and industry practices.
                          </p>
                        </div>
                      </div>
                    </TabPanel>

                    <TabPanel>
                      <div className="rn-tab-content">
                        <div className="inner">
                          <p>
                            Your flatbed truck is a heavy-duty vehicle. As such,
                            it supports our economy in ways that other vehicles
                            simply cannot.
                          </p>

                          <p>
                            Here at Logity Dispatch, we want to be your partner,
                            providing you with the dispatch services you need to
                            connect you and your flatbed with the clients who
                            will benefit the most.
                          </p>
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

export default TabOne;
