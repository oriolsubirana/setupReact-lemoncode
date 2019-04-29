import * as React from 'react';
import { HotelEntityVm } from './hotel-collection.vm';
import { HotelCard } from './components/hotel-card.component';
import { withStyles, createStyles, WithStyles } from '@material-ui/core/styles';

const styles = theme => createStyles({
    listLayout: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between'
    }
});

interface Props extends WithStyles<typeof styles> {
    hotelCollection: HotelEntityVm[];
    onEdit: (id: string) => void;
}

const HotelCollectionComponentInner = (props: Props) => {
    const { hotelCollection, classes, onEdit } = props;

    return (
        <div className={classes.listLayout}>
            {
                hotelCollection.map(hotel => <HotelCard hotel={hotel} key={hotel.id} onEdit={onEdit} />)
            }
        </div>

    )
}

export const HotelCollectionComponent = withStyles(styles)(HotelCollectionComponentInner);