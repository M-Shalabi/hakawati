import React, { useState, useEffect } from "react";
import { FiClock } from "react-icons/fi";
import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";
import Footer from "../component/footer/Footer";
import Navbar from "../component/navbar/Navbar";
import { MdDateRange } from "react-icons/md";
import { FiMapPin } from "react-icons/fi";


const BlogDetails = (props) => {
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
      {/* <PageHelmet pageTitle="Blog Details" /> */}
      {/* <Header
          headertransparent="header--transparent"
          colorblack="color--black"
          logoname="logo.png"
        /> */}

      {/* Start Breadcrump Area  */}
      <div
        className="rn-page-title-area pt--120 pb--190 bg_image bg_image--hakaGame"
        data-black-overlay="7"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="blog-single-page-title text-center pt--100">
                <h2 className="title theme-gradient">
                  Beyond Exhibition <br />
                </h2>
                <ul className="blog-meta d-flex justify-content-center align-items-center">
                  <li>
                    <MdDateRange />
                    Feb 3, 2023
                  </li>
                  <li>
                    <FiMapPin />
                    London
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Breadcrump Area */}
      {/* Start Blog Details */}
      <div className="rn-blog-details pt--110 pb--70 bg_color--1">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="inner-wrapper">
                <div className="inner">
                  <p>
                    Gamers8 is the biggest esports event in the Saudi capital.
                    The thrilling festival usually takes place from July to
                    September at a dedicated venue at Boulevard Riyadh City.{" "}
                  </p>
                  <p>
                    The King Abdulaziz Center for World Culture (Ithra) has
                    partnered the Gamers 8 event organized by the Saudi Esports
                    Federation in Riyadh. The two-month event concludes Sept. 7
                    The partnership brings multiple components to the
                    educational pillar of Gamers 8, as Ithra is hosting experts
                    in augmented reality (AR) creative content development
                    through dialogue sessions.{" "}
                  </p>
                  <div className="thumbnail">
                    <img
                      src="./assets/images/blog/blog-Beyond-1.jpg"
                      alt="Blog Images"
                    />
                  </div>
                  <p className="mt--40">
                    The partnership also includes a series of discussion panels
                    that talks about immersive technology and the growing world
                    of tech and gaming, even touching base on the metaverse.{" "}
                  </p>
                  <div className="blog-single-list-wrapper d-flex flex-wrap">
                    <div className="thumbnail">
                      <img
                        className="w-100"
                        src="./assets/images/blog/blog-Beyond-2.jpg"
                        alt="BLog Images"
                      />
                      <span>
                        People try Wamdah in the exhibition of Gamers Season
                      </span>
                    </div>
                    <div className="content">
                      <p>
                        Visitors at Gamers8 had the unique opportunity to
                        immerse themselves in "Wamdah," a captivating VR
                        storytelling experience crafted by Hakawati Studio. This
                        experience takes players on a profound journey with
                        Odai, a determined character searching for his lost
                        brother across the stunning landscapes of Saudi Arabia.
                        Guests were thoroughly enchanted by the blend of
                        poignant storytelling and breathtaking visuals, finding
                        themselves deeply engaged and moved. The feedback was
                        overwhelmingly positive, with many attendees praising
                        how "Wamdah" not only allowed them to explore virtual
                        realms but also rekindled their appreciation for the
                        beauty and culture of the Kingdom.
                      </p>
                      <p>
                        Visitors at Gamers8 had the unique opportunity to
                        immerse themselves in "Wamdah," a captivating VR
                        storytelling experience crafted by Hakawati Studio. This
                        experience takes players on a profound journey with
                        Odai, a determined character searching for his lost
                        brother across the stunning landscapes of Saudi Arabia.
                        Guests were thoroughly enchanted by the blend of
                        poignant storytelling and breathtaking visuals, finding
                        themselves deeply engaged and moved. The feedback was
                        overwhelmingly positive, with many attendees praising
                        how "Wamdah" not only allowed them to explore virtual
                        realms but also rekindled their appreciation for the
                        beauty and culture of the Kingdom.
                      </p>
                    </div>
                  </div>

                  <p className="mt--25 mt_sm--5">
                    Visitors at Gamers8 had the unique opportunity to immerse
                    themselves in "Wamdah," a captivating VR storytelling
                    experience crafted by Hakawati Studio. This experience takes
                    players on a profound journey with Odai, a determined
                    character searching for his lost brother across the stunning
                    landscapes of Saudi Arabia. Guests were thoroughly enchanted
                    by the blend of poignant storytelling and breathtaking
                    visuals, finding themselves deeply engaged and moved. The
                    feedback was overwhelmingly positive, with many attendees
                    praising how "Wamdah" not only allowed them to explore
                    virtual realms but also rekindled their appreciation for the
                    beauty and culture of the Kingdom.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Blog Details */}

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
export default BlogDetails;
