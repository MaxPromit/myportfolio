import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Project from './Project';

const Projects = () => {
    const [projects, setProjects] = useState([]);
    useEffect(()=>{
        fetch('https://portfolio-server-taupe.vercel.app/projects')
        .then(res=> res.json())
        .then(data => setProjects(data))
    },[])
    console.log(projects);
    return (
        <div>
            <h2  className='text-3xl text-center my-3 font-semibold'>My Recent Projects</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6'>
            {
                projects.map(project =><Project key={project._id} project={project}></Project>)
            }
            </div>
        </div>
    );
};

export default Projects;