import React, {useState} from 'react';
import add from "../../Assets/add.jpg";
import {TextField} from '@material-ui/core';
import {makeStyles} from "@material-ui/core/styles";
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import "./Card.css";

const useStyles = makeStyles(theme => ({
    helperTextError: {
        color: "brown",
        fontSize: 20,
        fontWeight: "1000",
        fontFamily: ["Josefin Sans", "sans-serif"].join(",")
    },
    icon: {
        color: "darkBlue ",
        width: 50,
        fontSize: 60,
        paddingLeft: 20,
        "&:hover": {
            color: "Orange"
        }
    },

    add: {
        marginTop: 30,
        display: "flex",
        justifyContent: "center"
    }

}));

function CardAdd(props) {
    const [addValue,
        setaddValue] = useState();
    const classes = useStyles();
    const onAdd = props.onAdd;
    let clearText = () => {
        setaddValue("");
    }

    let perFormAdd = (perFormAdd) => {
        onAdd(addValue);
        clearText();
    }

    return (
        <div className={classes.add}>
            <TextField
                label="Add to To-do"
                type="search"
                variant="outlined"
                value={addValue}
                onChange={(e) => setaddValue(e.target.value)}
                className={classes.box}
                FormHelperTextProps={{
                classes: {
                    root: classes.helperTextError
                }
            }}helperText=" Type here and click '+' icon to add the card "/>
            <AddCircleOutlineOutlinedIcon
                className={classes.icon}
                onClick={() => perFormAdd(addValue)}/>
        </div>
    )
}

export default CardAdd;
