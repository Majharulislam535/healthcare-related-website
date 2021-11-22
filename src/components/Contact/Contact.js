import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../img/fea-1.png';

const Contact = () => {
    return (
        <div className='lg:py-10 md:py-6 sm:py-4'>
            <div className="about-title text-center p">
                <h1 className='text-secondary font-bold text-6xl'>Contact</h1>
                <p className='text-xl font-bold text-secondary py-4'> <Link to='/home' className='hover:text-primary'>Home</Link>/Contact</p>
            </div>

            <div className="contact">
                <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-6 p-10">
                    <div className="contact-img text-center">
                        <img src={img} alt="" />
                    </div>
                    <div className="contact-info flex flex-col justify-center md:p-10 sm:p-7   lg:p-15">
                        <h1 className='lg:text-5xl md:text-4xl sm:text-3xl text-2xl py-4 font-bold text-secondary'>Let's us <span className='text-primary'>Help you</span> </h1>
                        <div className='flex items-center '>
                            <div className="phone bg-primary p-6 rounded">
                                <i className="fas fa-phone-alt text-4xl login"></i>
                            </div>
                            <div className='p-4'>
                                <h1 className='lg:text-2xl md:text-xl text-lg font-bold text-secondary'>support number--</h1>
                                <h1 className='lg:text-3xl md:text-2xl text-xl font-bold text-primary'>01255844485</h1>
                            </div>
                        </div>
                        <div className='flex justify-between py-6'>
                            <div>
                                <div>
                                    <i className="fas fa-building lg:text-6xl md:text-5xl sm:text-4xl text-3xl text-secondary py-4"></i>
                                </div>
                                <h1 className='lg:text-3xl text-secondary md:text-2xl sm:text-1xl text-xl'>Office address</h1>
                                <p className='text-primary text-lg'>Comilla, tomsom bridge #125 </p>
                                <p className='text-secondary text-lg'>Bangladesh</p>
                            </div>
                            <div>
                                <div>
                                    <i className="fas fa-headset lg:text-6xl md:text-5xl sm:text-4xl text-3xl text-secondary py-4"></i>
                                </div>
                                <h2 className='lg:text-3xl text-secondary md:text-2xl sm:text-1xl text-xl'>online support</h2>
                                <p className='text-primary text-lg'>majhuruislam535@gmail.com</p>
                                <p className='text-secondary text-lg'>+2564411545</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;