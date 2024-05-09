import React, { useState, useEffect } from "react";
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
                  <p>
                    Welcome to Alien Express: Shipping Them Home, a thrilling
                    third-person Hero Shooter where players or teams compete in
                    fast-paced battles to collect aliens disguised as
                    vegetables, fruits, or anything they can find. Using
                    specialized backpack devices. Strategize, outmaneuver, and
                    outsmart your opponents to secure the most aliens and bring
                    them back safely to their mother planet. With its unique
                    alien-collecting gameplay, Alien Express offers an
                    exhilarating twist on the competitive multiplayer genre that
                    will keep you on the edge of your seat! Suitable for younger
                    players and families The game is technically a third-person
                    shooter with the unique mechanic of siphoning creatures and
                    using them as ammo. The game will consist of opposing two
                    teams, where the players will try collecting as many aliens
                    as possible by siphoning them into their backpack device and
                    delivering them to a checkpoint. The players can also stop
                    the other team from collecting an alien or delivering an
                    alien by either using an alien they collected as ammo or
                    using a puff of air which will slightly damage the player
                    and push the target away. If the player hits someone, the
                    targeted person will lose the aliens in their backpack
                    device. The team that will collect the most aliens during
                    the round wins.
                  </p>

                  <div className="portfolio-view-list d-flex flex-wrap">
                    <div className="port-view">
                      <span>Project Type</span>
                      <h4>First-person shooter, Multiplayer</h4>
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
