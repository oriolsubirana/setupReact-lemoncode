import * as React from 'react';
import { HotelEditComponent } from './hotel-edit.component';
import { withRouter, RouteComponentProps } from "react-router-dom";
import { HotelEntityVm } from 'pods/hotel-collection/hotel-collection.vm';

interface Props extends RouteComponentProps { }

export const HotelEditContainerInner = (props: Props) => {
    const [hotel, setHotel] = React.useState<HotelEntityVm>();
    const { history } = props;

    return (
        <HotelEditComponent hotel={hotel} />
    )
}

export const HotelEditContainer = withRouter<Props>(HotelEditContainerInner);