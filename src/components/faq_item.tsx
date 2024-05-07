import React, { useState } from "react";
import ChevronDown from "../icons/chevronDown";
import OutlineClose from "../icons/outline-close";

export interface FAQItem {
  question?: string;
  sub_title?: string;
  short_answer?: string;
  long_answer?: string;
  slug?: string;
  image: string;
}

const FAQ_Item = (item: FAQItem) => {
  const [toggled, setToggled] = useState(false);
  const linkStyle = "text-xl leading-6 font-jost text-primary-200";
  const handleToggle = () => {
    setToggled(!toggled);
  };

  return (
    <React.Fragment>
      <div
        className="faqspage_faqsitem_container"
        onClick={() => handleToggle()}
        style={
          toggled
            ? { backgroundColor: "rgb(255,255,255)" }
            : { backgroundColor: "rgb(0, 0, 0, 0.1)" }
        }
      >
        <div className="grid grid-cols-12 gap-2 ">
          <div className="col-span-11">
            <div className="grid grid-cols-6 gap-2">
              <div className="col-span-6 faqspage_faqsitem_subheading">
                {item.sub_title ? item.sub_title.toUpperCase() : "QUESTION"}
              </div>
              <div className="col-span-6 faqspage_faqsitem_heading">
                {item.question}
              </div>
            </div>
          </div>
          <div className="col-span-1">
            <div className="faqspage_faqsitem_link">
              {toggled ? (
                <OutlineClose width="30" height="30" color="#505050" />
              ) : (
                <ChevronDown />
              )}
            </div>
          </div>
          {toggled && (
            <div className="col-span-12 faqspage_faqsitem_answercontainer">
              {item.image.length > 0 ? (
                <div className="grid grid-cols-12 gap-2">
                  <div className="col-span-8 faqspage_faqsitem_answertext">
                    {item.long_answer}
                  </div>
                  <div className="col-span-4 ">
                    <img
                      src={item.image}
                      alt={item.question}
                      className="faqspage_faqsitem_answerimage"
                    />
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-12 gap-2">
                  <div className="col-span-12 faqspage_faqsitem_answertext">
                    {item.long_answer}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </React.Fragment>
  );
};
FAQ_Item.defaultProps = {
  question: "What is the meaning of life?",
  sub_title: "General",
  short_answer: "42",
  long_answer:
    "42 is the answer to the ultimate question of life, the universe, and everything.",
  slug: "meaning-of-life",
  image: "",
};

export default FAQ_Item;
