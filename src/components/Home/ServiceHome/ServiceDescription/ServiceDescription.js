import React from 'react';
import { Link } from 'react-router-dom';
import './serviceDescription.css';

const ServiceDescription = (props) => {
    const { name, icon, single_Description } = props.service;
    return (
        <div className=''>
            <div className="card text-center">
                <div className=" p-4">
                    <i className={`${icon} icons text-secondary rounded text-4xl p-4 `}></i>
                </div>
                <div className="card-text">
                    <h1 className='text-2xl font-bold text-secondary py-4 hover:text-primary transition'>{name}</h1>
                    <p className='text-secondary py-4'>{single_Description}</p>
                    {props.children}
                </div>
            </div>
        </div>
    );
};

export default ServiceDescription;