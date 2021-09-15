import React from 'react';
import { Redirect, Route } from 'react-router';
import { PrivateRouteProps } from '../../../types';
import { TOKEN_KEY } from '../utils/api-service';

const PrivateRoute = ({ children, ...rest }: PrivateRouteProps) => {

    const TOKEN = localStorage.getItem(TOKEN_KEY);

    if (!TOKEN) {
        return (
            <Redirect to="/login" />
        )
    } else {
        return (
            <Route {...rest}>{children}</Route>
        )
    }
    return (
        <div>
            <h1 className="text-center display-1">PrivateRoute Page</h1>
        </div>
    )
}

export default PrivateRoute;
