import React from "react"
import { TextField } from "@material-ui/core";


const CustomTextField = (props) => (
    <TextField
    variant="outlined"
    margin="normal"
    required
    fullWidth
    name={props.txt}
    label={props.txt}
    type={props.txt}
    id={props.txt}
    value={props.value}
    onChange={props.onChange}
    autoFocus
  /> 
);

export default CustomTextField;