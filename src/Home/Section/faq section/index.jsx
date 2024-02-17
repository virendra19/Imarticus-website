import React, { useState } from "react";
import "./faq.css";

export default function Faq() {
  const [openExpandIndex, setOpenExpandIndex] = useState(null);

  const handleExpandClick = (index) => {
    setOpenExpandIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const faqData = [
    {
      question: "How do I contact Imarticus Learning Ahmedabad for more information on the courses?",
      answer: "One can either visit our website to interact with the centre or mail your query to info@imarticus.com"
    },
    {
      question: "Will I get study material too?",
      answer: "Our course provides access to quizzes, test papers, notes, and practice projects. These are necessary to get a detailed learning experience in the respective field."
    },
    {
      question: "What are the available mode of payment?",
      answer: "Our payment methods include credit cards, debit cards, Razor Pay, PayU, net banking and UPI."
    },
    {
      question: "How can I reach to Imarticus Ahemdabad?",
      answer: "We are located at 13th Floor, Gala Empire, Opp. T.V. Tower, Drive-In Rd, Memnagar, Ahmedabad, Gujarat 380054."
    },
    {
      question: "Could you provide me details for your university-partnered programs?",
      answer: "Here is the list of our partnership programs: Certified Investment Banking Operations Professional Postgraduate Diploma in Management by BIMTECH Full Stack Developer Pro Postgraduate Certificate Programme for Emerging CFOs Executive Certificate Programme for Strategic Chief Marketing Officers Postgraduate Program in Cyber security MBA in Fintech by KL University For more information on our courses, visit https://imarticus.org/"
    }
  ];

  return (
    <div className="same_width_container">
      <div className="faq_container">
        <p className="faq_title">FAQ</p>
        {faqData.map((item, index) => {
          const isOpen = openExpandIndex === index;
          return (
            <div className="ques_container" key={index}>
              <div
                className="ques_down_arrow_container"
                onClick={() => handleExpandClick(index)}
              >
                <p>{item.question}</p>
                <i className={isOpen ? "fa fa-angle-up" : "fa fa-angle-down"} />
              </div>
              {isOpen && (
                <p className="open_expand">{item.answer}</p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}