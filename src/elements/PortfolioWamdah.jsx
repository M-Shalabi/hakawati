import React, { useState } from "react";
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
                  <h2>Wamdah</h2>
                  <p className="subtitle">
                    WAMDAH is a VR storytelling experience of Odai in his
                    tireless quest towards finding his lost brother.
                  </p>
                  <p>
                    After his brother’s disappearance, Odai’s world changed. He
                    made it his sole mission to journey on the shores and dunes
                    of the kingdom to find his brother and bring him home. Step
                    into Odai’s world, interwind between recollections and
                    discoveries as he captures some of the most beautiful places
                    in Saudi Arabia, regaining his lost passion along the way.{" "}
                  </p>

                  <div className="portfolio-view-list d-flex flex-wrap">
                    <div className="port-view">
                      <span>Project Type</span>
                      <h4>Virtual Reality, Interactive Film</h4>
                    </div>
                  </div>
                  <div className="portfolio-share-link mt--20 pb--70 pb_sm--40">
                    <ul className="social-share rn-lg-size d-flex justify-content-start liststyle mt--15">
                      {SocialShare.map((val, i) => (
                        <li key={i}>
                          <a href={`${val.link}`}>{val.Social}</a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="portfolio-thumb-inner">
                  <div className="thumb position-relative mb--30">
                    <img
                      src="./assets/images/portfolio/portfolio-wamdah-4.jpeg"
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
                      src="./assets/images/portfolio/portfolio-wamdah-1.jpeg"
                      alt="Portfolio Images"
                    />
                  </div>

                  <div className="thumb mb--30">
                    <img
                      src="./assets/images/portfolio/portfolio-wamdah-2.jpeg"
                      alt="Portfolio Images"
                    />
                  </div>
                  <div className="thumb">
                    <img
                      src="./assets/images/portfolio/portfolio-wamdah-3.jpg"
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
