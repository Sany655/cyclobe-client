import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const UserRoute = ({ children, ...rest }) => {
    const { user, loading } = useAuth();

    if (loading) {
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
                user.uid ? children
                    : <Redirect
                        to={{
                            pathname: '/login',
                            state: { from: location }
                        }}>
                    </Redirect>
            )} />
    )
};

export default UserRoute;