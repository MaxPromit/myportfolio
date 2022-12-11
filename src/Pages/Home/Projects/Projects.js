import React from "react";
import { Link } from "react-router-dom";


const Projects = () => {
  return (
    <div id="projects">
      <h2 className="text-3xl text-center my-10 font-semibold">
        My Recent Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
        <div className="card w-96 bg-base-100 shadow-xl rounded-lg">
          <figure>
            <img className="object-cover w-96 h-64" src="https://i.ibb.co/qDngwX2/pexels-photo-2393816.jpg" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-[#DC143C]">MERN Stack</h2>
            <p className="text-2xl">Resale Bike Bd</p>
            <div className="card-actions justify-end">
              <Link
                to="/resale-bike"
                className="btn bg-indigo-700 hover:bg-indigo-800 border-none font-medium rounded"
              >
                Visit Projects
              </Link>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl rounded-lg">
          <figure>
            <img className="object-cover w-96 h-64" src="https://i.ibb.co/TgRqzb9/pexels-photo-1640772.jpg" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-[#DC143C]">Full Stack</h2>
            <p className="text-2xl">Food Gallery Shop</p>
            <div className="card-actions justify-end">
              <Link
                to="/food-gallery"
                className="btn bg-indigo-700 hover:bg-indigo-800 border-none font-medium rounded"
              >
                Visit Projects
              </Link>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl rounded-lg">
          <figure>
            <img className="object-cover w-96 h-64" src="https://i.ibb.co/9NTRNC8/pexels-photo-3769714.jpg" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-[#DC143C]">Javascript</h2>
            <p className="text-2xl">Quiz Master Online</p>
            <div className="card-actions justify-end">
              <Link
                to="/quiz-master"
                className="btn bg-indigo-700 hover:bg-indigo-800 border-none font-medium rounded"
              >
                Visit Projects
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
