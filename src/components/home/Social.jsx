import React from "react";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { SiCodechef } from "react-icons/si";
import { AiOutlineTrophy } from "react-icons/ai";

const Social = () => {
  return (
    <div className="home__social">
      <a
        href="https://www.codechef.com/users/dev_shah23"
        className="home__social-icon"
        target="_blank"
        rel="noreferrer">
        <SiCodechef />
      </a>
      <a
        href="https://www.github.com/devshah23"
        className="home__social-icon"
        target="_blank"
        rel="noreferrer">
        <FiGithub />
      </a>
      <a
        href="https://www.linkedin.com/in/dev-shah-97b746225/"
        className="home__social-icon"
        target="_blank"
        rel="noreferrer">
        <FiLinkedin />
      </a>
    </div>
  );
};

export default Social;
