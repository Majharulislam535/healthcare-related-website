import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useService from '../../../hooks/useService';
import ServiceDescription from './ServiceDescription/ServiceDescription';
import './serviceHome.css';

const ServiceHome = () => {
    const { service } = useService();
    return (
        <>
            <div className="service-home pt-40">
                <div className="text-center service-title">
                    <h1 className='text-secondary text-6xl text-center font-bold py-4'>Special Service For <span className='text-primary'>Patients</span></h1>
                    <p className='text-lg w-6/12 mx-auto py-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. gravida.</p>
                </div>
                <div className="w-5/6 mx-auto grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pt-10 justify-center">
                    {
                        service.map(pd => <ServiceDescription key={pd.id} service={pd}>
                            <Link to='/service' className='text-xl text-secondary hover:text-primary transition font-bold'>Learn more <i className="fas fa-chevron-right"></i> </Link>
                        </ServiceDescription>)
                    }
                </div>
            </div>
        </>
    );
};

export default ServiceHome;