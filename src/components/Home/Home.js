import React from 'react';
import Blog from './Blog/Blog';
import CommentHome from './CommentHome/CommentHome';
import DoctorHome from './DoctorHome/DoctorHome';
import Hero from './Hero/Hero';
import Quality from './Quality/Quality';
import ServiceHome from './ServiceHome/ServiceHome';


const Home = () => {
    return (
        <div>
            <Hero />
            <Quality />
            <ServiceHome />
            <DoctorHome />
            <CommentHome />
            <Blog />
        </div>
    );
};

export default Home;