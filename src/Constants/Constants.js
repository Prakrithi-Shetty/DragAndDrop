import {uuid} from 'uuidv4';

export const itemsFromBackend = [
    {
        id: uuid(),
        content: "First task"
    }
];

export const columnsFromBackend = {
    ['todo']: {
        name: "todo",
        items: itemsFromBackend
    },
    ['doing']: {
        name: "doing",
        items: []
    },
    ['done']: {
        name: "done",
        items: []
    },
    ['rejected']: {
        name: "rejected",
        items: []
    }
};

if (localStorage.getItem("columnsFromBackend") === null) {
    debugger;
    localStorage.setItem("columnsFromBackend", JSON.stringify(columnsFromBackend));
}