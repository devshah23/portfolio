import React from "react";
import { HiOutlineSparkles } from "react-icons/hi";
import { FaGraduationCap } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <FaGraduationCap className="about__icon" />
        <h3 className="about__title">Education</h3>
        <span className="about__subtitle">B.E. (IT)</span>
      </div>
      <div className="about__box">
        <FaLocationDot className="about__icon" />
        <h3 className="about__title">Location</h3>
        <span className="about__subtitle">Anand, India</span>
      </div>
      <div className="about__box">
        <HiOutlineSparkles className="about__icon" />
        <h3 className="about__title">
          Team <br />
          Player
        </h3>
      </div>
    </div>
  );
};

export default Info;
