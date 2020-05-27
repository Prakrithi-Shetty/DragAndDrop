import React, {Component} from 'react';
import add from "../../Assets/add.jpg";
import {TextField} from '@material-ui/core';
import {makeStyles} from "@material-ui/core/styles";

import "./Card.css";

const useStyles = makeStyles(theme => ({
    helperTextError: {
        color: "darkRed",
        fontSize: 14,
        fontWeight: "800"
    }
}));

function CardAdd(props) {

    const classes = useStyles();
    // const id = this.props.id; const content = this.props.content;
    const onAdd = props.onAdd;
    return (

        <div className={"add"}>
            <TextField
                label="Add Card to To do"
                type="search"
                variant="outlined"
                className={classes.box}
                FormHelperTextProps={{
                classes: {
                    root: classes.helperTextError
                }
            }}helperText="Please Click type the details of the card and Click + button to add the cards"/>

            <img src={add} className={"addimg"} onClick={() => onAdd('Ashwin')}/>

        </div>

    )

}

export default CardAdd;
