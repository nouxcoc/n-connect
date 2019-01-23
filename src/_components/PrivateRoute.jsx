import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        localStorage.getItem('user')
            ?
            <div>
                <div className="container-fluid">
                    <Component {...props} />
                </div>
            </div>
            : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
    )} />

)