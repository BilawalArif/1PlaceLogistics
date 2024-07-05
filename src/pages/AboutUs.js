import React from "react";
import SEO from "../common/SEO";
import HeaderOne from "../common/header/HeaderOne";
import FooterFour from "../common/footer/FooterFour";
import BrandThree from "../elements/brand/BrandThree";
import ServiceOne from "../elements/service/ServiceOne";
import SectionTitle from "../elements/sectionTitle/SectionTitle";
import CounterUpFour from "../elements/counterup/CounterUpFour";
import Separator from "../elements/separator/Separator";
import AboutTwo from "../elements/about/AboutTwo";
import TeamOne from "../elements/team/TeamOne";
import Copyright from "../common/footer/Copyright";

const devTeamData = [
  {
    image: "hananBabar.jpg",
    name: "Hanan Babar",
    designation: " Web Team Lead",
    location: "Lahore, Punjab",
    description:
      "As a Web Team Lead, I oversee web development projects and promote team collaboration to deliver high-quality solutions.",
    // socialNetwork: [
    //   {
    //     icon: <FiLinkedin />,
    //     url: "#",
    //   },
    // ],
  },
  {
    image: "awaisMajeed.jpg",
    name: "Awais Majeed",
    designation: "React Developer",
    location: "Lahore, Punjab",
    description:
      "Experienced React developer skilled in building dynamic and responsive web applications using React.js",
    // socialNetwork: [
    //   {
    //     icon: <FiLinkedin />,
    //     url: "#",
    //   },
    // ],
  },
  {
    image: "mohsinAli.jpeg",
    name: "Mohsin Ali",
    designation: "Full Stack Developer (MERN + AWS)",
    location: "Lahore, Punjab",
    description: "Experienced in Web Applications development and AWS Services",
    // socialNetwork: [
    //   {
    //     icon: <FiLinkedin />,
    //     url: "#",
    //   },
    // ],
  },
  {
    image: "arhamIrfan.jpg",
    name: "Arham Irfan",
    designation: "MERN Stack Developer",
    location: "Lahore, Punjab",
    description:
      "Experienced full stack developer specializing in web applications",
    // socialNetwork: [
    //   {
    //     icon: <FiLinkedin />,
    //     url: "#",
    //   },
    // ],
  },
  {
    image: "bilawal.jpg",
    name: "Bilawal Arif",
    designation: "MERN Stack Developer",
    location: "Lahore, Punjab",
    description:
      "Experienced full stack developer specializing in web applications",
    // socialNetwork: [
    //   {
    //     icon: <FiLinkedin />,
    //     url: "#",
    //   },
    // ],
  },
  {
    image: "umarFarooq.jpg",
    name: "Umar Farooq",
    designation: "React Developer",
    location: "Lahore, Punjab",
    description:
      "Experienced React developer skilled in building dynamic and responsive web applications.",
    // socialNetwork: [
    //   {
    //     icon: <FiLinkedin />,
    //     url: "#",
    //   },
    // ],
  },
  {
    image: "zainbintanveer.jpg",
    name: "Zain Tanveer",
    designation: "Full Stack Developer (REACT + .NET)",
    location: "Lahore, Punjab",
    description:
      "Experienced full stack developer specializing in scalable web applications.",
    // socialNetwork: [
    //   {
    //     icon: <FiLinkedin />,
    //     url: "#",
    //   },
    // ],
  },
  {
    image: "bilal.jpg",
    name: "Muhammad Bilal",
    designation: "Senior Software Engineer",
    location: "Lahore, Punjab",
    description:
      "Full Stack Wizard: Crafting Seamless Web Solutions with Django & .Net Core",
    // socialNetwork: [
    //   {
    //     icon: <FiLinkedin />,
    //     url: "#",
    //   },
    // ],
  },
];
const bdTeamData = [
  {
    image: "zainJaved.jpg",
    name: "Zain Sarmad",
    designation: "Business Development Executive",
    location: "Lahore, Punjab",
    description:
      "A business developer who knows how to nurture and grow direct sales. I like making new connections with a hunger to always learn new things.",
    // socialNetwork: [
    //   {
    //     icon: <FiLinkedin />,
    //     url: "#",
    //   },
    // ],
  },
  {
    image: "maham.jpg",
    name: "Maham Aslam",
    designation: "Business Developer",
    location: "Faisalabad, Punjab",
    description:
      "Myself Maham Aslam from Faisalabad working as a Business Developer. My major is Textile Designing and I am working here to learn new things apart from my field.",
    // socialNetwork: [
    //   {
    //     icon: <FiLinkedin />,
    //     url: "#",
    //   },
    // ],
  },
  {
    image: "wajahat.jpg",
    name: "Wajahat Rauf",
    designation: "Business Developer",
    location: "Lahore, Punjab",
    description:
      "A business developer who knows how to nurture and grow direct sales. I like making new connections with a hunger to always learn new things.",
    // socialNetwork: [
    //   {
    //     icon: <FiLinkedin />,
    //     url: "#",
    //   },
    // ],
  },
];

const AboutUs = () => {
  return (
    <>
      <SEO title="CodeBox || About Us" />
      <main className="page-wrapper">
        {/* <HeaderTopNews /> */}
        <HeaderOne
          btnStyle="btn-small round btn-icon"
          HeaderSTyle="header-transparent"
        />

        {/* Start Slider Area  */}
        <div
          className="slider-area slider-style-1 height-850 bg_image"
          data-black-overlay="7"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/images/bg/bg-image-03.jpeg)`,
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="inner pt--80 text-center">
                  <div>
                    {/* <h3 className="rn-sub-badge">
                      <span className="theme-gradient">
                        Our Company's About Details.
                      </span>
                    </h3> */}
                  </div>
                  <h1 className="title display-one">
                    Where Innovation <br /> Meets Affordability{" "}
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Slider Area  */}

        {/* Start Service Area  */}
        <div className="service-area rn-section-gapTop">
          <div className="container">
            <div className="row">
              <div
                className="col-lg-6"
                style={{ display: "flex", margin: "auto" }}
              >
                <div className="content">
                  <h3 className="title">Your Software Talent Partner</h3>
                </div>
              </div>
              <div className="col-lg-6">
                <p className="mb--10">
                  We specialize in connecting businesses with experienced
                  software professionals to help them build and maintain their
                  software applications. Our team of pre-vetted and highly
                  qualified software engineers has expertise in a range of
                  technologies, including web development, mobile development,
                  and cloud computing.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* End Service Area  */}

        {/* Start Brand Area  */}
        <div className="rwt-brand-area pb--60 pt--30">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 mt--10">
                <BrandThree brandStyle="brand-style-2" />
              </div>
            </div>
          </div>
        </div>
        {/* End Brand Area  */}

        <Separator />

        {/* Start Service Area  */}
        <div className="rn-service-area rn-section-gap">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <SectionTitle
                  textAlign="text-center"
                  radiusRounded=""
                  subtitle="What we can do for you"
                  title="Services provide for you."
                  description="At code box, we are committed to delivering exceptional service and quality results."
                />
              </div>
            </div>
            <ServiceOne
              serviceStyle="service__style--1 icon-circle-style with-working-process"
              textAlign="text-center"
            />
          </div>
        </div>
        {/* End Service Area  */}

        {/* <div className="rwt-timeline-area rn-section-gapBottom">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <TimelineTwo classVar="no-gradient" />
              </div>
            </div>
          </div>
        </div> */}

        {/* <div className="rn-accordion-area rn-section-gap">
          <div className="container">
            <div className="row">
              <div className="col-lg-10 offset-lg-1">
                <SectionTitle
                  textAlign="text-center"
                  radiusRounded=""
                  subtitle="FAQ's"
                  title="
                  Frequently Asked Questions"
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
        </div> */}

        <Separator />

        <AboutTwo />

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

        <Separator />

        {/* Start Elements Area  */}
        <div className="rwt-team-area rn-section-gap">
          <div className="container">
            <div className="row mb--20">
              <div className="col-lg-12">
                <SectionTitle
                  textAlign="text-center"
                  radiusRounded=""
                  subtitle="Our Development Team."
                  title="Development Team Member."
                  description=""
                />
              </div>
            </div>
            <TeamOne
              column="col-lg-3 col-md-6 col-12 mt--30"
              teamStyle="team-style-default"
              teamData={devTeamData}
            />
          </div>
        </div>
        {/* End Elements Area  */}
        <Separator />

        {/* Start Elements Area  */}
        <div className="rwt-team-area rn-section-gap">
          <div className="container">
            <div className="row mb--20">
              <div className="col-lg-12">
                <SectionTitle
                  textAlign="text-center"
                  radiusRounded=""
                  subtitle="Our Business Developer Team."
                  title="Business Developer Team Member."
                  description=""
                />
              </div>
            </div>
            <TeamOne
              column="col-lg-4 col-md-6 col-12 mt--30"
              teamStyle="team-style-default"
              teamData={bdTeamData}
            />
          </div>
        </div>
        {/* End Elements Area  */}

        <FooterFour />
        <Copyright />
      </main>
    </>
  );
};

export default AboutUs;
