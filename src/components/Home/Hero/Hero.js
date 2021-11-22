import React from 'react';
import { Link } from 'react-router-dom';
import hero from '../../../img/slider-img.png'
import './hero.css';
const Hero = () => {
    return (
        <>
            <div className="">
                <div className="hero-section flex justify-center items-center">
                    <div className="hero-text w-6/12 p-6">
                        <h1 className='text-7xl font-bold py-4 '><span className='text-primary'>The Greatest</span> <span className='text-secondary'>Health is wealth</span></h1>
                        <p className='text-secondary py-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate incidunt maiores officiis qui libero assumenda ad aliquam ea sapiente accusamus.</p>
                        <Link to="/doctor"> <button className="bg-primary btn-primary px-4 text-xl py-2 rounded text-white login">Get a Doctor</button> </Link>
                        <Link to='/contact'> <button className="border-2 border-secondary px-4 text-xl py-2 rounded text-secondary">Contact now</button></Link>
                    </div>
                    <div className="hero-img w-6/12">
                        <img className='w-full' src={hero} alt="" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Hero;