import React from "react";
import { HiOutlineArrowSmRight } from "react-icons/hi";

const ProjectItems = ({ item, link }) => {
  return (
    <div className="project__card" key={item.id}>
      <img className="project__img" src={item.image} alt="" />
      <h3 className="project__title">{item.title}</h3>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <a href={item.githubLink} target="_blank" className="project__button">
          Github Link <HiOutlineArrowSmRight className="project__button-icon" />
        </a>
        {item.liveLink !== "" ? (
          <a href={item.liveLink} target="_blank" className="project__button">
            Live Link <HiOutlineArrowSmRight className="project__button-icon" />
          </a>
        ) : null}
      </div>
    </div>
  );
};

export default ProjectItems;
