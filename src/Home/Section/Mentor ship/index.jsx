import React from "react";

export default function MentorShip() {
  return (
    <div className="same_width_container">
      <div className="inside_hero_section_container">
        <div className="left_hero_section_content_container">
          <div className="left_offering_content_container">
            <h2>How Mentorship Can Enhance Your Career Prospects</h2>
            <p>
              Technical and job-related abilities are only a small part of what
              it takes to create a successful career. Effective communication
              and other soft skills, as well as networks and connections in the
              professional world, are typically necessary to build a successful
              career.
              <br />
              <br />
              Students who are mentored are:
              <br />

            </p>
            <div className="count_container">
              <div className="count_text_container">
                <p>20%</p>
                <p>More Likely To Get A Raise</p>
              </div>
              <div className="count_text_container">
                <p>6%</p>
                <p>More Likely To Get A Promotion</p>
              </div>
            </div>
          </div>
        </div>
        <div className="right_hero_section_content_container">
          <div className="right_offering_content_container">
            <img
              src="https://cdn.pegasus.imarticus.org/location/mentorw.webp"
              alt="poster"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
