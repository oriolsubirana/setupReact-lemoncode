import * as React from 'react';
import { Link } from 'react-router-dom';
import { routesLinks } from 'core';

export const HotellCollectionScene = () => {
    return (
        <>
            <h2>Hello from hotel collection page</h2>
            <Link to={routesLinks.login} >Navigate to login collection</Link>
        </>
    );
}