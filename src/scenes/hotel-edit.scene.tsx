import * as React from 'react';
import { AppLayout } from 'layout/app.layout';
import { HotelEditContainer } from 'pods/hotel-edit/hotel-edit.container';

export const HotelEditScene = () => {
    return (
        <AppLayout>
            <HotelEditContainer />
        </AppLayout>
    );
}