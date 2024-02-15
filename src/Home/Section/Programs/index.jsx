import React from "react";
import logo from "../../../assets/logo.svg";
import "./program.css";

export default function Program() {
  const sidebarData = [
    "Top Programs",
    "Finance",
    "Analytics",
    "Marketing",
    "General management",
    "Sales",
    "Human resources",
    "Operations",
  ];
  return (
    <div className="same_width_container">
      <div className="title_txt_container">
        <h2 className="title_text">Programs</h2>
      </div>
      <div className="program_section_container">
        <div className="left_program_section_container">
          <div className="sidebar_container">
            {sidebarData?.map((item, index) => {
              return (
                <div key={index} className="sidebar_title_arrow_container">
                  <p>
                    {item} <i className="fa fa-angle-right" />
                  </p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="right_program_section_container">
          <div className="all_card_program_container">
            {[1, 1, 1, 1]?.map((item, index) => {
              return (
                <div key={index} className="card_container">
                  <div className="card_img_container">
                    <img
                      src="https://cdn.pegasus.imarticus.org/cibop/Card%20Image.webp"
                      alt="card_img"
                      loading="lazy"
                    />
                  </div>
                  <div className="img_title_card_container">
                    <img src={logo} alt="logo" loading="lazy" />
                    <p>|</p>
                    <p>
                      Job Assured <br /> Program
                    </p>
                  </div>

                  <div className="card_content_container">
                    <p>Certified Investment Banking Operations Professional</p>
                    <p className="card_desc_text">
                      An interview guarantee program for a successful banking
                      and finance career.
                    </p>

                    <br />
                    <p className="card_time_period_text">
                      2 Months | Weekday | Live Online...
                    </p>
                    <p className="card_time_period_text">
                      3 Months | Weekday | Live Online...
                    </p>

                    <div className="rating_score_container">
                      <img
                        src="https://cdn.pegasus.imarticus.org/imarticus_2/stargroupfull.svg"
                        alt="rating"
                      />
                      <span>4.9</span>
                    </div>

                    <div className="two_btn_apply_know_container">
                      <button>Apply Now</button>
                      <button>Know More</button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
