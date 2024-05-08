import React, { useState, useEffect } from "react";
import ModalVideo from "react-modal-video";
import { FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { AiOutlineLink } from "react-icons/ai";
import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";
import Footer from "../component/footer/Footer";
import Navbar from "../component/navbar/Navbar";

const SocialShare = [
  {
    Social: <FaLinkedinIn />,
    link: "https://www.linkedin.com/company/hakawati-studio",
  },
  { Social: <AiOutlineLink />, link: "https://filmfreeway.com/Wamdah" },
];

const PortfolioDetails = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  useEffect(() => {
    const header = document.querySelector(".header--fixed");
    if (header) {
      header.classList.add("sticky");
    }
  }, []);

  return (
    <React.Fragment>
      <Navbar />

      {/* Start Portfolio Details */}
      <div className="rn-portfolio-details ptb--120 bg_color--1">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="portfolio-details">
                <div className="inner">
                  <h2>Alien Express</h2>
                  <p className="subtitle">
                    Alien Express is a 3D competitive team-based multiplayer
                    Hero shooter game that is Splatoon meets Ape Escape where we
                    replace the apes with aliens with multiple modes.
                  </p>

                  <div className="portfolio-view-list d-flex flex-wrap">
                    <div className="port-view">
                      <span>Project Type</span>
                      <h4>First-person shooter, Multiplayer</h4>
                    </div>
                  </div>
                  {/* <div className="portfolio-share-link mt--20 pb--70 pb_sm--40">
                    <ul className="social-share rn-lg-size d-flex justify-content-start liststyle mt--15">
                      {SocialShare.map((val, i) => (
                        <li key={i}>
                          <a href={`${val.link}`}>{val.Social}</a>
                        </li>
                      ))}
                    </ul>
                  </div> */}
                </div>
                <div className="portfolio-thumb-inner">
                  <div className="thumb position-relative mb--30">
                    <img
                      src="./assets/images/portfolio/portfolio-alienExpress-video-bg.png"
                      alt="Portfolio Images"
                    />
                    <ModalVideo
                      channel="youtube"
                      isOpen={isModalOpen}
                      videoId="6clIlyLIPs8"
                      onClose={() => setIsModalOpen(false)}
                    />
                    <button
                      className="video-popup position-top-center"
                      onClick={() => setIsModalOpen(true)}
                    >
                      <span className="play-icon"></span>
                    </button>
                  </div>

                  <div className="thumb mb--30">
                    <img
                      src="./assets/images/portfolio/portfolio-alienExpress-1.png"
                      alt="Portfolio Images"
                    />
                  </div>

                  <div className="thumb mb--30">
                    <img
                      src="./assets/images/portfolio/portfolio-alienExpress-2.png"
                      alt="Portfolio Images"
                    />
                  </div>
                  <div className="thumb mb--30">
                    <img
                      src="./assets/images/portfolio/portfolio-alienExpress-3.png"
                      alt="Portfolio Images"
                    />
                  </div>
                  <div className="thumb">
                    <img
                      src="./assets/images/portfolio/portfolio-alienExpress-4.png"
                      alt="Portfolio Images"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Portfolio Details */}

      {/* Start Back To Top */}
      <div className="backto-top">
        <ScrollToTop showUnder={160}>
          <FiChevronUp />
        </ScrollToTop>
      </div>
      {/* End Back To Top */}

      <Footer />
    </React.Fragment>
  );
};
export default PortfolioDetails;
