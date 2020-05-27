import React, {Component} from 'react';
import Delete from "../../Assets/delete.png"

import "./Card.css";

export default class CardDelete extends Component {
    render() {

        const id = this.props.id;
        const content = this.props.content;
        return (

            <div className={"card"}>
                <div>{content}</div>
                <img src={Delete} className={"img"}/>

            </div>

        )
    }
}
