import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import AuthContext from '../Context/AuthContext/AuthContext';
import Loader from '../Pages/Shared/Loader';

const PrivateRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    // Getting previous location
    const location = useLocation();
    if (loading) {
        return <Loader></Loader>
    }
    if (user) {
        return children;
    }
    return <Navigate to='/login' state={location?.pathname}></Navigate>
};

export default PrivateRoutes;