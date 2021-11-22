import React from 'react';
import { Link } from 'react-router-dom';

const DoctorCard = (props) => {
    const { img, tag_name, name } = props.doctor;
    return (
        <>
            <div >
                <div className="doctor-card ">
                    <div className="doctor-img text-center">
                        <img width="100%" src={img} alt="" />
                    </div>
                    <div className="doctor-text">
                        <h2 className='text-2xl font-bold text-secondary py-2 hover:text-primary'>{name}</h2>
                        <h2 className='text-xl text-secondary hover:text-primary'>{tag_name}</h2>
                        <Link to="/doctor" className='text-secondary text-lg font-bold hover:text-primary'>Learn more <i className="fas fa-chevron-right"></i></Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DoctorCard;