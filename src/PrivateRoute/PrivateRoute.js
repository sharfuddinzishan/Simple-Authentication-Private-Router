import React from 'react';
import { Redirect } from 'react-router';
import useAuth from './../Hooks/useAuth';
import { Route } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { user } = useAuth();
    return (
        <Route
            render={
                ({ location }) =>
                    user?.email ? (children) : (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: { from: location }
                            }}
                        />)

            }
        />
    );
};

export default PrivateRoute;