import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import AuthUser from '../../AuthUser/AuthUser';

const RequireAccounts = ({ children }) => {
    const location = useLocation();
    const { userRole, logout } = AuthUser()
    if (userRole !== 'accountant') {
        // logout()
        return <Navigate to="*" state={{ from: location }} replace></Navigate>
    }
    return children;
};
export default RequireAccounts;