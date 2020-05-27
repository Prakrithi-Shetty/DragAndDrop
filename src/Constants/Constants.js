import { uuid } from 'uuidv4';

export const itemsFromBackend = [
    { id: uuid(), content: "First task" },
    { id: uuid(), content: "Second task" },
    { id: uuid(), content: "Third task" },
    { id: uuid(), content: "Fourth task" },
    { id: uuid(), content: "Fifth task" }
  ];


  export const columnsFromBackend = {
    [uuid()]: {
      name: "To do",
      items: itemsFromBackend
    },
    [uuid()]: {
      name: "Doing",
      items: []
    },
    [uuid()]: {
      name: "Done",
      items: []
    },
    [uuid()]: {
      name: "Rejected",
      items: []
    }
  };