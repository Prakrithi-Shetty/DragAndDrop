import React, {Component} from 'react';
import Delete from "../../Assets/delete.png"
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import "./Card.css";

export default class CardDelete extends Component {
    render() {

        const id = this.props.id;
        const content = this.props.content;
        const onDelete=this.props.onDelete;
        const columnName=this.props.columnName;
        return (

            <div className={"card"}>
                <div>{content}</div>
                {/* <img src={Delete} className={"img"}  onClick={e=>onDelete(id) }/> */}
                <DeleteOutlineOutlinedIcon className={"deleteicon"}  onClick={e=>onDelete(id,columnName) }/>
            </div>

        )
    }
}
