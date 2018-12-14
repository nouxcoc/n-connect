import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Header from './_common/Header';
import Sidebar from './_common/Sidebar';

export const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        localStorage.getItem('user')
            ?
            <div>
                {/* <Header /> */}
                <Sidebar/>
                <div className="container-fluid">
                    <Component {...props} />
                </div>
            </div>
            : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
    )} />

)