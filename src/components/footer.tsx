import React from "react";
import Instagram from "../icons/instagram.tsx";
import LinkedIn from "../icons/linkedin.tsx";
import Logo from "../icons/logo.tsx";
import Twitter from "../icons/twitter.tsx";
import Button from "./button.tsx";
import Mail from "../icons/mail.tsx";
import Envelope from "../icons/envelope.tsx";
import Phone from "../icons/phone.tsx";
import Facebook from "../icons/facebook.tsx";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="getInTouch">
          <div className="grid">
            <div className="leftWrapper">
              <h2 className="sectionHeading">Get In Touch</h2>
              <div className="contactForm">
                <form className="">
                  <label htmlFor="name">
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      className="input"
                    />
                  </label>
                  <label htmlFor="email">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      className="input"
                    />
                  </label>
                  <label htmlFor="subject">
                    <input
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      className="input"
                    />
                  </label>
                  <label htmlFor="phone">
                    <input
                      type="number"
                      name="phone"
                      placeholder="Phone"
                      className="input"
                    />
                  </label>
                  <textarea
                    name="message"
                    rows={3}
                    placeholder="Message Goes Here"
                    className="textarea"
                  ></textarea>
                  <Button text="Submit" type="submit" className="submitBtn" />
                </form>
              </div>
            </div>
            <div className="rightWrapper">
              <h2 className="heading">
                Unlocking productivity with solutions for the modern world.
              </h2>
              <p className="desc">
                Discover the business beneft of elite technologies implemented
                by experienced professionals.
              </p>

              <div className="email">
                <Envelope />
                <a href="mailto:hello@workwithmavens.io">
                  hello@workwithmavens.io
                </a>
              </div>
              <div className="email">
                <Phone />
                <a href="tel:1300 440 275">1300 440 275</a>
              </div>
              <div className="socialWrapper">
                <a href="/">
                  <LinkedIn />
                </a>
                <a href="/">
                  <Twitter />
                </a>
                <a href="/">
                  <Instagram />
                </a>
                <a href="/">
                  <Facebook />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mainFooter">
        <div className="container">
          <div className="wrapper">
            <div className="">
              <h5 className="linksHeading">Industries</h5>
              <div className="linksWrapper">
                <a
                  href="/industries/construction-real-estate"
                  className="links"
                >
                  Construction & Real Estate
                </a>
                <a href="/industries/education" className="links">
                  Education
                </a>
                <a href="/industries/fintech" className="links">
                  FinTech
                </a>
                <a href="/industries/farming-agriculture" className="links">
                  Farming & Agriculture
                </a>
                <a href="/industries/healthcare" className="links">
                  Government
                </a>
                <a href="/industries/government" className="links">
                  Healthcare
                </a>
                <a href="/industries/insurance" className="links">
                  Insurance
                </a>
                <a href="/industries/manufacturing" className="links">
                  Manufacturing
                </a>
                <a href="/industries/mining" className="links">
                  Mining
                </a>
                <a href="/industries/retail-ecommerce" className="links">
                  Retail & E-Commerce
                </a>
                <a
                  href="/industries/transportation-logistics"
                  className="links"
                >
                  Startups & Agencies
                </a>
                <a href="/industries/startups-agencies" className="links">
                  Transportation & Logistics
                </a>
                <a href="/industries/utilities" className="links">
                  Utilities
                </a>
              </div>
            </div>
            <div className="">
              <h5 className="linksHeading">Services</h5>
              <div className="linksWrapper">
                <a href="/services/artificial-intelligence" className="links">
                  Artificial Intelligence
                </a>
                <a href="/services/data-operations" className="links">
                  Data Operations
                </a>
                <a
                  href="/services/process-improvement-automation"
                  className="links"
                >
                  Process Improvement Automation
                </a>
                <a href="/services/new-product-development" className="links">
                  New Product Development
                </a>
                <a href="/services/software-development" className="links">
                  Software Development
                </a>
                <a href="/services/data-insights-analysis" className="links">
                  Data Insights & Analysis
                </a>
                <a href="/services/strategic-product-design" className="links">
                  Strategic Product Design
                </a>
                <a href="/services/startup-value-analysis" className="links">
                  Startup Value Analysis
                </a>
                <a
                  href="/services/cloud-solutions-and-integration"
                  className="links"
                >
                  Cloud Solutions & Integration
                </a>
                <a
                  href="/services/web-mobile-app-development"
                  className="links"
                >
                  Web, Mobile & App Development
                </a>
                <a href="/services/security" className="links">
                  Security
                </a>
                <a
                  href="/services/project-management-agile-delivery"
                  className="links"
                >
                  Project Management & Agile Delivery
                </a>
                <a
                  href="/services/business-product-consulting"
                  className="links"
                >
                  Business & Product Consulting
                </a>
                <a href="/services/ramp-up-ramp-down" className="links">
                  Ramp-Up & Ramp Down
                </a>
                <a href="/services/recruitment-services" className="links">
                  Recruitment Services
                </a>
                <a href="/services/managed-services-support" className="links">
                  Managed Services & Support
                </a>
                <a href="/services/tailored-solutions" className="links">
                  Tailored Solutions
                </a>
              </div>
            </div>
            <div className="">
              <h5 className="linksHeading">Agencies & Partners</h5>
              <div className="linksWrapper">
                <a href="/subject-matter-experts" className="links">
                  Subject Matter Experts{" "}
                </a>
                <a href="/ways-of-working" className="links">
                  Integrated Ways of Working{" "}
                </a>
                <a href="/rapid-ramping" className="links">
                  Rapid Ramping
                </a>
                <a href="/onshore-offshore" className="links">
                  Onshore/Offshore/Nearshore/Hybrid
                </a>
                <a href="/workwithmavens" className="links">
                  Work with Mavens
                </a>
              </div>
            </div>
            <div className="">
              <h5 className="linksHeading">Pulse</h5>
              <div className="linksWrapper">
                <a href="/pulse" className="links">
                  Articles{" "}
                </a>
                <a href="/casestudies" className="links">
                  Case Studies
                </a>
                <a href="/insights" className="links">
                  Insights
                </a>
                <a href="/podcasts" className="links">
                  Podcasts
                </a>
                <a href="/glossaries" className="links">
                  Glossary
                </a>
                <a href="/questions" className="links">
                  F.A.Q's
                </a>
              </div>
            </div>
            <div className="">
              <h5 className="linksHeading">About</h5>
              <div className="linksWrapper">
                <a href="/about" className="links">
                  About Mavens
                </a>
                <a href="/our-approach" className="links">
                  Our Approach
                </a>
                <a href="/ways-of-working" className="links">
                  Ways of Working
                </a>
                <a href="/mission-and-vision" className="links">
                  Mission & Vision
                </a>
                <a href="/pulse" className="links">
                  News & Press
                </a>
                <a href="/partnerships" className="links">
                  Partnerships
                </a>
                <a href="/careers" className="links">
                  Careers
                </a>
                <a href="/locations" className="links">
                  Locations
                </a>
                <a href="/events" className="links">
                  Events
                </a>
                <a href="/privacy-policy" className="links">
                  Privacy Policy
                </a>
                <a href="/terms" className="links">
                  Terms of Use
                </a>
                <a href="/contact" className="links">
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
