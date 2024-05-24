import React, { useState } from "react";

import ChevronDown from "../icons/chevronDown.tsx";
import ChevronUp from "../icons/chevronUp.tsx";

const CapabilitiesItem = (capability: any) => {
  const [toggled, setToggled] = useState(false);
  const handleToggle = () => {
    setToggled(!toggled);
  };
  return (
    <div
      className={`faq ${toggled ? "faqOpen" : "faqClose"}`}
      onClick={() => handleToggle()}
    >
      <div className="question">
        <div className="heading">{capability.heading}</div>
        {toggled ? <ChevronUp /> : <ChevronDown />}
      </div>
      {toggled && (
        <div className="answerBox">
          <div className="answer">{capability.content}</div>
        </div>
      )}
    </div>
  );
};

export default CapabilitiesItem;
