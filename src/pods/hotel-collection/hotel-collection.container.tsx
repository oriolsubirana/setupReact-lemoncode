import * as React from 'react';
import { HotelCollectionComponent } from './hotel-collection.component';
import { HotelEntityVm } from './hotel-collection.vm';
import { basePicturesUrl } from 'core';
import { getHotelCollection } from './hotel-collection.api';
import { mapFromApiCollectionToVmCollection } from './hotel-collection.mapper';
import { withRouter, RouteComponentProps } from "react-router-dom";
import { routesLinks, sessionContext } from "core";

interface Props extends RouteComponentProps { }

export const HotelCollectionContainerInner = (props: Props) => {
    const [hotelCollection, setHotelCollection] = React.useState<HotelEntityVm[]>([]);
    const { history } = props;

    const doEdit = (id: string) => {
        history.push(routesLinks.hotelEdit(id));
    };

    React.useEffect(() => {
        getHotelCollection().then(result =>
            setHotelCollection(mapFromApiCollectionToVmCollection(result))
        )
    }, [])

    return (
        <HotelCollectionComponent hotelCollection={hotelCollection} onEdit={doEdit} />
    )
}

export const HotelCollectionContainer = withRouter<Props>(HotelCollectionContainerInner);