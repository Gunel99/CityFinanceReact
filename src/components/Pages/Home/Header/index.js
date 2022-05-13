import React from "react";
import Logo from "../../../../assets/img/logo.svg";
import Search from "../../../../assets/img/search.svg";
import SliderImg from "../../../../assets/img/slider-img.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const handleShowNavbar = () => {
    document.body.classList.add("active");
  };

  const handleCloseNavbar = () => {
    document.body.classList.remove("active");
  };

  return (
    <header className="header">
      <div className="container header">
        <div className="row align-center justify-content-between">
          <div className="column">
            <a href="/" className="logo" title="logo" aria-label="logo">
              <img src={Logo} alt="Logo" />
            </a>
          </div>
          <div className="column navbar d-none">
            <div className="navbar_click_icon">
              <div className="icon">
                <FontAwesomeIcon
                  icon={faBars}
                  className="openSidebar"
                  onClick={handleShowNavbar}
                />
              </div>
            </div>
            <div className="sidebar">
              <div className="close" onClick={handleCloseNavbar}>
                <FontAwesomeIcon icon={faTimes} />
              </div>
              <div className="sidebar_list">
                <ul>
                  <li>
                    <a href="#">Haqqımızda</a>
                  </li>
                  <li>
                    <a href="#">Xidmətlər</a>
                  </li>
                  <li>
                    <a href="#">Kampaniyalar</a>
                  </li>
                  <li>
                    <a href="#">Partnyorlarımız</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="column navigation-and-button">
            <div className="row align-center">
              <div className="column">
                <nav className="navigation">
                  <ul className="navigation-list">
                    <li className="navigation-item">
                      <a href="#" className="navigation-link">
                        Haqqımızda
                      </a>
                    </li>
                    <li className="navigation-item">
                      <a href="#" className="navigation-link">
                        Xidmətlər
                      </a>
                    </li>
                    <li className="navigation-item">
                      <a href="#" className="navigation-link">
                        Kampaniyalar
                      </a>
                    </li>
                    <li className="navigation-item">
                      <a href="#" className="navigation-link">
                        Partnyorlarımız
                      </a>
                    </li>
                    <li className="navigation-item">
                      <a href="#" className="navigation-link">
                        <img src={Search} alt="Search" />
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="column">
                <a href="#" className="button">
                  <span>Kredit sifarişi</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section id="hero-section">
        <div className="container relative">
          <div className="d-flex">
            <div className="hero-content">
              <h1>
                <span>Sərfəli</span> Kredit
              </h1>
              <p>
                “City Finance” uzun müddətli və aşağı faiz dərəcəli kredit
                təklifləri ilə bərabər rahat ödəmə üsulları da təklif edir.
              </p>
              <a href="#" className="button">
                <span>Ətraflı baxın</span>
              </a>
            </div>
            <div class="hero-image absolute">
              <img src={SliderImg} alt="Slider" />
            </div>
          </div>
        </div>
      </section>
    </header>
  );
};

export default Header;
