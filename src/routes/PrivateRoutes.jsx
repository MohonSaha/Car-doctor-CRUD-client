import React, { useContext } from 'react';
import { authContext } from '../providers/AuthProviders';
import { Navigate } from 'react-router-dom';

const PrivateRoutes = ({children}) => {

    const {user, loading} = useContext(authContext);

    if(loading){
        return <progress className="progress progress-error w-56"></progress>
    }

    if(user?.email){
        return children;
    }

    return <Navigate to='/login' replace></Navigate>;
};

export default PrivateRoutes;