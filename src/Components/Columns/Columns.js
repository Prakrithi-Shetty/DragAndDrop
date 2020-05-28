import React, {useState} from "react";
import {DragDropContext, Draggable, Droppable} from "react-beautiful-dnd";
import CardDelete from "../Cards/CardDelete";
import {itemsFromBackend} from "../../Constants/Constants";
import CardAdd from "../Cards/CardAdd";
import {uuid} from 'uuidv4';
import tech from "../../Assets/tech.jpg";

const onDragEnd = (result, columns, setColumns) => {
    if (!result.destination) 
        return;
    const {source, destination} = result;

    if (source.droppableId !== destination.droppableId) {
        const sourceColumn = columns[source.droppableId];
        const destColumn = columns[destination.droppableId];
        const sourceItems = [...sourceColumn.items];
        const destItems = [...destColumn.items];
        const [removed] = sourceItems.splice(source.index, 1);
        destItems.splice(destination.index, 0, removed);
        setColumns({
            ...columns,
            [source.droppableId]: {
                ...sourceColumn,
                items: sourceItems
            },
            [destination.droppableId]: {
                ...destColumn,
                items: destItems
            }
        });
    } else {
        const column = columns[source.droppableId];
        const copiedItems = [...column.items];
        const [removed] = copiedItems.splice(source.index, 1);
        copiedItems.splice(destination.index, 0, removed);
        setColumns({
            ...columns,
            [source.droppableId]: {
                ...column,
                items: copiedItems
            }
        });
    }
};

function Dnd(props) {

    let columnsFromBackend = JSON.parse(localStorage.getItem("columnsFromBackend"));
    const [columns,
        setColumns] = useState(columnsFromBackend);
    const deleteCard = (id, columnName) => {
        let newCol = columns;
        newCol[columnName].items = newCol
        [columnName]
            .items
            .filter(function (item) {
                return item.id != id
            });

        setColumns({
            ...newCol

        });

        localStorage.setItem("columnsFromBackend", JSON.stringify(newCol));

    }

    const onAdd = (content) => {
        const newCol = columns;
        newCol
            .todo
            .items
            .push({content: content, id: uuid()});
        setColumns({
            ...newCol
        });
        localStorage.setItem("columnsFromBackend", JSON.stringify(newCol));

    }
    return (
        <div
            style={{
            backgroundColor: "white",
            backgroundImage: 'url(' + tech + ')'
        }}>
            <div
                style={{
                display: "flex",
                justifyContent: "center",
                height: "100%"
            }}>
                <DragDropContext onDragEnd={result => onDragEnd(result, columns, setColumns)}>
                    {Object
                        .entries(columns)
                        .map(([
                            columnId, column
                        ], index) => {
                            return (
                                <div
                                    style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center"
                                }}
                                    key={columnId}>
                                    <h2
                                        style={{
                                        textTransform: "capitalize",
                                        color: "black"
                                    }}>{column.name}</h2>
                                    <div
                                        style={{
                                        margin: 8
                                    }}>
                                        <Droppable droppableId={columnId} key={columnId}>
                                            {(provided, snapshot) => {
                                                return (
                                                    <div
                                                        {...provided.droppableProps}
                                                        ref={provided.innerRef}
                                                        style={{
                                                        background: snapshot.isDraggingOver
                                                            ? "lightgrey"
                                                            : "lightblue",
                                                        padding: 4,
                                                        width: 250,
                                                        minHeight: 400
                                                    }}>
                                                        {column
                                                            .items
                                                            .map((item, index) => {
                                                                return (
                                                                    <Draggable key={item.id} draggableId={item.id} index={index}>
                                                                        {(provided, snapshot) => {
                                                                            return (
                                                                                <div
                                                                                    ref={provided.innerRef}
                                                                                    {...provided.draggableProps}
                                                                                    {...provided.dragHandleProps}
                                                                                    style={{
                                                                                    userSelect: "none",
                                                                                    padding: 16,
                                                                                    margin: "0 0 8px 0",
                                                                                    minHeight: "20px",
                                                                                    backgroundColor: snapshot.isDragging
                                                                                        ? "#263B4A"
                                                                                        : "#456C86",
                                                                                    color: "white",
                                                                                    ...provided.draggableProps.style
                                                                                }}>
                                                                                    <CardDelete
                                                                                        columnName={column.name}
                                                                                        id={item.id}
                                                                                        content={item.content}
                                                                                        onDelete={deleteCard}/>
                                                                                </div>
                                                                            );
                                                                        }}
                                                                    </Draggable>
                                                                );
                                                            })}
                                                        {provided.placeholder}
                                                    </div>
                                                );
                                            }}
                                        </Droppable>
                                    </div>
                                </div>
                            );
                        })}

                </DragDropContext>

            </div>
            <CardAdd onAdd={onAdd}/>
        </div>
    );
}

export default Dnd;
