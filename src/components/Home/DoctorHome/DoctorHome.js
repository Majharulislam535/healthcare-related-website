import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import DoctorCard from './DoctorCard/DoctorCard';

const DoctorHome = () => {
    const [doctor, setDoctor] = useState([]);
    useEffect(() => {
        fetch('doctor.json')
            .then(res => res.json())
            .then(data => setDoctor(data))
    }, [])

    const slice = doctor.slice(1, 5);

    return (
        <div className='pt-16'>
            <div className="text-center service-title py-10">
                <h1 className='text-secondary text-6xl text-center font-bold py-4'>Our High Qualified<span className='text-primary'>Doctors</span></h1>
                <p className='text-lg w-6/12 mx-auto py-4 pb-10'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. gravida.</p>
            </div>
            <div className="grid md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4  gap-4 w-5/6 mx-auto">
                {
                    slice.map(doctor => <DoctorCard key={doctor.id} doctor={doctor}></DoctorCard>)
                }
            </div>
        </div >
    );
};

export default DoctorHome;