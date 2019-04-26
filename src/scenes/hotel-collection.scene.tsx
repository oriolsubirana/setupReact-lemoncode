import * as React from 'react';
import { Link } from 'react-router-dom';
import { routesLinks, routerSwitchRoutes } from 'core';
import { AppLayout } from 'layout/app.layout';
import { HotelCollectionContainer } from 'pods/hotel-collection';

export const HotellCollectionScene = () => {
    return (
        <AppLayout>
            <HotelCollectionContainer />
        </AppLayout>
    );
}