import React from 'react';
import { Navigate, Route, Routes, useLocation, useNavigate } from 'react-router';
import useContextApi from '../AuthContext/useContextApi';

const PrivetRoute = ({ children, ...rest }) => {
    const { user } = useContextApi();
    let location = useLocation();

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} />;
    }
    return children;
};

export default PrivetRoute;