import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import AuthUser from '../../AuthUser/AuthUser';

const RequireUser = ({ children }) => {
    const location = useLocation();
    const { userRole} = AuthUser()
    if (userRole !== 'user') {
        // logout()
        return <Navigate to="*" state={{ from: location }} replace></Navigate>
    }
    return children;
};
export default RequireUser;