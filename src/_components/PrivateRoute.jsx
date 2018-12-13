import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        localStorage.getItem('user')
            ? <div><h1 className="display-4">HMMM</h1><Component {...props} /></div>
            : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
    )} />

)