import React, { Component, Fragment, useEffect, useState } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { slickDot } from "../page-demo/script";
import { slickDot2 } from "../page-demo/script";
import Scrollspy from "react-scrollspy";
import ScrollToTop from "react-scroll-up";
import { FiChevronUp, FiX, FiMenu } from "react-icons/fi";
import Testimonial from "../elements/Testimonial";
import Team from "../elements/Team";
import BlogContent from "../elements/blog/BlogContent";
import Footer from "../component/footer/Footer";
import Contact from "../elements/contact/ContactTwo";
import Helmet from "../component/common/Helmet";
import Navbar from "../component/navbar/Navbar";
import HakawatiStudioShowcase from "../../public/assets/videos/Hakawati_Studio_Showcase.mp4";
const SlideList = [
  {
    textPosition: "text-center",
    category: "",
    title: "",
    description:
      "There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration.",
    // buttonText: 'Contact Us',
    buttonLink: "/contact",
  },
];

const list = [
  {
    image: "image-3",
    category: "Development",
    title: "Wamdah",
    url: "wamdah",
  },
  {
    image: "image-3",
    category: "Development",
    title: "Hakawati Game",
    url: "hakawatiGame",
  },
];

const CreativeLanding = (props) => {
  const [isMenuTrigger, setIsMenuTrigger] = useState();
  const [isCLoseMenuTrigger, setIsCLoseMenuTrigger] = useState();

  useEffect(() => {
    return () => {
      window.addEventListener("load", function () {
        console.log("All assets are loaded");
      });
    };
  }, []);

  const PostList = BlogContent.slice(0, 5);

  window.addEventListener("scroll", function () {
    var value = window.scrollY;
    if (value > 100) {
      document.querySelector(".header--fixed").classList.add("sticky");
    } else {
      document.querySelector(".header--fixed").classList.remove("sticky");
    }
  });

  var elements = document.querySelectorAll(".has-droupdown > a");
  for (var i in elements) {
    if (elements.hasOwnProperty(i)) {
      elements[i].onclick = function () {
        this.parentElement.querySelector(".submenu").classList.toggle("active");
        this.classList.toggle("open");
      };
    }
  }

  return (
    <Fragment>
      <Helmet pageTitle="Hakawati Studio" />
      {/* Start Header Area  */}
      <Navbar />

      {/* End Header Area  */}

      {/* Start Slider Area   */}
      <div className="slider-activation slider-creative-agency" id="home">
        <div className="video_overlay"></div>
        <video className="bg_image videoTag" autoPlay loop muted>
          <source src={HakawatiStudioShowcase} type="video/mp4" />
        </video>
      </div>
      {/* End Slider Area   */}

      {/* Start About Area */}
      <div className="about-area ptb--120 bg_color--5" id="about">
        <div className="about-wrapper">
          <div className="container">
            <div className="row row--35 align-items-center">
              <div className="col-lg-5">
                <div className="thumbnail">
                  <img
                    className="w-100"
                    src="./assets/images/about/about-img.jpg"
                    alt="About Images"
                  />
                </div>
              </div>
              <div className="col-lg-7">
                <div className="about-inner inner">
                  <div className="section-title">
                    <h2 className="title">About Us hakawati</h2>
                    <p className="description">
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered{" "}
                      <a href="#alteration">alteration</a> in some form, by
                      injected humour, or randomised words which dont look even
                      slightly believable. If you are going to use a passage of
                      Lorem Ipsum,
                    </p>
                  </div>
                  <div className="row mt--30">
                    <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                      <div className="about-us-list">
                        <h3 className="title">Who we are</h3>
                        <p>
                          There are many vtions of passages of Lorem Ipsum
                          available, but the majority have suffered.
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                      <div className="about-us-list">
                        <h3 className="title">Who we are</h3>
                        <p>
                          There are many vtions of passages of Lorem Ipsum
                          available, but the majority have suffered.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End About Area */}

      {/* Start Portfolio Area */}
      <div className="portfolio-area pt--120 bg_color--1" id="portfolio">
        <div className="rn-slick-dot">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="section-title service-style--3 text-left mb--15 mb_sm--0">
                  <h2 className="title">Our Portfolio</h2>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="slick-space-gutter--15 slickdot--20">
                  <Slider {...slickDot2}>
                    {list.map((value, index) => (
                      <div className="portfolio" key={index}>
                        <div className="thumbnail-inner">
                          <div className={`thumbnail ${value.image}`}></div>
                          <div className={`bg-blr-image ${value.image}`}></div>
                        </div>
                        <div className="content">
                          <div className="inner">
                            <p>{value.category}</p>
                            <h4>
                              <a href={`/portfolio-${value.url}`}>
                                {value.title}
                              </a>
                            </h4>
                            <div className="portfolio-button">
                              <a
                                className="rn-btn"
                                href={`/portfolio-${value.url}`}
                              >
                                See Projet
                              </a>
                            </div>
                          </div>
                        </div>
                        <Link
                          className="link-overlay"
                          to={`/portfolio-${value.url}`}
                        ></Link>
                      </div>
                    ))}
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Portfolio Area */}

      {/* Start Team Area  */}
      <div className="rn-team-area ptb--120 bg_color--1" id="team">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="section-title service-style--3 text-left mb--25 mb_sm--0">
                <h2 className="title">Our Team</h2>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <Team column="col-lg-4 col-md-6 col-sm-6 col-12" />
          </div>
        </div>
      </div>
      {/* End Team Area  */}

      {/* Start Testimonial Area */}
      <div
        className="rn-testimonial-area bg_color--5 ptb--120"
        id="testimonial"
      >
        <div className="container">
          <Testimonial />
        </div>
      </div>
      {/* End Testimonial Area */}

      {/* Start Blog Area */}
      <div className="rn-blog-area pt--120 pb--140 bg_color--1" id="news">
        <div className="container">
          <div className="row align-items-end">
            <div className="col-lg-6">
              <div className="section-title text-left">
                <h2>Latest News</h2>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration.
                </p>
              </div>
            </div>
          </div>
          <div className="row mt--55 mt_sm--30 rn-slick-dot slick-space-gutter--15 slickdot--20 row--0">
            <div className="col-lg-12">
              <Slider {...slickDot}>
                {PostList.map((value, i) => (
                  <div className="blog blog-style--1" key={i}>
                    <div className="thumbnail">
                      <a href="/blog-details">
                        <img
                          src={`/assets/images/blog/blog-${value.images}.jpg`}
                          alt="Blog Images"
                        />
                      </a>
                    </div>
                    <div className="content">
                      <p className="blogtype">{value.category}</p>
                      <h4 className="title">
                        <a href="/blog-details">{value.title}</a>
                      </h4>
                      <div className="blog-btn">
                        <a className="rn-btn text-white" href="/blog-details">
                          Read More
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
      {/* End Blog Area */}
      {/* Start Contact Us */}
      {/* <div className="rn-contact-us ptb--120 bg_color--5" id="contact">
                    <Contact />
                </div> */}
      {/* End Contact Us */}

      {/* Start Footer Style  */}
      <Footer />
      {/* End Footer Style  */}
      {/* Start Back To Top */}
      <div className="backto-top">
        <ScrollToTop showUnder={160}>
          <FiChevronUp />
        </ScrollToTop>
      </div>
      {/* End Back To Top */}
    </Fragment>
  );
};

export default CreativeLanding;
