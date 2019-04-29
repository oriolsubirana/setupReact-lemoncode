import * as React from "react";
import Card from '@material-ui/core/Card';
import { HotelEntityVm } from "../hotel-collection.vm";
import CardHeader from "@material-ui/core/CardHeader/CardHeader";
import Avatar from "@material-ui/core/Avatar/Avatar";
import IconButton from "@material-ui/core/IconButton/IconButton";
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { CardContent, CardMedia, Typography, CardActions } from "@material-ui/core";
import { withStyles, createStyles, WithStyles } from '@material-ui/core/styles';
import { Theme } from "@material-ui/core/styles";
import EditIcon from "@material-ui/icons/edit";
import DeleteIcon from "@material-ui/icons/delete";

const styles = (theme: Theme) => createStyles({
    card: {
        marginTop: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: '31.25rem'
    }

})

interface Props extends WithStyles<typeof styles> {
    hotel: HotelEntityVm;
    onEdit: (id: string) => void;
}


const HotelCardInner = (props: Props) => {
    const { hotel, classes, onEdit } = props;

    return (
        <Card className={classes.card}>
            <CardHeader
                avatar={
                    <Avatar aria-label="rating">
                        {hotel.rating}
                    </Avatar>
                }
                action={
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                }
                title={hotel.name}
                subheader={hotel.address}
            />
            <CardContent>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                }}>
                    <CardMedia
                        image={hotel.picture}
                        title={hotel.name}
                        style={{ height: 0, paddingTop: '56.25%' }}
                    />
                    <Typography variant="subtitle1" gutterBottom>
                        {hotel.description}
                    </Typography>
                </div>
            </CardContent>
            <CardActions disableActionSpacing>
                <IconButton aria-label="Add to favorites" onClick={() => onEdit(hotel.id)}>
                    <EditIcon />
                </IconButton>
                <IconButton aria-label="Share">
                    <DeleteIcon />
                </IconButton>
            </CardActions>
        </Card>
    )
}

export const HotelCard = withStyles(styles)(HotelCardInner);