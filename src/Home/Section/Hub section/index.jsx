import hubCityImg from '../../../assets/hub.png'
import './hubsection.css'

export default function HubSection() {
  return (
    <div className="same_width_container">
      <div className="inside_hero_section_container" style={{padding:"60px 0"}}>
        <div className="left_hero_section_content_container">
          <div className="title_desc_hub_section_container">
            <h2>Imarticus Learning Ahmedabad Hub</h2>
            <p className="desc_text">
              Looking to expand your knowledge base? Look no further than
              Imarticus Learning, Ahmedabad, where we provide state-of-the-art
              programs and facilities. Our focus is on delivering top-notch,
              industry-specific education through cutting-edge technology,
              specialised training, expert career guidance and mentorship from
              seasoned professionals in Ahmedabad.
            </p>
            <p className="desc_text">
              Our range of programs includes Postgraduate Program in Data
              Science and Analytics, Certified Investment Banking Operations
              Professional,{" "}
              <a
                href="https://imarticus.org/full-stack-developer-pro/"
                target="_blank"
                rel="noreferrer"
              >
                Full Stack Developer Pro
              </a>
              , Postgraduate Program in Cybersecurity and{" "}
              <a
                href="https://imarticus.org/Post-Graduation-Program-in-Digital-Marketing/"
                target="_blank"
                rel="noreferrer"
              >
                Postgraduate Program in Digital Marketing
              </a>
            </p>
          </div>
        </div>
        <div className="right_hero_section_content_container">
            <div className="img_hub_container">
                <img src={hubCityImg} alt="city" loading="lazy" />
            </div>
        </div>
      </div>
    </div>
  );
}
