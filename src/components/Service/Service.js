import React from 'react';
import { Link, } from 'react-router-dom';
import useService from '../../hooks/useService';
import ServiceDescription from '../Home/ServiceHome/ServiceDescription/ServiceDescription';



const Service = () => {
    const { service } = useService();
    return (
        <div>
            <div className="about-title text-center p">
                <h1 className='text-secondary font-bold text-6xl'>Service</h1>
                <p className='text-xl font-bold text-secondary py-4'> <Link to='/home' className='hover:text-primary'>Home</Link>/Service</p>
            </div>
            <div className="w-5/6 mx-auto grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pt-10 justify-center">
                {
                    service.map(pd => <ServiceDescription key={pd.id} service={pd}>
                        <Link to={`/service/details${pd.id}`} className='text-xl text-secondary hover:text-primary transition font-bold'> Details <i className="fas fa-chevron-right"></i> </Link>
                    </ServiceDescription>)
                }
            </div>
        </div>
    );
};

export default Service;