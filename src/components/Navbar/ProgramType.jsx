import React from "react";
import imarticusLogo from "../../assets/imarticus-logo2.webp";

export default function ProgramType() {
  return (
    <div className="programs_title_img_content_container">
      <p>Finance</p>
      {[1, 1, 1, 1]?.map((data, index) => {
        return (
          <div key={index} className="pragrams_logo_title_container">
            <img src={imarticusLogo} alt="img" loading="lazy" />
            <p>Certified Investment Banking Operational Professional</p>
          </div>
        );
      })}
    </div>
  );
}
