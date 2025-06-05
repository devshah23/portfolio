import React from "react";
import { HiCheckBadge } from "react-icons/hi2";

const Backend = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Backend Tech</h3>
      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <HiCheckBadge />
            <div>
              <h3 className="skills__name">Express.js</h3>
            </div>
          </div>
          <div className="skills__data">
            <HiCheckBadge />
            <div>
              <h3 className="skills__name">C#</h3>
            </div>
          </div>
          <div className="skills__data">
            <HiCheckBadge />
            <div>
              <h3 className="skills__name">ASP.NET Core</h3>
            </div>
          </div>
          <div className="skills__data">
            <HiCheckBadge />
            <div>
              <h3 className="skills__name">ASP.NETWebAPI</h3>
            </div>
          </div>
        </div>

        <div className="skills__group">
          <div className="skills__data">
            <HiCheckBadge />
            <div>
              <h3 className="skills__name">Python</h3>
            </div>
          </div>

          <div className="skills__data">
            <HiCheckBadge />
            <div>
              <h3 className="skills__name">MongoDB</h3>
            </div>
          </div>

          <div className="skills__data">
            <HiCheckBadge />
            <div>
              <h3 className="skills__name">PostgreSQL</h3>
            </div>
          </div>
          <div className="skills__data">
            <HiCheckBadge />
            <div>
              <h3 className="skills__name">MySQL</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Backend;
