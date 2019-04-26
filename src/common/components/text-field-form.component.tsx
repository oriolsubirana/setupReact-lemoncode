import * as React from 'react';
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography/Typography";

//sinonimos
type OnChange = (fieldId : string, value : string) => void;

interface Props {
    name : string;
    label : string;
    onChange : (fieldId : string, value : string) => void;
    value : string;
    error? : string;
    type? : string;
}

//funcion curry
const onTextFieldChange = (fieldId : string, onChange : OnChange) => (e : React.ChangeEvent<HTMLInputElement>) => {
    onChange(fieldId, e.target.value);
}

export const TextFieldForm : React.StatelessComponent<Props> = (props) => {
    const {name, label, onChange, value, error, type} = props;

    return (
        <>
            <TextField
                label={label}
                margin="normal"
                value={value}
                type={type}
                onChange={onTextFieldChange(name, onChange)}
            />
            <Typography variant="caption" color="error" gutterBottom>
                {props.error}
            </Typography>
        </>
    )
}

TextFieldForm.defaultProps = {
    type : "text",

}