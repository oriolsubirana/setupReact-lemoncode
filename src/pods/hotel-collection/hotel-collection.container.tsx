import * as React from 'react';
import { HotelCollectionComponent } from './hotel-collection.component';
import { HotelEntityVm } from './hotel-collection.vm';
import { basePicturesUrl } from 'core';
import { getHotelCollection } from './hotel-collection.api';
import { mapFromApiCollectionToVmCollection } from './hotel-collection.mapper';

export const HotelCollectionContainer = () => {
    const [hotelCollection, setHotelCollection] = React.useState<HotelEntityVm[]>([]);

    React.useEffect(() => {
        getHotelCollection().then(result =>
            setHotelCollection(mapFromApiCollectionToVmCollection(result))
        )
    }, [])

    return (
        <HotelCollectionComponent hotelCollection={hotelCollection} />
    )
}