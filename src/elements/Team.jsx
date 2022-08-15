import React, { Component } from "react";
import { FaLinkedinIn, FaTwitter } from "react-icons/fa";

let TeamContent = [
  {
    images: "01",
    title: "Abdullah Ba Mashmous",
    designation: "CEO & Producer",
    socialNetwork: [
      {
        icon: <FaLinkedinIn />,
        url: "#",
      },
      {
        icon: <FaTwitter />,
        url: "#",
      },
    ],
  },
  {
    images: "02",
    title: "Molham AlEter",
    designation: "Art Director",
    socialNetwork: [
      {
        icon: <FaLinkedinIn />,
        url: "#",
      },
    ],
  },
  {
    images: "03",
    title: "Mohammed Shalabi",
    designation: "Developer",
    socialNetwork: [
      {
        icon: <FaLinkedinIn />,
        url: "#",
      },
      {
        icon: <FaTwitter />,
        url: "#",
      },
    ],
  },
  {
    images: "04",
    title: "Moyasr Tamim",
    designation: "UX/UI Designer",
    socialNetwork: [
      {
        icon: <FaLinkedinIn />,
        url: "#",
      },
      {
        icon: <FaTwitter />,
        url: "#",
      },
    ],
  },
  {
    images: "05",
    title: "Roua Alzahem",
    designation: "Visual Artist",
    socialNetwork: [
      {
        icon: <FaLinkedinIn />,
        url: "#",
      },
    ],
  },
  {
    images: "06",
    title: "Omar Balfaqaih",
    designation: "Game Developer",
    socialNetwork: [
      {
        icon: <FaLinkedinIn />,
        url: "#",
      },
      {
        icon: <FaTwitter />,
        url: "#",
      },
    ],
  },
];

class Team extends Component {
  render() {
    const { column } = this.props;
    return (
      <React.Fragment>
        {TeamContent.map((value, i) => (
          <div className={`${column}`} key={i}>
            <div className="team">
              <div className="thumbnail">
                <img
                  src={`/assets/images/team/team-${value.images}.jpg`}
                  alt="Blog Images"
                />
              </div>
              <div className="content">
                <h4 className="title">{value.title}</h4>
                <p className="designation">{value.designation}</p>
              </div>
              <ul className="social-icon">
                {value.socialNetwork.map((social, index) => (
                  <li key={index}>
                    <a href={`${social.url}`}>{social.icon}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </React.Fragment>
    );
  }
}
export default Team;
