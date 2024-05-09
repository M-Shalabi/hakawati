import React, { useState,useEffect } from "react";
import ModalVideo from "react-modal-video";
import { FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";
import Footer from "../component/footer/Footer";
import Navbar from "../component/navbar/Navbar";

const SocialShare = [
  {
    Social: <FaLinkedinIn />,
    link: "https://www.linkedin.com/company/hakawati-studio",
  },
  { Social: <FaInstagram />, link: "https://www.instagram.com/hakawatiar" },
  { Social: <FaTwitter />, link: "https://twitter.com/hakawatiar" },
];

const PortfolioDetails = (props) => {
  useEffect(() => {
    const header = document.querySelector(".header--fixed");
    if (header) {
      header.classList.add("sticky");
    }
  }, []);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <React.Fragment>
      <Navbar />
      {/* <PageHelmet pageTitle='Wamdah' /> */}

      {/* <Header headertransparent='header--transparent' colorblack='color--black' logoname='logo.png' /> */}

      {/* Start Breadcrump Area */}
      {/* <div
        className="rn-page-title-area pt--120 pb--190 bg_image bg_image--4"
        data-black-overlay="7"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="rn-page-title text-center pt--100">
                <h2 className="title theme-gradient">
                  Getting tickets to the big show
                </h2>
                <p>
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* End Breadcrump Area */}

      {/* Start Portfolio Details */}
      <div className="rn-portfolio-details ptb--120 bg_color--1">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="portfolio-details">
                <div className="inner">
                  <h2>Hakawati Game</h2>
                  <p className="subtitle">
                    Even the smallest person can make a big difference. Join
                    Molham, as he sets out to save his beautiful island and its
                    wildlife. And possibly start a revolution.
                  </p>

                  <div className="portfolio-view-list d-flex flex-wrap">
                    <div className="port-view">
                      <span>Project Types</span>
                      <h4>Game, Open world</h4>
                    </div>
                  </div>

                  <div className="portfolio-share-link mt--20 pb--70 pb_sm--40">
                    <ul className="social-share rn-lg-size d-flex justify-content-start liststyle mt--15">
                      {SocialShare.map((val, i) => (
                        <li key={i}>
                          <a target="_blank" rel="noopener noreferrer" href={`${val.link}`}>{val.Social}</a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="portfolio-thumb-inner">
                  <div className="thumb position-relative mb--30">
                    <img
                      src="./assets/images/portfolio/portfolio-hakGame-4.png"
                      alt="Portfolio Images"
                    />
                    <ModalVideo
                      channel="youtube"
                      isOpen={isModalOpen}
                      videoId="uMAD88V_g4Y"
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
                      src="./assets/images/portfolio/portfolio-hakGame-1.png"
                      alt="Portfolio Images"
                    />
                  </div>
                  <div className="thumb mb--30">
                    <img
                      src="./assets/images/portfolio/portfolio-hakGame-2.png"
                      alt="Portfolio Images"
                    />
                  </div>
                  <div className="thumb mb--30">
                    <img
                      src="./assets/images/portfolio/portfolio-hakGame-3.png"
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
