import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const AdvanceTabOne = () => {
    return (
        <div>
            <Tabs>
                <div className="row row--30">
                    <div className="order-2 order-lg-1 col-lg-4 col-md-12 col-sm-12 col-12 mt_md--30 mt_sm--30">
                        <div className="advance-tab-button advance-tab-button-1">
                            <TabList className="tab-button-list">
                                <Tab>
                                    <div className="tab-button">
                                        <h4 className="title">Faster than a Speeding Algorithm</h4>
                                        {/* <p className="description">Use Doob template you can build a corporate website a short time.</p> */}
                                    </div>   
                                </Tab>
                                <Tab>
                                    <div className="tab-button">
                                        <h4 className="title">Expert Code Conjurers</h4>
                                        {/* <p className="description">Use Doob template you can build a corporate website a short time.</p> */}
                                    </div>   
                                </Tab>
                                <Tab>
                                    <div className="tab-button">
                                        <h4 className="title">Custom Spells for Every App</h4>
                                        {/* <p className="description">Use Doob template you can build a corporate website a short time.</p> */}
                                    </div>   
                                </Tab>
                                <Tab>
                                    <div className="tab-button">
                                        <h4 className="title">Geeky Meets Chic Design</h4>
                                        {/* <p className="description">Use Doob template you can build a corporate website a short time.</p> */}
                                    </div>   
                                </Tab>
                                <Tab>
                                    <div className="tab-button">
                                        <h4 className="title">Support That's Out of This World</h4>
                                        {/* <p className="description">Use Doob template you can build a corporate website a short time.</p> */}
                                    </div>   
                                </Tab>
                            </TabList>
                        </div>
                    </div>
                    <div className="order-1 order-lg-2 col-lg-8 col-md-12 col-sm-12 col-12">
                        <div className="advance-tab-content advance-tab-content-1">
                            <TabPanel>
                                <div className="tab-content">
                                    <div className="inner">
                                        <div className="thumbnail">
                                            <img src="./images/tab/1692893861436.jpeg" alt="Corporate Images" />
                                        </div>
                                    </div>
                                </div>
                            </TabPanel>
                            
                            <TabPanel>
                                <div className="tab-content">
                                    <div className="inner">
                                        <div className="thumbnail">
                                            <img src="./images/tab/1692893877620.jpeg" alt="Corporate Images" />
                                        </div>
                                    </div>
                                </div>
                            </TabPanel>

                            <TabPanel>
                                <div className="tab-content">
                                    <div className="inner">
                                        <div className="thumbnail">
                                            <img src="./images/tab/1692893877574.jpeg" alt="Corporate Images" />
                                        </div>
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className="tab-content">
                                    <div className="inner">
                                        <div className="thumbnail">
                                            <img src="./images/tab/1692893877721.jpeg" alt="Corporate Images" />
                                        </div>
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className="tab-content">
                                    <div className="inner">
                                        <div className="thumbnail">
                                            <img src="./images/tab/1692893877675.jpeg" alt="Corporate Images" />
                                        </div>
                                    </div>
                                </div>
                            </TabPanel>
                        </div>
                    </div>
                </div>
            </Tabs>
        </div>
    )
}
export default AdvanceTabOne;