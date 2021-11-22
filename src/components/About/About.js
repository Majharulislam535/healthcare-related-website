import React from 'react';
import { Link } from 'react-router-dom';
import Quality from '../Home/Quality/Quality';
import ServiceHome from '../Home/ServiceHome/ServiceHome';
import DoctorHome from '../Home/DoctorHome/DoctorHome';
import CommentHome from '../Home/CommentHome/CommentHome'
import './about.css';

const About = () => {
    return (
        <div>
            <div className="about-title text-center md:py-15 sm:py-10  lg:py-20">
                <h1 className='text-secondary font-bold text-6xl'>About</h1>
                <p className='text-xl font-bold text-secondary py-4'> <Link to='/home' className='hover:text-primary'>Home</Link>/About</p>
            </div>
            <Quality />
            <div className='grid w-4/5 mx-auto sm:grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4 py-10'>
                <div className='about-bg'>
                    <div className="about-icons text-center p-4">
                        <i className="fas fa-stethoscope text-5xl"></i>
                    </div>
                    <div className="about-text text-center">
                        <h2 className="text-5xl font-bold py-2">240</h2>
                        <p className='text-xl font-bold '>Quality Doctor</p>
                    </div>
                </div>
                <div className='about-bg'>
                    <div className="about-icons text-center p-4">
                        <i className="fas fa-user-friends text-5xl"></i>
                    </div>
                    <div className="about-text text-center">
                        <h2 className="text-5xl font-bold py-2">1450</h2>
                        <p className='text-xl font-bold '>Our Patients</p>
                    </div>
                </div>
                <div className='about-bg'>
                    <div className="about-icons text-center p-4">

                        <i className="fas fa-clipboard-list text-5xl"></i>
                    </div>
                    <div className="about-text text-center">
                        <h2 className="text-5xl font-bold py-2">1.1M</h2>
                        <p className='text-xl font-bold '>Medical Filled</p>
                    </div>
                </div>
                <div className='about-bg'>
                    <div className="about-icons text-center p-4">
                        <i className="far fa-smile text-5xl"></i>
                    </div>
                    <div className="about-text text-center">
                        <h2 className="text-5xl font-bold py-2">2.3M</h2>
                        <p className='text-xl font-bold '>Happy Patient</p>
                    </div>
                </div>
            </div>
            <ServiceHome />
            <DoctorHome />
            <CommentHome />
        </div>
    );
};

export default About;