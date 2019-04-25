import * as React from 'react';
import { Link } from 'react-router-dom';
import { CenteredLayout } from 'layout/centered.layout';

export const LoginScene = () => {
    return (
        <CenteredLayout>
            <h2>Hello from login page</h2>
            <Link to="/hotel-collection" >Navigate to hotel collection</Link>
        </CenteredLayout>
    )
}