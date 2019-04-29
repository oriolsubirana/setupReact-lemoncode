import * as React from 'react';
import { withStyles, createStyles, WithStyles } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core';
import { TextFieldForm } from 'common/components';
import { HotelEntityVm } from 'pods/hotel-collection/hotel-collection.vm';
import { LoginFormErrors } from 'pods/login/login.vm';

const styles = theme => createStyles({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
    dense: {
        marginTop: 19,
    },
    menu: {
        width: 200,
    },
});

interface Props extends WithStyles<typeof styles> {
    hotel: HotelEntityVm;
}


const HotelEditComponentInner = (props: Props) => {
    const { hotel, classes } = props;

    return (
        <form className={classes.container} noValidate autoComplete="off">
            <TextFieldForm
                name="name"
                label="Name"
                margin="normal"
                value="caca"
                onChange={() => console.log("")}
            />
        </form>

    )
}

export const HotelEditComponent = withStyles(styles)(HotelEditComponentInner);