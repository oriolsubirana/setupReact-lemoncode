import * as React from 'react';
import { Link } from 'react-router-dom';
import { routesLinks } from 'core';
import { AppLayout } from 'layout/app.layout';

export const HotellCollectionScene = () => {
    return (
        <AppLayout>
            <h2>Hello from hotel collection page</h2>
            <Link to={routesLinks.login} >Navigate to login collection</Link>
        </AppLayout>
    );
}