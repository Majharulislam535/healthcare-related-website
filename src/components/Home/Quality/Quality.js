import React from 'react';
import { Link } from 'react-router-dom';
import quality from '../../../img/fea-1.png';
import './Quality.css';

const Quality = () => {
    return (
        <>
            <div className="quality-section pt-10 flex items-center justify-center p-4">
                <div className="quality-img w-2/5">
                    <img src={quality} alt="" />
                </div>
                <div className="quality-text w-3/5">
                    <h2 className='text-6xl font-bold py-2 text-secondary'>Quality Helthcare Starts With <span className='text-primary'> Quality Doctors</span></h2>
                    <p className='py-4 text-secondary'>As any doctor can tell you, the most crucial step toward healing is having the ridiagnosis. If the disease is precisely identified, a good resolution is far more likely. Conversely, a bad diagnosis usually means a bad outcome, no matter how skilled the physician</p>
                    <p className='py-2 text-secondary'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <Link to="/contact"> <button className="bg-primary btn-primary px-4 text-lg font-bold py-2 rounded text-white login">Contact now</button> </Link>
                </div>
            </div>
        </>
    );
};

export default Quality;