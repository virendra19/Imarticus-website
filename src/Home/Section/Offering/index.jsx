import React from "react";
import './offering.css'

export default function Offering() {
  return (
    <div className="same_width_container">
      <div className="inside_hero_section_container" style={{padding:"60px 0"}}>
        <div className="left_hero_section_content_container">
          <div className="left_offering_content_container">
            <h2>Offering</h2>
            <p>
              Imarticus Learning, Ahmedabad, aims to enhance the skills of both
              current and aspiring workers, to meet the present and future job
              market demands in Ahmedabad's diverse industries. <br />
              The IIM and IIT certifications offered by Imarticus provide
              learners with the opportunity to gain specialised knowledge from
              premier educational institutions. <br />
            We offer a range of specialisations from top Bschools like IIM
              Ahmedabad, IIM Lucknow, IIT Roorkee, IIM Indore, IIM Calcutta and
              IIM Raipur.
            </p>
            <button>Enroll Now</button>
          </div>
        </div>
        <div className="right_hero_section_content_container">
          <div className="right_offering_content_container">
            <img
              src="https://cdn.pegasus.imarticus.org/location/Ourw.webp"
              alt="poster"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
