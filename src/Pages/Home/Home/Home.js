import React from "react";
import img from "../../../image/IMG_20210309_133205_340.jpg"
import Projects from "../Projects/Projects";

const Home = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-white lg:bg-base-200 rounded-lg">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={img} className="max-w-xs lg:max-w-sm rounded-lg shadow-2xl" alt="" />
          <div className="lg:w-1/2">
            <h1 className="text-5xl font-bold">
              Hi, I'm <span className="text-red-700">Promit Biswas</span> <br />
              <h3 className="text-4xl mt-3">A MERN Stack Web Developer</h3>
            </h1>
            <p className="py-6">
              I am a web developer with an amazing ability to develop websites
              that are both functional and aesthetically pleasing. I have a
              strong under-standing of web standards and best practices, and I
              am passionate about creating websites that users will find easy to
              use and visually appealing.
            </p>
            <button className="btn btn-primary rounded">
              <a
                target="blank"
                href="https://drive.google.com/file/d/1dZph7NWEJoTwWS3dXuBk8015Qo2z0x4Q/view"
              >
                Get Resume
              </a>
            </button>
          </div>
        </div>
      </div>
      <Projects></Projects>
    </div>
  );
};

export default Home;
