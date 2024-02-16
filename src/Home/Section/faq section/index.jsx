import React, { useState } from "react";
import "./faq.css";

export default function Faq() {
  const [openExpandIndex, setOpenExpandIndex] = useState(null);

  const handleExpandClick = (index) => {
    setOpenExpandIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="same_width_container">
      <div className="faq_container">
        <p className="faq_title">FAQ</p>
        {[1, 2, 3, 4].map((item, index) => {
          const isOpen = openExpandIndex === index;
          return (
            <div className="ques_container" key={index}>
              <div
                className="ques_down_arrow_container"
                onClick={() => handleExpandClick(index)}
              >
                <p>
                  How do I contact Imarticus Learning Ahmedabad for more
                  information on the courses?
                </p>
                <i className={isOpen ? "fa fa-angle-up" : "fa fa-angle-down"} />
              </div>
              {isOpen && (
                <p className="open_expand">
                  One can either visit our website to interact with the centre
                  or mail your query to info@imarticus.com
                </p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
