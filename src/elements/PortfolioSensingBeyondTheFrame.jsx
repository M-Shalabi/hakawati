import React, { useState, useEffect } from "react";
import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";
import Footer from "../component/footer/Footer";
import Navbar from "../component/navbar/Navbar";
import { AiOutlineLink } from "react-icons/ai";

const SocialShare = [
  {
    Social: <AiOutlineLink />,
    link: "https://filmfreeway.com/SensingBeyondtheFrame",
  },
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

      {/* Start Portfolio Details */}
      <div className="rn-portfolio-details ptb--120 bg_color--1">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="portfolio-details">
                <div className="inner">
                  <h2>Sensing Beyond The Frame</h2>
                  <p className="subtitle">
                    Sensing beyond the frame is a virtual reality experience
                    that immerses the user in a living perception of
                    synesthesia, allowing them to visualize sounds. Traveling
                    through Kandinsky's theories to experience art beyond the
                    frame with a full synesthetic experience of the painting
                    "Impression 3."
                  </p>

                  <div className="portfolio-view-list d-flex flex-wrap">
                    <div className="port-view">
                      <span>Project Types</span>
                      <h4>Virtual Reality, Interactive Film</h4>
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
                  <div className="thumb mb--30 d-flex justify-content-center">
                    <img
                      src="./assets/images/portfolio/portfolio-sensing-beyond-the-frame.jpg"
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
