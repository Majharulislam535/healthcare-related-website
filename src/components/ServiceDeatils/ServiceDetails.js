import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import './serviceDetails.css'
import useService from '../../hooks/useService';



const ServiceDetails = () => {
    const { id } = useParams();

    const { service } = useService();
    const result = service.filter(pd => pd.id === parseFloat(id));
    return (
        <div>
            {
                result.map(service => {
                    return (
                        <>
                            <div className='service-details'>
                                <div className='service-img py-6'>
                                    <img src={service.img} className='lg:w-1/2 md:w-9/12 sm: mx-auto p-4 border-radius' alt='' />
                                </div>
                                <div className="service-text">
                                    <h2 className='w-1/2 mx-auto md:text-4xl sm:text-3xl text-2xl  lg:text-5xl font-bold text-primary py-5'>{service.name}</h2>
                                    <p className='lg:text-xl md:text-lg w-1/2 mx-auto text-secondary'>{service.Description}</p>
                                </div>
                            </div>
                        </>
                    )
                })
            }
        </div>
    );
};

export default ServiceDetails;