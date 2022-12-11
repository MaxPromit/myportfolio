import React from "react";
import { Link } from "react-router-dom";

const Project = ({ project }) => {
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl rounded-lg">
        <figure>
          <img className="object-cover w-96 h-64" src={project.img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-[#DC143C]">{project.info}</h2>
          <p className="text-2xl">{project.title}</p>
          <div className="card-actions justify-end">
            <Link to={`/product/${project._id}`} className="btn bg-indigo-700 hover:bg-indigo-800 border-none font-medium rounded">Visit Projects</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
