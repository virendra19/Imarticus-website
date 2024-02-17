import React from "react";
import './contact.css'

export default function ContactUs() {
  const contactInfo = [
    {
      icon: "https://cdn.pegasus.imarticus.org/location/location.svg",
      title: "Location",
      address: "13th Floor, Gala Empire, Opp. T.V. Tower, Drive-In Rd, Memnagar, Ahmedabad, Gujarat, 380054"
    },
    {
      icon: "	https://cdn.pegasus.imarticus.org/location/email-marketing.svg",
      title: "Email",
      email: "Info@imarticus.com"
    },
    {
      icon: "	https://cdn.pegasus.imarticus.org/location/phone.svg",
      title: "Call Us",
      number: "+91 9953431020"
    }
  ];

  return (
    <div className="same_width_container">
      <div className="three_container">
        {contactInfo.map((item, index) => (
          <div key={index} className="logo_title_subtitle_container">
            <img className="logo_self" src={item.icon} alt={item.title} />
            <p>{item.title}</p>
            {item.address && <p>{item.address}</p>}
            {item.email && <p>{item.email}</p>}
            {item.number && <p>{item.number}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}