import * as React from 'react';
import { Link } from 'react-router-dom';
import { CenteredLayout } from 'layout';
import { routesLinks } from 'core';

export const LoginScene = () => {
    return (
        <CenteredLayout>
            <h2>Hello from login page</h2>
            <Link to={routesLinks.hotelCollection} >Navigate to hotel collection</Link>
        </CenteredLayout>
    )
}