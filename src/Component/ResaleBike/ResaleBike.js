import React, { useEffect } from "react";
import { useState } from "react";

const ResaleBike = () => {
  const [bike, setBike] = useState([]);
  useEffect(() => {
    fetch("https://portfolio-server-maxpromit.vercel.app/resale-bike")
      .then((res) => res.json())
      .then((data) => setBike(data[0]));
  }, []);
  console.log(bike);
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        <img src={bike.img1} alt="" />
        <img src={bike.img2} alt="" />
        <img src={bike.img3} alt="" />
      </div>
      <h2 className="text-3xl font-semibold mt-6 mb-3">
        Project Name: {bike.title}
      </h2>
      <h3 className="text-2xl">Description : A MERN Stack Website</h3>
     <p className="text-xl my-1"> * A User Can Login Using Email-Password or Using Google <br />
      *Dashboard Created For Buyer, Seller and Admin <br />
      *A Seller Can Add Product, Delete Product and Advertise Products at Home Page<br />
      *Admin Can Delete Any User he Wants</p>

    <button className="text-blue-700 mx-3"> <a href="https://resale-bike-2acda.web.app/">Live Site Code</a></button>
    <button className="text-blue-700  mx-3"> <a href="https://github.com/MaxPromit/P-Hero-Assignment-12-Resale">Client Site Code</a></button>
    <button className="text-blue-700  mx-3"> <a href="https://github.com/MaxPromit/P-Hero-Assignment-12-Resale-Server">Server Site Code</a></button>

    </div>
  );
};

export default ResaleBike;
