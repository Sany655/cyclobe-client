import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const AdminRoute = ({ children, ...rest }) => {
    const { admin, adminLoading } = useAuth();

    if (adminLoading) {
        return <div className=' d-flex justify-content-center align-items-center'>
        <div className="spinner-grow" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
    </div>
    }
    return (
        <Route
            {...rest}
            render={({ location }) => (
                admin ? children
                    : <Redirect
                        to={{
                            pathname: '/dashboard',
                            state: { from: location }
                        }}>
                    </Redirect>
            )} />
    )
};

export default AdminRoute;