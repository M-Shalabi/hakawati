import React, { useState } from "react";
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
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <React.Fragment>
      <Navbar />
      {/* <PageHelmet pageTitle='Wamdah' /> */}

      {/* <Header headertransparent='header--transparent' colorblack='color--black' logoname='logo.png' /> */}

      {/* Start Breadcrump Area */}
      <div
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
                  Kids today are reading less while having more unproductive
                  screen time. With our mission to encourage a love of reading
                  we introduced XR technology into reading. Hakawati Books uses
                  unique Augmented Reality technology to bring books and
                  characters to life in a real-life enviornment, transforming
                  reading into an interactive and immersive experience.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Breadcrump Area */}

      {/* Start Portfolio Details */}
      <div className="rn-portfolio-details ptb--120 bg_color--1">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="portfolio-details">
                <div className="inner">
                  <h2>Hakawati Books</h2>
                  <p className="subtitle">
                    Hakawati Books, is the leading Augmented Reality app that
                    provides magical AR experiences for a broad collection of
                    children’s.
                  </p>
                  <p>
                    Kids today are reading less while having more unproductive
                    screen time. With our mission to encourage a love of reading
                    we introduced XR technology into reading. Hakawati Books
                    uses unique Augmented Reality technology to bring books and
                    characters to life in a real-life enviornment, transforming
                    reading into an interactive and immersive experience.{" "}
                  </p>

                  <div className="portfolio-view-list d-flex flex-wrap">
                    <div className="port-view">
                      <span>Branch</span>
                      <h4>Ability</h4>
                    </div>

                    <div className="port-view">
                      <span>Project Types</span>
                      <h4>Website</h4>
                    </div>

                    <div className="port-view">
                      <span>Program</span>
                      <h4>View Project</h4>
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
                      src="./assets/images/portfolio/portfolio-hakBooks-1.png"
                      alt="Portfolio Images"
                    />
                    <ModalVideo
                      channel="youtube"
                      isOpen={isModalOpen}
                      videoId="Ux72Pppz8as"
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
                      src="./assets/images/portfolio/portfolio-hakBooks-2.jpg"
                      alt="Portfolio Images"
                    />
                  </div>

                  <div className="thumb mb--30">
                    <img
                      src="./assets/images/portfolio/portfolio-hakBooks-2.jpg"
                      alt="Portfolio Images"
                    />
                  </div>

                  {/* <div className="thumb">
                    <img
                      src="./assets/images/portfolio/portfolio-big-01.jpg"
                      alt="Portfolio Images"
                    />
                  </div> */}
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
