import React, { useState } from "react";
import PageHelmet from "../component/common/Helmet";
import ModalVideo from "react-modal-video";
import { FiClock, FiUser, FiMessageCircle, FiHeart } from "react-icons/fi";
import { Link } from "react-router-dom";
import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";
import Footer from "../component/footer/Footer";
import Navbar from "../component/navbar/Navbar";

const BlogDetails = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
        className="rn-page-title-area pt--120 pb--190 bg_image bg_image--wamdah"
        data-black-overlay="7"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="blog-single-page-title text-center pt--100">
                <h2 className="title theme-gradient">
                  Ithra showcase in London
                </h2>
                <ul className="blog-meta d-flex justify-content-center align-items-center">
                  <li>
                    <FiClock />
                    March 23, 2022
                  </li>
                  <li>
                    {/* <FiUser />
                    NipaBali */}
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
                    Of the 27 groups in the Creative Solutions Initiative, five had projects selected for a global bootcamp in London.
                  </p>
                  <div className="thumbnail">
                    <img
                      src="./assets/images/blog/bl-big-01.jpg"
                      alt="Blog Images"
                    />
                  </div>
                  <p className="mt--40">
                    The journey to the modern city Neom is rooted in the experiences of the 1970s for Abdullah Ba Mashmos. “This an XR/VR interactive story about a guy who was from the 1970s and who goes on a journey to find his lost brother,” he said. "Every player going to put on their VR headset and they're going to experience life from the day through the protagonist's eyes. They're going to go from one place to another until they reach the mountains where they will get trapped in an ancient time machine which will take them to Saudi Arabia, all the way to the future in a city called Neom.{" "}

                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look even slightly believable. If you are going to use a
                    passage of Lorem Ipsum. You need to be sure there isn't
                    anything embarrassing hidden in the middle of text. All the
                    Lorem Ipsum generators on the Internet tend toitrrepeat
                    predefined chunks.{" "}
                  </p>
                  <p>
                    All five finalists will have the opportunity on this “Demo Day” to showcase their work and allow guests to explore the different ways of engaging in immersive technologies.
                    “As the Kingdom’s leading hub for creatives and innovators, we offer year-round programs that support the growth of Saudi’s creative sector by providing established and budding creatives with the resources, expertise and opportunities to unleash their potential, said Miznah A. AlZamil, head of the Creativity and Innovation Department at Ithra.
                  </p>
                  {/* <blockquote className="rn-blog-quote">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                    natoque penatibus et magnis dis parturient montes.
                  </blockquote> */}
                  {/* <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look even slightly believable. If you are going to use a
                    passage of Lorem Ipsum. You need to be sure there isn't
                    anything embarrassing hidden in the middle of text. All the
                    Lorem Ipsum generators on the Internet tend toitrrepeat
                    predefined chunks. Necessary, making this the first true
                    generator on the Internet. It re are many variations of
                    passages of Lorem Ipsum available, but the majority have
                    suffered alteration in some form, by injectedeed eedhumour,
                    or randomised words which don't look even slightly
                    believable.
                  </p>
                  <div className="blog-single-list-wrapper d-flex flex-wrap">
                    <div className="thumbnail">
                      <img
                        className="w-100"
                        src="./assets/images/blog/blog-single-01.png"
                        alt="BLog Images"
                      />
                      <span>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do
                      </span>
                    </div>
                    <div className="content">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Quis ipsum suspendisse ultrices gravida.
                        Risus commodo .
                      </p>
                      <h4 className="title">Ordered & Unordered Lists.</h4>
                      <ul className="list-style">
                        <li>Yet this above sewed flirted opened ouch</li>
                        <li>Goldfinch realistic sporadic ingenuous</li>
                        <li>
                          Abominable this abidin far successfully then like
                          piquan
                        </li>
                        <li>Risus commodo viverra</li>
                        <li>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                        </li>
                      </ul>
                      <h4 className="title">Ordered & Unordered Lists.</h4>
                      <ul className="list-style">
                        <li>Yet this above sewed flirted opened ouch</li>
                        <li>Goldfinch realistic sporadic ingenuous</li>
                        <li>
                          Abominable this abidin far successfully then like
                          piquan
                        </li>
                        <li>Risus commodo viverra</li>
                      </ul>
                    </div>
                  </div>

                  <p className="mt--25 mt_sm--5">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look even slightly believable. If you are going to use a
                    passage of Lorem Ipsum. You need to be sure there isn't
                    anything embarrassing hidden in the middle of text. All the
                    Lorem Ipsum generators on the Internet tend toitrrepeat
                    predefined chunks. Necessary, making this the first true
                    generator on the Internet. It re are many variations of
                    passages of Lorem Ipsum available, but the majority have
                    suffered alteration in some form, by injectedeed eedhumour,
                    or randomised words which don't look even slightly
                    believable.
                  </p>
                  <div className="video-wrapper position-relative mb--40">
                    <div className="thumbnail">
                      <img
                        src="./assets/images/blog/bl-big-01.jpg"
                        alt="Blog Images"
                      />
                    </div>
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
                  <p className="mb--0">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look even slightly believable. If you are going to use a
                    passage of Lorem Ipsum. You need to be sure there isn't
                    anything embarrassing hidden in the middle of text. All the
                    Lorem Ipsum generators on the Internet tend toitrrepeat
                    predefined chunks. Necessary, making this the first true
                    generator on the Internet. It re are many variations of
                    passages of Lorem Ipsum available, but the majority have
                    suffered alteration in some form, by injectedeed eedhumour,
                    or randomised words which don't look even slightly
                    believable.
                  </p> */}
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
