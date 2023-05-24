import "./FooterStyles.css";

import React from "react";

import {
  FaHome,
  FaPhone,
  FaMailBulk,
  FaDiscord,
  FaTwitter,
  FaReddit,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p>7eme Tranche Vallée</p>
              <p>Abidjan</p>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              05-74-08-97-02
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              noamliehn@gmail.com
            </h4>
          </div>
        </div>

        <div className="right">
          <h4>A propos de mon établissement actuel</h4>
          <p>
            L'IFRAN enseigne dans plusieurs aspects du numérique, que ce soit le développement, 
            la création digitale ou même la communication digitale
          </p>
          <div className="social">
            <FaReddit
              size={30}
              style={{ color: "#fff", marginRight: "1rem" }}
            />
            <FaTwitter
              size={30}
              style={{ color: "#fff", marginRight: "1rem" }}
            />
            <FaDiscord
              size={30}
              style={{ color: "#fff", marginRight: "1rem" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
