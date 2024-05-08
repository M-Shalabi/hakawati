import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import Scrollspy from "react-scrollspy";

export default function Navbar() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  console.log(isHomePage);
  const menuTrigger = () => {
    document.querySelector(".header-wrapper").classList.toggle("menu-open");
  };
  const CLoseMenuTrigger = () => {
    document.querySelector(".header-wrapper").classList.remove("menu-open");
  };
  const [refs, setRefs] = useState({
    home: "#home",
    about: "#about",
    portfolio: "#portfolio",
    testimonial: "#testimonial",
    news: "#news",
  });

  return (
    <>
      <header className="header-area formobile-menu header--fixed default-color">
        <div className="header-wrapper" id="header-wrapper">
          <div className="header-left">
            <div className="logo">
              <a href="/">
                <img
                  className="logo-1"
                  src="./assets/images/logo/haka-logo-light.png"
                  alt="Logo Images"
                />
                <img
                  className="logo-2"
                  src="./assets/images/logo/haka-logo-dark.png"
                  alt="Logo Images"
                />
              </a>
            </div>
          </div>
          <p>{isHomePage}</p>
          <div className="header-right">
            {isHomePage ? (
              <nav className="mainmenunav d-lg-block">
                <Scrollspy
                  className="mainmenu"
                  items={["home", "about", "portfolio", "testimonial", "news"]}
                  currentClassName="is-current"
                  offset={-200}
                >
                  <li>
                    <a href={`${refs.home}`}>Home</a>
                  </li>
                  <li>
                    <a href={`${refs.about}`}>About</a>
                  </li>
                  <li>
                    <a href={`${refs.portfolio}`}>Portfolio</a>
                  </li>
                  <li>
                    <a href={`${refs.testimonial}`}>Testimonial</a>
                  </li>
                  <li>
                    <a href={`${refs.news}`}>News</a>
                  </li>
                </Scrollspy>
              </nav>
            ) : (
              <p className="mb-0">
                <a href="/">Back to Home</a>
              </p>
            )}

            {/* Start Humberger Menu  */}
            <div className="humberger-menu d-block d-lg-none pl--20">
              <span onClick={menuTrigger} className="menutrigger text-white">
                <FiMenu />
              </span>
            </div>
            {/* End Humberger Menu  */}
            <div className="close-menu d-block d-lg-none">
              <span onClick={CLoseMenuTrigger} className="closeTrigger">
                <FiX />
              </span>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
