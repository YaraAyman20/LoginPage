import React from "react"
import Button from '@material-ui/core/Button';


const CustomButton = (props) => (

<Button
fullWidth
variant="contained"
color="secondary"
onClick={props.onClick}
value = {props.val}
disable={props.loading}
>{props.btn}
</Button>
);

export default CustomButton;