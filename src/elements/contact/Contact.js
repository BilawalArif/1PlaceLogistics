import React from "react";
import SEO from "../../common/SEO";
import Layout from "../../common/Layout";
import SectionTitle from "../sectionTitle/SectionTitle";
import ContactOne from "./ContactOne";

const Contact = () => {
  return (
    <>
      <SEO title="1PlaceLogistics || Contact" />
      <Layout className="page-wrapper">
        <div className="main-content">
          {/* Start Contact Area  */}
          <div className="rwt-contact-area rn-section-gap">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 mb--40">
                  <SectionTitle
                    textAlign="text-center"
                    radiusRounded=""
                    subtitle="Contact Form"
                    title="Our Contact Address Here."
                    description=""
                  />
                </div>
              </div>
              <ContactOne />
            </div>
          </div>
          {/* End Contact Area  */}
        </div>
      </Layout>
    </>
  );
};
export default Contact;
