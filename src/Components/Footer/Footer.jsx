import React from "react";
import BoldText from "../BoldText/BoldText";

const Footer = (props) => {
  return (
    <section>
      <BoldText
        id="contacts"
        size="6"
        color="#E4E4E4"
        addRules="position:absolute; top:calc(100% - 60vw); left:calc(7% - 3vw);"
        content="contacts"
      />
      <div className="social-wrapper">
        <div className="social-wrapper-item">
          <img
            src="/soc-icons/gmail.svg"
            width="27"
            alt=""
            className="social-icon"
          />
          <a href="mailto:djdaniil46@gmail.com" className="social-link">
            Email
          </a>
        </div>
        <div className="social-wrapper-item">
          <img
            src="/soc-icons/telegram.svg"
            width="27"
            alt=""
            className="social-icon"
          />
          <a href="https://t.me/kuawq" className="social-link">
            Telegram
          </a>
        </div>
        <div className="social-wrapper-item">
          <img
            src="/soc-icons/linkedin.svg"
            width="27"
            alt=""
            className="social-icon"
          />
          <a
            href="https://www.linkedin.com/in/shcherbakovfrontend/"
            className="social-link"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default Footer;
