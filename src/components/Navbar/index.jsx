import React, { useEffect, useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import "./navbar.css";
import logoIcon from "../../assets/logo.svg";
import whatsAppIcon from "../../assets/whatsappicon.svg";
import { Link } from "react-router-dom";
import jobIcon from "../../assets/job.svg";
import imarticusLogo from "../../assets/imarticus-logo2.webp";
import ProgramType from "./ProgramType";

export default function Navbar() {
  const programsTitles = [
    " Job Assured Programs",
    "Certification Programs",
    "Executive Programs",
    "Senior Programs",
    "Degree Programs",
  ];
  const [show, setShow] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [showDropDown, setShowDropDown] = useState(false);
  const [openProgramsDropDown, setOpenProgramsDropDown] = useState(false);
  const [activeColor, setActiveColor] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobile]);

  function handleOpenMenu() {
    setShow(true);
  }

  function handleShowDropDown() {
    setShowDropDown(!showDropDown);
  }

  function handleOpenExpandAllPrograms() {
    setOpenProgramsDropDown(!openProgramsDropDown);
  }

  function handleActiveTab() {
    setActiveColor(true);
  }

  return (
    <div>
      <nav className="nav_main_container">
        <div className="logo_all_programs_btn_container">
          <div className="menu_logo_container">
            <button className="menu_container" onClick={handleOpenMenu}>
              <i className="fa fa-bars" aria-hidden="true" />
            </button>
            <div className="logo_container">
              <img src={logoIcon} alt="logo" loading="lazy" />
            </div>
          </div>
        
            <button
              className="all_programs_btn"
              onClick={handleOpenExpandAllPrograms}
            >
              All Programs <i className="fa fa-angle-down" aria-hidden="true" />
            </button>
          
          <OutsideClickHandler
            onOutsideClick={() => {
              setOpenProgramsDropDown(false);
            }}
          >
          {openProgramsDropDown && (
            <div className="sidebar_rightside_container">
              <div className="programs_sidebar_container">
                {programsTitles?.map((item, index) => {
                  return (
                    <div
                      key={index}
                      style={{ background: "transparent" }}
                      className={
                        activeColor
                          ? "activeStyle all_programs_btn"
                          : "all_programs_btn"
                      }
                      onClick={handleActiveTab}
                    >
                      <div className="job_icon_title_container">
                        <img src={jobIcon} alt="jobIcon" loading="lazy" />
                        {item}
                      </div>
                      <i className="fa fa-angle-right" aria-hidden="true" />
                    </div>
                  );
                })}
              </div>
              <div className="rightside_container">
                {[1, 1, 1, 1]?.map((item, index) => {
                  return (
                    <React.Fragment key={index}>
                      <ProgramType />
                    </React.Fragment>
                  );
                })}
              </div>
            </div>
          )}
          </OutsideClickHandler>
        </div>
        {isMobile ? (
          <>
            {show && (
              <div className="navs_link_container">
                <button className="close_btn" onClick={() => setShow(false)}>
                  <i className="fa fa-close" aria-hidden="true" />
                </button>
                <ul>
                  <li>
                    <Link>Career services</Link>
                  </li>
                  <li>
                    <div
                      className="dropdown_container"
                      onClick={handleShowDropDown}
                    >
                      Discover{" "}
                      <i
                        className={
                          showDropDown ? "fa fa-angle-up" : "fa fa-angle-down"
                        }
                        aria-hidden="true"
                      />
                    </div>
                    {showDropDown && (
                      <div className="opt_container">
                        {[1, 1, 1, 1, 1].map((item, index) => {
                          return <Link key={index}>Item {index + 1}</Link>;
                        })}
                      </div>
                    )}
                  </li>
                  <li>
                    <Link>For Enterprise</Link>
                  </li>
                </ul>

                <div className="login_whatsapp_btn_container">
                  <button>Login</button>
                  {isMobile ? null : (
                    <button>
                      <img src={whatsAppIcon} alt="logo" loading="lazy" />
                    </button>
                  )}
                </div>
              </div>
            )}
          </>
        ) : (
          <div className="navs_link_container">
            <button className="close_btn" onClick={() => setShow(false)}>
              <i className="fa fa-close" aria-hidden="true" />
            </button>
            <ul>
              <li>
                <Link>Career services</Link>
              </li>
              <li>
                <div
                  className="dropdown_container"
                  onClick={handleShowDropDown}
                >
                  Discover{" "}
                  <i
                    className={
                      showDropDown ? "fa fa-angle-up" : "fa fa-angle-down"
                    }
                    aria-hidden="true"
                  />
                </div>
                {showDropDown && (
                  <div className="opt_container">
                    {[1, 1, 1, 1, 1].map((item, index) => {
                      return <Link key={index}>Item {index + 1}</Link>;
                    })}
                  </div>
                )}
              </li>
              <li>
                <Link>For Enterprise</Link>
              </li>
            </ul>

            <div className="login_whatsapp_btn_container">
              <button>Login</button>
              {isMobile ? null : (
                <button>
                  <img src={whatsAppIcon} alt="logo" loading="lazy" />
                </button>
              )}
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}
