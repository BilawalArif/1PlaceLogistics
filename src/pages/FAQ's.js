import React from "react";
import SEO from "../common/SEO";
import HeaderOne from "../common/header/HeaderOne";
import FooterFour from "../common/footer/FooterFour";
import SectionTitle from "../elements/sectionTitle/SectionTitle";
import AccordionOne from "../elements/accordion/AccordionOne";
import Copyright from "../common/footer/Copyright";

const FAQ = () => {
  return (
    <>
      <SEO title="CodeBox || FAQ's" />
      <main className="page-wrapper">
        {/* <HeaderTopNews /> */}
        <HeaderOne
          btnStyle="btn-small round btn-icon"
          HeaderSTyle="header-transparent"
        />

        <div className="rn-accordion-area rn-section-gap">
          <div className="container">
            <div className="row">
              <div className="col-lg-10 offset-lg-1">
                <SectionTitle
                  textAlign="text-center"
                  radiusRounded=""
                  subtitle="FAQ's"
                  title="Frequently Asked Questions"
                  description=""
                />
              </div>
            </div>
            <div className="row mt--35 row--20">
              <div className="col-lg-10 offset-lg-1">
                <AccordionOne customStyle="rn-accordion-04" />
              </div>
            </div>
          </div>
        </div>
        {/* <Separator /> */}

        {/* <AboutTwo image="./images/about/contact-image.jpg" /> */}

        {/* Start Elements Area  */}
        {/* <div className="rwt-counterup-area pb--100">
          <div className="container mt_dec--30">
            <CounterUpFour
              column="col-lg-3 col-md-6 col-sm-6 col-12"
              counterStyle="counter-style-4"
              textALign="text-center"
            />
          </div>
        </div> */}
        {/* End Elements Area  */}

        {/* <Separator /> */}

        {/* Start Elements Area  */}
        {/* <div className="rwt-team-area rn-section-gap">
          <div className="container">
            <div className="row mb--20">
              <div className="col-lg-12">
                <SectionTitle
                  textAlign="text-center"
                  radiusRounded=""
                  subtitle="Our Corporate Team."
                  title="Corporate Team Member."
                  description=""
                />
              </div>
            </div>
            <TeamFour
              column="col-lg-6 col-xl-3 col-md-6 col-12 mt--30"
              teamStyle="team-style-three"
            />
          </div>
        </div> */}
        {/* End Elements Area  */}

        <FooterFour />
        <Copyright />
      </main>
    </>
  );
};

export default FAQ;
