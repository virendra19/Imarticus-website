import React from "react";
import "./location.css";

export default function Location() {
  function handleChange() {}

  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <div className="same_width_container">
      <div className="location_tabs_container">
        <h2 className="">Our Location</h2>
        <div className="pills_container">
          {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]?.map(
            (item, index) => {
              return <p key={index}>Mumbai</p>;
            }
          )}
        </div>
      </div>
      <div className="inside_hero_section_container" style={{padding:"0 0 60px"}}>
        <div className="left_hero_section_content_container">
          <div className="request_form_container">
            <p>Request More Information</p>

            <form className="form_container" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Enter Full name*"
                name="fname"
                onChange={handleChange}
              />
              <input
                type="text"
                placeholder="Enter Email ID*"
                name="fname"
                onChange={handleChange}
              />
              <div className="phone_number_select_container">
                <select name="cars" id="cars">
                  <option value="volvo">+91 India</option>
                  <option value="saab">+1 USA</option>
                
                </select>
                <input
                  type="number"
                  placeholder="Enter number*"
                  name="number"
                  onChange={handleChange}
                />
              </div>
              <select name="cars" id="cars">
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
              </select>

              <div className="terms_submit_container">
                <div>
                  <input type="checkbox" id="terms" name="terms" />
                  <label htmlFor="terms">I accept the Terms & Conditions</label>
                </div>
                <button>Submit</button>
              </div>
            </form>
          </div>
        </div>
        <div className="right_hero_section_content_container">
          <div className="map_container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d470032.12506704655!2d71.98871991743725!3d23.019146276312405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848aba5bd449%3A0x4fcedd11614f6516!2sAhmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1707955310795!5m2!1sen!2sin"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
