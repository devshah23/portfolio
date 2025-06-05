import React from "react";
import { HiCheckBadge } from "react-icons/hi2";

const Frontend = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Frontend Tech</h3>
      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <HiCheckBadge />
            <div>
              <h3 className="skills__name">HTML5/CSS3</h3>
              {/* <span className="skills__level">Basic</span> */}
            </div>
          </div>
          <div className="skills__data">
            <HiCheckBadge />
            <div>
              <h3 className="skills__name">Tailwind CSS</h3>
              {/* <span className="skills__level">Intermediate</span> */}
            </div>
          </div>
          <div className="skills__data">
            <HiCheckBadge />
            <div>
              <h3 className="skills__name">JS / TS</h3>
              {/* <span className="skills__level">Intermediate</span> */}
            </div>
          </div>
          <div className="skills__data">
            <HiCheckBadge />
            <div>
              <h3 className="skills__name">Razor Pages</h3>
              {/* <span className="skills__level">Basic</span> */}
            </div>
          </div>
        </div>
        <div className="skills__group">
          <div className="skills__data">
            <HiCheckBadge />
            <div>
              <h3 className="skills__name">React</h3>
              {/* <span className="skills__level">Intermediate</span> */}
            </div>
          </div>
          <div className="skills__data">
            <HiCheckBadge />
            <div>
              <h3 className="skills__name">Next.js</h3>
              {/* <span className="skills__level">Basic</span> */}
            </div>
          </div>
          <div className="skills__data">
            <HiCheckBadge />
            <div>
              <h3 className="skills__name">RTKQuery</h3>
              {/* <span className="skills__level">Basic</span> */}
            </div>
          </div>
          <div className="skills__data">
            <HiCheckBadge />
            <div>
              <h3 className="skills__name">Redux</h3>
              {/* <span className="skills__level">Basic</span> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frontend;
