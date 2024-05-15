import React, { useState } from "react";
import ChevronDown from "../icons/chevronDown";
import ChevronUp from "../icons/chevronUp";
import OutlineClose from "../icons/outline-close";

export interface FAQItem {
  question?: string;
  sub_title?: string;
  short_answer?: string;
  long_answer?: string;
  slug?: string;
  image?: string;
}

const FAQ_Item = (item: FAQItem) => {
  const [toggled, setToggled] = useState(false);
  const handleToggle = () => {
    setToggled(!toggled);
  };

  return (
    <>
      <div
        className={`faq ${toggled ? "faqOpen" : "faqClose"}`}
        onClick={() => handleToggle()}
      >
        <div className="question">
          <div className="heading">{item.question}</div>
          {toggled ? <ChevronUp /> : <ChevronDown />}
        </div>
        {toggled && (
          <div className="answerBox">
            {item.image && item.image.length > 0 ? (
              <div className="answer">{item.long_answer}</div>
            ) : (
              <div className="">{item.long_answer}</div>
            )}
          </div>
        )}
      </div>
    </>
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
