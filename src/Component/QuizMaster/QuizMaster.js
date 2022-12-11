import React, { useEffect, useState } from 'react';

const QuizMaster = () => {
    const [bike, setBike] = useState([]);
    useEffect(() => {
      fetch("https://portfolio-server-maxpromit.vercel.app/quiz-master")
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
       <p className="text-xl my-1"> * You Can play quiz anytime
 <br />
        *It's is made by javascript
 <br />
        *You can check your programming related khowledged.
<br />
        *It has multiple section for play quiz</p>
  
      <button className="text-blue-700 mx-3"> <a href="https://amazing-macaron-479c8f.netlify.app/">Live Site Code</a></button>
      <button className="text-blue-700  mx-3"> <a href="https://github.com/MaxPromit/P-Hero-Assignment-9th-Grand-Master">Client Site Code</a></button>
      </div>
    );
};

export default QuizMaster;