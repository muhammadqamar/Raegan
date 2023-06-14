import React from "react";
import "./style.scss";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import ServicesCard from "../utils/services/serviceCards";
import WorkFlow from "../utils/workFlow/workFlow";
import TeamCardData from "../utils/team/teamCard";

import Hero from "../assets/images/heroImg.png";
import AboutImg from "../assets/images/about.svg";
import Circle from "../assets/images/circle.svg";
import YellowBackground from "../assets/images/yellowBackground1.png";
import WorkFlowImg from "../assets/images/settings.svg";
import Wave from "../assets/images/waves.svg";
import Portfolio1 from "../assets/images/Rectangle5.png";
import Portfolio2 from "../assets/images/Rectangle5(1).png";
import Portfolio3 from "../assets/images/Rectangle5(2).png";
import Customer1 from "../assets/images/customer1.png";
import Star from "../assets/images/star.png";
import Jerome1 from "../assets/images/jerome1.png";
import Jerome2 from "../assets/images/jerome2.png";
import Jerome3 from "../assets/images/jerome3.png";
import Jerome4 from "../assets/images/jerome4.png";
import Call from "../assets/images/call.svg";
import Inbox from "../assets/images/inbox.svg";
import Address from "../assets/images/address.svg";
import Facebook from "../assets/images/facebook1.svg";
import LinkedIn from "../assets/images/LinkedIn1.svg";
import Instagram from "../assets/images/instagram1.svg";

const About = () => {
  const servicesData = [
    {
      title: "Lorem Ipsum",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      button: "Learn more",
      servicesLink: "",
    },
    {
      title: "Lorem Ipsum",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      button: "Learn more",
      servicesLink: "",
    },
    {
      title: "Lorem Ipsum",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      button: "Learn more",
      servicesLink: "",
    },
    {
      title: "Lorem Ipsum",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      button: "Learn more",
      servicesLink: "",
    },
  ];

  const workFlowData = [
    {
      title: "Flexiable Pricing Plan To Start",
      Image: WorkFlowImg,
    },
    {
      title: "Flexiable Pricing Plan To Start",
      Image: WorkFlowImg,
    },
    {
      title: "Flexiable Pricing Plan To Start",
      Image: WorkFlowImg,
    },
    {
      title: "Flexiable Pricing Plan To Start",
      Image: WorkFlowImg,
    },
  ];

  const portfolioImg = [
    { image: Portfolio1 },
    { image: Portfolio2 },
    { image: Portfolio3 },
  ];

  const teamCardData = [
    {
      Image: Jerome1,
      title: "Jerome Bell",
      text: "Developer",
      fbIcon: "https://www.facebook.com",
      LinkedInIcon: "https://www.linkedIn.com",
      InstaIcon: "https://www.instagram.com",
    },
    {
      Image: Jerome2,
      title: "Jerome Bell",
      text: "Developer",
      fbIcon: "https://www.facebook.com",
      LinkedInIcon: "https://www.linkedIn.com",
      InstaIcon: "https://www.instagram.com",
    },
    {
      Image: Jerome3,
      title: "Jerome Bell",
      text: "Developer",
      fbIcon: "https://www.facebook.com",
      LinkedInIcon: "https://www.linkedIn.com",
      InstaIcon: "https://www.instagram.com",
    },
    {
      Image: Jerome4,
      title: "Jerome Bell",
      text: "Developer",
      fbIcon: "https://www.facebook.com",
      LinkedInIcon: "https://www.linkedIn.com",
      InstaIcon: "https://www.instagram.com",
    },
    {
      Image: Jerome1,
      title: "Jerome Bell",
      text: "Developer",
      fbIcon: "https://www.facebook.com",
      LinkedInIcon: "https://www.linkedIn.com",
      InstaIcon: "https://www.instagram.com",
    },
  ];
  const iconsData = [
    { image: Facebook, href: "https://www.facebook.com" },
    { image: LinkedIn, href: "https://www.linkedIn.com" },
    { image: Instagram, href: "https://www.instagram.com" },
  ];
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Required"),
    fatherName: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    phoneNumber: Yup.string().required("Required"),
    message: Yup.string().required("Required"),
  });
  const initialValues = {
    name: "",
    fatherName: "",
    email: "",
    phoneNumber: "",
    message: "",
  };

  const handleSubmit = (values) => {
    alert(JSON.stringify(values, null, 2));
  };

  return (
    <>
      <div className="home">
        <div className="hero">
          <div className="hero-sec1">
            <h2 className="title">
              We Make Your <span className="business">Business</span> Easier
            </h2>
            <p className="text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum is simply dummy text of the printing and
              typesetting industry.
            </p>
            <a href="" className="buttton">
              Learn more
            </a>
          </div>
          <div className="hero-sec2">
            <img src={Hero} alt="Hero image" />
          </div>
        </div>
      </div>
      <div className="about">
        <div className="about-us">
          <div className="abtImg">
            <img src={AboutImg} />
          </div>
          <div className="about-us-dtail">
            <h2 className="main-title">ABOUT US</h2>
            <h2 className="sub-title">
              We Can Take Your Business To Next Level.
            </h2>
            <p className="description">
              We do much more than simply deliver technology or provide managed
              services. At QA, we offer clients the unique skill we’ve gained
              from our one-of-a-kind experience with our partners and clients
              Our solutions come from a process of perception, leading edge, and
              profound knowledge of various technologies.
            </p>
            <p className="description">
              Since our inception in 2021, we are growing into an organization
              that rivals any modern day software company. Our credo is to keep
              our communication with clients at an exceptional level, increasing
              our productivity and fulfilling the needs of our clients.
            </p>
            <div className="list">
              <span className="list-dtail">
                <img src={Circle} />
                <p>100% satisfaction guarantee.</p>
              </span>
              <span className="list-dtail">
                <img src={Circle} />
                <p>100's of successful projects.</p>
              </span>
              <span className="list-dtail">
                <img src={Circle} />
                <p>24/7 support</p>
              </span>
              <span className="list-dtail">
                <img src={Circle} />
                <p>modifications after project completion.</p>
              </span>
            </div>
            <a href="#" className="button">
              Learn More
            </a>
          </div>
        </div>
      </div>
      <div className="services">
        <h2 className="title">Services</h2>
        <h2 className="description">Services You might like</h2>
        <div className="ServicesCard">
          {servicesData.map((service, index) => (
            <ServicesCard
              key={index}
              servicesTitle={service.title}
              servicesText={service.text}
              servicesButton={service.button}
              servicesLink={service.link}
            />
          ))}
        </div>
        <div className="background-img">
          <img src={YellowBackground} alt="yellow-background's image" />
        </div>
      </div>
      <div className="workflow">
        {workFlowData.map((workFlow, index) => (
          <WorkFlow
            key={index}
            workflowSettingTitle={workFlow.title}
            workflowSettingImg={workFlow.Image}
          />
        ))}
        <img src={Wave} alt="Wave image" className="waveImg" />
      </div>
      <div className="portfolio">
        <h2 className="title">Portfolio</h2>
        <h2 className="description">Introduce Our Projects</h2>
        <div className="portfolioImg">
          {portfolioImg.map((portfolio, index) => (
            <div>
              <img key={index} src={portfolio.image} />
            </div>
          ))}
        </div>
      </div>
      <div className="testimonials">
        <h2 className="title">Testimonials</h2>
        <h2 className="description">What Our happy clients say about us</h2>
        <div className="review">
          <img src={Customer1} alt="Customer1's image" />
          <div className="reviewDtails">
            <div className="ratings">
              <img src={Star} alt="Rating's Image" />
              <img src={Star} alt="Rating's Image" />
              <img src={Star} alt="Rating's Image" />
              <img src={Star} alt="Rating's Image" />
              <img src={Star} alt="Rating's Image" />
            </div>
            <p className="reviewText">
              “You made it so simple. My new site is so much faster and easier
              to work with than my old site. I just choose the page, make the
              change. You made it so simple. My new site is so much faster and
              easier to work with than my old site. I just choose the page, make
              the change.”
            </p>
            <h2 className="leslie">Leslie Alexander</h2>
            <p className="occupation">Freelance React Developer</p>
          </div>
        </div>
      </div>
      <div className="teamSec">
        <div className="teamDtail">
          <h2 className="title">Team</h2>
          <h2 className="description">We are here to Help You</h2>
          <div className="teamCards">
            {teamCardData.map((teamCard, index) => (
              <TeamCardData
                key={index}
                teamCardImage={teamCard.Image}
                teamCardTitle={teamCard.title}
                teamCardText={teamCard.text}
                teamCardFbIcon={teamCard.fbIcon}
                teamCardLinkedInIcon={teamCard.LinkedInIcon}
                teamCardInstaIcon={teamCard.InstaIcon}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="contact">
        <div className="contactDtail">
          <h2 className="title">Contact Us</h2>
          <h2 className="description">Feel Free To Contact Us</h2>
          <div className="form_address">
            <div className="form">
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                <Form>
                  <div className="inputs">
                    <div>
                      <Field
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Your Name"
                        className="field"
                      />
                      <ErrorMessage
                        name="name"
                        component="div"
                        className="error"
                      />
                    </div>
                    <div>
                      <Field
                        type="text"
                        id="fatherName"
                        name="fatherName"
                        placeholder="Your Father's Name"
                        className="field"
                      />
                      <ErrorMessage
                        name="fatherName"
                        component="div"
                        className="error"
                      />
                    </div>
                  </div>

                  <div className="inputs">
                    <div>
                      <Field
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Enter your email"
                        className="field"
                      />
                      <ErrorMessage
                        name="email"
                        component="div"
                        className="error"
                      />
                    </div>
                    <div>
                      <Field
                        type="text"
                        id="phoneNumber"
                        name="phoneNumber"
                        placeholder="Enter your phoneNumber"
                        className="field"
                      />
                      <ErrorMessage
                        name="phoneNumber"
                        component="div"
                        className="error"
                      />
                    </div>
                  </div>
                  <div className="inputs">
                    <div>
                      <Field
                        as="textarea"
                        id="message"
                        name="message"
                        placeholder="Type a message..."
                        className="field1"
                      />
                      <ErrorMessage
                        name="message"
                        component="div"
                        className="error"
                      />
                    </div>
                  </div>

                  <button type="submit" className="btn">
                    Send Message
                  </button>
                </Form>
              </Formik>
            </div>
            <div className="address">
              <div className="address-sec-sub">
                <div className="address-sec">
                  <img src={Call} alt="Call's Logo" />
                  <div className="text">
                    <h2 className="text-title">Call Anytime</h2>
                    <p className="text-description">+ 88 ( 9800 ) 6802</p>
                  </div>
                </div>
                <div className="address-sec">
                  <img src={Inbox} alt="Inbox's Logo" />
                  <div className="text">
                    <h2 className="text-title">Send Email</h2>
                    <p className="text-description">needhelp@company.com</p>
                  </div>
                </div>
                <div className="address-sec">
                  <img src={Address} alt="Call's Logo" />
                  <div className="text">
                    <h2 className="text-title">Visit now</h2>
                    <p className="text-description">
                      88 Broklyn Golden Street. New york USA
                    </p>
                  </div>
                </div>
              </div>
              <div className="icons">
                {iconsData.map((icons, index) => (
                  <div key={index}>
                    <a href={icons.link}>
                      <img src={icons.image} />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
