import React, {Component} from 'react';
import Delete from "../../Assets/delete.png"

import "./Card.css";

export default class CardDelete extends Component {
    render() {

        const id = this.props.id;
        const content = this.props.content;
        const onDelete=this.props.onDelete;
        return (

            <div className={"card"}>
                <div>{content}</div>
                <img src={Delete} className={"img"}  onClick={e=>onDelete(id) }/>

            </div>

        )
    }
}
