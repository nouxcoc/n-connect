import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Header from './_common/Header';

export const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        localStorage.getItem('user')
            ? <div><Header/><Component {...props} /></div>
            : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
    )} />

)