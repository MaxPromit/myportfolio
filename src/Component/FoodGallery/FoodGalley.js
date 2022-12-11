import React, { useEffect, useState } from 'react';

const FoodGalley = () => {
    const [bike, setBike] = useState([]);
    useEffect(() => {
      fetch("https://portfolio-server-maxpromit.vercel.app/food-gallery")
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
       <p className="text-xl my-1"> * Firebased Authentication System Used For Implement Login
 <br />
        *A User Can Add Review And Service What He wants
 <br />
        *By Clicking See All Service At Home Page A user Can See All The Service
<br />
        *A User Can Also See His Review at a Specific Service given by him</p>
  
      <button className="text-blue-700 mx-3"> <a href="https://food-gallery-8a206.web.app/">Live Site Code</a></button>
      <button className="text-blue-700  mx-3"> <a href="https://github.com/MaxPromit/P-Hero-Assignment-11-Food-Gallery">Client Site Code</a></button>
      <button className="text-blue-700  mx-3"> <a href="https://github.com/MaxPromit/P-Hero-Assignment-11-Food-Gallery-Server">Server Site Code</a></button>
  
      </div>
    );
};

export default FoodGalley;