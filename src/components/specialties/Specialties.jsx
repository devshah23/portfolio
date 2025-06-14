import React, { useState } from "react";
import "./specialties.css";
import {
  HiOutlineClipboardList,
  HiOutlineArrowSmRight,
  HiOutlineCheckCircle,
  HiX,
} from "react-icons/hi";

const Services = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="services section" id="specialties">
      <h2 className="section__title">Specialties</h2>

      <div className="services__container container grid">
        <div className="services__content">
          <div>
            <HiOutlineClipboardList className="services__icon" />
            <h3 className="services__title">
              Full Stack
              <br />
              Development
            </h3>
          </div>
          <span className="services__button" onClick={() => toggleTab(1)}>
            View More
            <HiOutlineArrowSmRight className="services__button-icon" />
          </span>
          <div
            className={
              toggleState === 1
                ? "services__modal active-modal"
                : "services__modal"
            }>
            <div className="services__modal-content">
              <HiX
                onClick={() => toggleTab(0)}
                className="services__modal-close"
              />
              <h3 className="services__modal-title">Full Stack Developer</h3>
              <p className="services__modal-description">
                Experienced in building web applications
              </p>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <HiOutlineCheckCircle className="services__modal-icon" />
                  <p className="services__modal-info">
                    Full Stack Developer Intern at startup ShiftNext.
                  </p>
                </li>
                <li className="services__modal-service">
                  <HiOutlineCheckCircle className="services__modal-icon" />
                  <p className="services__modal-info">
                    Web Developer Intern at Tatvasoft, India.
                  </p>
                </li>

                <li className="services__modal-service">
                  <HiOutlineCheckCircle className="services__modal-icon" />
                  <p className="services__modal-info">
                    Experience in developing scalable multi-tenant solutions.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <HiOutlineClipboardList className="services__icon" />
            <h3 className="services__title">
              Competitive
              <br />
              Programming
            </h3>
          </div>
          <span className="services__button" onClick={() => toggleTab(2)}>
            View More
            <HiOutlineArrowSmRight className="services__button-icon" />
          </span>
          <div
            className={
              toggleState === 2
                ? "services__modal active-modal"
                : "services__modal"
            }>
            <div className="services__modal-content">
              <HiX
                onClick={() => toggleTab(0)}
                className="services__modal-close"
              />
              <h3 className="services__modal-title">Programmer</h3>
              <p className="services__modal-description">
                Proficient in various programming languages
              </p>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <HiOutlineCheckCircle className="services__modal-icon" />
                  <p className="services__modal-info">
                    Led a team to ICPC Regional Contest.
                  </p>
                </li>
                <li className="services__modal-service">
                  <HiOutlineCheckCircle className="services__modal-icon" />
                  <p className="services__modal-info">
                    Regularly engage in coding practice
                  </p>
                </li>
                <li className="services__modal-service">
                  <HiOutlineCheckCircle className="services__modal-icon" />
                  <p className="services__modal-info">
                    Solved over 200+ problems
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <HiOutlineClipboardList className="services__icon" />
            <h3 className="services__title">
              Machine
              <br />
              Learning
            </h3>
          </div>
          <span className="services__button" onClick={() => toggleTab(3)}>
            View More
            <HiOutlineArrowSmRight className="services__button-icon" />
          </span>
          <div
            className={
              toggleState === 3
                ? "services__modal active-modal"
                : "services__modal"
            }>
            <div className="services__modal-content">
              <HiX
                onClick={() => toggleTab(0)}
                className="services__modal-close"
              />
              <h3 className="services__modal-title">ML Enthusiast</h3>
              <p className="services__modal-description"></p>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <HiOutlineCheckCircle className="services__modal-icon" />
                  <p className="services__modal-info">
                    Developed and trained machine learning models
                  </p>
                </li>
                <li className="services__modal-service">
                  <HiOutlineCheckCircle className="services__modal-icon" />
                  <p className="services__modal-info">
                    Familiar with deep learning architectures
                  </p>
                </li>
                <li className="services__modal-service">
                  <HiOutlineCheckCircle className="services__modal-icon" />
                  <p className="services__modal-info">
                    Implemented supervised and unsupervised learning algorithms
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
