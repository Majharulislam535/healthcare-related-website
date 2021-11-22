import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../img/logo.png'

import './Footer.css'
const Footer = () => {

    return (
        <div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-10/12 mx-auto pt-20">
                <div>
                    <img src={logo} alt="" />
                    <p className="py-4 text-secondary">Outsource your HR functions to industry-specialized experts</p>
                    <div className="social-icons py-4">
                        <i className="fab mr-2 px-4 py-2  rounded cursor-pointer hover:bg-primary text-secondary text-xl fa-facebook-f"></i>
                        <i className="fab mr-2 px-4 py-2 rounded cursor-pointer hover:bg-primary text-secondary text-xl fa-twitter"></i>
                        <i className="fab mr-2 px-4 py-2 rounded cursor-pointer hover:bg-primary text-secondary text-xl fa-instagram"></i>
                        <i className="fab mr-2 px-4 py-2 rounded cursor-pointer hover:bg-primary text-secondary text-xl fa-pinterest-p"></i>
                    </div >
                </div >

                <div>
                    <h2 className='text-2xl text-secondary font-bold pb-5'>Usefull Links</h2>
                    <Link to='/home' className='text-lg text-secondary  hover:text-primary'>Home</Link>
                    <br />
                    <Link to='/about' className='text-lg text-secondary hover:text-primary'>About</Link>
                    <br />
                    <Link to='/service' className='text-lg text-secondary hover:text-primary'>Service</Link>
                    <br />
                    <Link to='/doctor' className='text-lg text-secondary hover:text-primary'>Doctor</Link>
                    <br />
                    <Link to='/contact' className='text-lg text-secondary hover:text-primary'>Contact</Link>
                </div>
                <div>
                    <h2 className='text-2xl text-secondary font-bold pb-5'>Our service</h2>
                    <p className='text-lg text-secondary hover:text-primary  cursor-pointer'>Dental Surgery</p>
                    <p className='text-lg text-secondary hover:text-primary cursor-pointer'>Orthopaedic</p>
                    <p className='text-lg text-secondary hover:text-primary cursor-pointer'>General Surgery</p>
                    <p className='text-lg text-secondary hover:text-primary cursor-pointer'>Neurology</p>
                    <p className='text-lg text-secondary hover:text-primary cursor-pointer'>Women's Care</p>
                </div>
                <div>
                    <h2 className='text-2xl text-secondary font-bold pb-5'>Get In Touch</h2>
                    <p className='py-2 text-secondary cursor-pointer hover:text-primary'><i className="fas fa-phone-square-alt"></i> +8801780790836</p>
                    <p className='py-2 text-secondary cursor-pointer hover:text-primary'><i className="far fa-envelope-open"></i> majhurulislam535 @gmail.com</p >
                    <p className='py-2 text-secondary cursor-pointer hover:text-primary'><i className="fas fa-home"></i>  Comilla, Bangladesh</p >
                </div >
            </div >
        </div >
    );
};

export default Footer;