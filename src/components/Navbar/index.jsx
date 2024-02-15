import { useEffect, useState } from "react";
import "./navbar.css";
import logoIcon from "../../assets/logo.svg";
import whatsAppIcon from "../../assets/whatsappicon.svg";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [show, setShow] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [showDropDown, setShowDropDown] = useState(false);

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
    console.log("first");
    setShow(true);
  }

  function handleShowDropDown() {
    setShowDropDown(!showDropDown);
  }

  console.log("isMobile: ", isMobile);

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
          <button>
            All Programs <i className="fa fa-angle-down" aria-hidden="true" />
          </button>
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
