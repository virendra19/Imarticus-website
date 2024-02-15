import { useState } from "react";
import "./faq.css";

export default function Faq() {
  const [openExpand, setOpenExpand] = useState(false);
  return (
    <div className="same_width_container">
      <div className="faq_container">
        <p className="faq_title">FAQ</p>
        {[1, 1, 1, 1].map((item, index) => {
          return (
            <div className="ques_container" key={index}>
              <div
                className="ques_down_arrow_container"
                onClick={() => setOpenExpand(!openExpand)}
              >
                <p>
                  How do I contact Imarticus Learning Ahmedabad for more
                  information on the courses?
                </p>
                <i className={openExpand ?  "fa fa-angle-up" :  "fa fa-angle-down"} />
              </div>
              {openExpand && (
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
