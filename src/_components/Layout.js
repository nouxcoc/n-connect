import React from 'react';
import { PrivateRoute } from './PrivateRoute';
import Sidebar from './_common/Sidebar';
import { AsidePanel } from './_common/AsidePanel';

const Layout = ({ routes }) => {
    return (
        <div className="dashboard-container">
            <Sidebar />
            <AsidePanel />
            {routes.map((route, i) => (
                <PrivateRoute exact path={route.path} key={i} component={route.component}></PrivateRoute>
            ))}
        </div>
    );
};

export default Layout;