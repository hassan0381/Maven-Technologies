import Instagram from "../icons/instagram.tsx";
import LinkedIn from "../icons/linkedin.tsx";
import Logo from "../icons/logo.tsx";
import Twitter from "../icons/twitter.tsx";
import Button from "./button.tsx";

const Footer = () => {
  return (
    <footer className="mt-[135px] w-full">
      <div className="w-full max-w-[1200px] px-12 xl:px-0 mx-auto pb-[135px] grid grid-cols-1 lg:grid-cols-5 md:grid-cols-2 gap-6">
        {/* start */}
        <div className="col-span-1 md:col-span-2">
          <a href="/" className="">
            <Logo />
          </a>
          <p className="tracking-tight text-base lg:text-[22px] lg:leading-[33px] font-jost text-text-gray pt-[18px] pb-[33px]">
            Unlocking productivity with solutions for the modern world.
          </p>          
          <div className="flex flex-col gap-6 ">            
            <p className="tracking-tight text-base lg:text-[22px] lg:leading-[33px] font-jost text-text-gray">
              hello@workwithmavens.io
            </p>
            <p className="tracking-tight text-base lg:text-[22px] lg:leading-[33px] font-jost text-text-gray">
              1300 440 275
            </p>
          </div>
          <div className="flex gap-5 md:gap-[60px] pt-[3vmin]">            
            <a href="/">
              <LinkedIn />
            </a>
            <a href="/">
              <Twitter />
            </a>            
            <a href="/">
              <Instagram />
            </a>
          </div>
        </div>
        <div className="col-span-3 flex flex-col gap-4">
          <div className="footer_contact_heading"><h2 style={{color:"#7800ff"}}>Work with Mavens Today</h2></div>
          <div className="footer_contact_form" >
            <form className="w-full grid grid-cols-2 gap-x-10 gap-y-[30px]">
              <label htmlFor="name">
                <input type="text" name="name" placeholder="Name"
                  className="footer_contact_form_input"/>
              </label>
              <label htmlFor="email">
                <input type="email" name="email" placeholder="Email"
                  className="footer_contact_form_input"/>
              </label>
              <label htmlFor="subject">
                <input type="text" name="subject" placeholder="Subject"
                  className="footer_contact_form_input"/>
              </label>
              <label htmlFor="phone">
                <input type="number" name="phone" placeholder="Phone"
                  className="footer_contact_form_input"/>
              </label>
              <textarea name="message" rows={3} placeholder="I want a solution for ....."
                className="footer_contact_form_textarea col-span-2">
              </textarea>
              <div className="w-full flex justify-end col-span-2">
                <Button text="Submit" type="submit" color="#505050"/>
              </div>
            </form>
          </div>
        
        </div>

        {/* End */}
      </div>
      <div className="w-full max-w-[1200px] px-12 xl:px-0 mx-auto pb-[135px] grid grid-cols-1 lg:grid-cols-5 md:grid-cols-2 gap-6">
        {/* start */}
        <div className="col-span-1 flex flex-col gap-4">
          <h5 className="footer_categorylinks">
              Industries
            </h5>
            <div className="flex flex-col gap-6">
              <a href="/industries/construction-real-estate" className="footer_sitelinks" >Construction & Real Estate</a>
              <a href="/industries/education" className="footer_sitelinks" >Education</a>
              <a href="/industries/fintech" className="footer_sitelinks" >FinTech</a>
              <a href="/industries/farming-agriculture" className="footer_sitelinks" >Farming & Agriculture</a>
              <a href="/industries/healthcare" className="footer_sitelinks" >Government</a>
              <a href="/industries/government" className="footer_sitelinks" >Healthcare</a>
              <a href="/industries/insurance" className="footer_sitelinks" >Insurance</a>
              <a href="/industries/manufacturing" className="footer_sitelinks" >Manufacturing</a>
              <a href="/industries/mining" className="footer_sitelinks" >Mining</a>
              <a href="/industries/retail-ecommerce" className="footer_sitelinks" >Retail & E-Commerce</a>
              <a href="/industries/transportation-logistics" className="footer_sitelinks" >Startups & Agencies</a>
              <a href="/industries/startups-agencies" className="footer_sitelinks" >Transportation & Logistics</a>
              <a href="/industries/utilities" className="footer_sitelinks" >Utilities</a>
            </div>
        </div>
        <div className="col-span-1 flex flex-col gap-4">
          <h5 className="footer_categorylinks">
            Services
          </h5>
          <div className="flex flex-col gap-6">
            <a href="/services/artificial-intelligence" className="footer_sitelinks" >Artificial Intelligence</a>
            <a href="/services/data-operations" className="footer_sitelinks" >Data Operations</a>
            <a href="/services/process-improvement-automation" className="footer_sitelinks" >Process Improvement Automation</a>
            <a href="/services/new-product-development" className="footer_sitelinks" >New Product Development</a>
            <a href="/services/software-development" className="footer_sitelinks" >Software Development</a>
            <a href="/services/data-insights-analysis" className="footer_sitelinks" >Data Insights & Analysis</a>
            <a href="/services/strategic-product-design" className="footer_sitelinks" >Strategic Product Design</a>
            <a href="/services/startup-value-analysis" className="footer_sitelinks" >Startup Value Analysis</a>
            <a href="/services/cloud-solutions-and-integration" className="footer_sitelinks" >Cloud Solutions & Integration</a>
            <a href="/services/web-mobile-app-development" className="footer_sitelinks" >Web, Mobile & App Development</a>
            <a href="/services/security" className="footer_sitelinks" >Security</a>
            <a href="/services/project-management-agile-delivery" className="footer_sitelinks" >Project Management & Agile Delivery</a>
            <a href="/services/business-product-consulting" className="footer_sitelinks" >Business & Product Consulting</a>
            <a href="/services/ramp-up-ramp-down" className="footer_sitelinks" >Ramp-Up & Ramp Down</a>
            <a href="/services/recruitment-services" className="footer_sitelinks" >Recruitment Services</a>
            <a href="/services/managed-services-support" className="footer_sitelinks" >Managed Services & Support</a>
            <a href="/services/tailored-solutions" className="footer_sitelinks" >Tailored Solutions</a>
          </div>
        </div>
        <div className="col-span-1 flex flex-col gap-4">
          <h5 className="footer_categorylinks">
            Agencies & Partners
          </h5>
          <div className="flex flex-col gap-6">
            <a href="/subject-matter-experts" className="footer_sitelinks" >Subject Matter Experts </a>
            <a href="/ways-of-working" className="footer_sitelinks" >Integrated Ways of Working </a>
            <a href="/rapid-ramping" className="footer_sitelinks" >Rapid Ramping</a>
            <a href="/onshore-offshore" className="footer_sitelinks" >Onshore/Offshore/Nearshore/Hybrid</a>
            <a href="/workwithmavens" className="footer_sitelinks" >Work with Mavens</a>            
          </div>
        </div>
        <div className="col-span-1 flex flex-col gap-4">
          <h5 className="footer_categorylinks">
            Pulse
          </h5>
          <div className="flex flex-col gap-6">
            <a href="/pulse" className="footer_sitelinks" >Articles </a>
            <a href="/casestudies" className="footer_sitelinks" >Case Studies</a>
            <a href="/insights" className="footer_sitelinks" >Insights</a>
            <a href="/podcasts" className="footer_sitelinks" >Podcasts</a>            
            <a href="/glossaries" className="footer_sitelinks" >Glossary</a>
            <a href="/questions" className="footer_sitelinks" >F.A.Q's</a>
          </div>
        </div>
        <div className="col-span-1 flex flex-col gap-4">
          <h5 className="footer_categorylinks">
            About
          </h5>
          <div className="flex flex-col gap-6">
            <a href="/about" className="footer_sitelinks" >About Mavens</a>
            <a href="/our-approach" className="footer_sitelinks" >Our Approach</a>
            <a href="/ways-of-working" className="footer_sitelinks" >Ways of Working</a>
            <a href="/mission-and-vision" className="footer_sitelinks" >Mission & Vision</a>
            <a href="/pulse" className="footer_sitelinks" >News & Press</a>
            <a href="/partnerships" className="footer_sitelinks" >Partnerships</a>
            <a href="/careers" className="footer_sitelinks" >Careers</a>          
            <a href="/locations" className="footer_sitelinks" >Locations</a>
            <a href="/events" className="footer_sitelinks" >Events</a>
            <a href="/privacy-policy" className="footer_sitelinks" >Privacy Policy</a>
            <a href="/terms" className="footer_sitelinks" >Terms of Use</a>
            <a href="/contact" className="footer_sitelinks" >Contact Us</a>
          </div>
        </div>

        {/* End */}
      </div>
    </footer>
  );
};

export default Footer;






























