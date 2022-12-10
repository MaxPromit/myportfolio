import React from "react";

const Project = ({ project }) => {
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{project.info}</h2>
          <p>{project.title}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">View Project</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
