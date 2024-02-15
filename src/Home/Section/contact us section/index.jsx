import React from "react";
import './contact.css'

export default function ContactUs() {
  return (
    <div className="same_width_container">
      <div className="three_container">
        {[1, 1, 1]?.map((item, index) => {
          return (
            <div key={index} className="logo_title_subtitle_container">
              <img
                className="logo_self"
                src="https://cdn.pegasus.imarticus.org/location/location.svg"
              />
              <p>Location</p>
              <p>
                13th Floor, Gala Empire, Opp. T.V. Tower, Drive-In Rd, Memnagar,
                Ahmedabad, Gujarat, 380054 
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
