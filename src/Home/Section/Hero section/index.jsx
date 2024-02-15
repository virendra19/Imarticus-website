import React from "react";
import locationIcon from "../../../assets/location.svg";
import countryIcon from '../../../assets/contry.webp'
import './herosection.css'

export default function HeroSection() {
  return (
    <div className="main_hero_section_container">
      <div className="same_width_container">
        <div className="inside_hero_section_container">
          <div className="left_hero_section_content_container">
            <div className="left_side_content_container">
              <p>Imarticus Learning</p>
              <h1 >Ahmedabad</h1>
              <p className="desc_text">
                Ahmedabad takes centre stage, capturing a remarkable 10% share
                of India's job market, as revealed in Analytics India Magazine.
                Imarticus Learning offers a wide array of programs in Analytics,
                Finance, Technology, Marketing, and Management at our Ahmedabad
                centre. Join our community and tap into the wealth of
                opportunities that await you.
              </p>
              <button>Apply now</button>
            </div>
          </div>
          <div className="right_hero_section_content_container">
            <div>
              <img src={locationIcon} alt="location" loading="lazy" />
            </div>
          </div>
          <img src={countryIcon} className="country_icon" alt="countryIcon" loading="lazy" />
        </div>
      </div>
    </div>
  );
}
