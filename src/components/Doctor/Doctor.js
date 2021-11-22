import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import DoctorCard from '../Home/DoctorHome/DoctorCard/DoctorCard';

const Doctor = () => {

    const [doctor, setDoctor] = useState([]);

    useEffect(() => {
        fetch('/doctor.json')
            .then(res => res.json())
            .then(data => setDoctor(data));
    }, [])

    return (
        <div className='lg:py-10 md:py-6 sm:py-4'>
            <div className="about-title text-center p">
                <h1 className='text-secondary font-bold text-6xl'>Doctor</h1>
                <p className='text-xl font-bold text-secondary py-4'> <Link to='/home' className='hover:text-primary'>Home</Link>/Doctor</p>
            </div>
            <div className="grid md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4  gap-4 w-5/6 mx-auto">
                {
                    doctor.map(doctor => <DoctorCard doctor={doctor}></DoctorCard>)
                }
            </div>
        </div>
    );
};

export default Doctor;