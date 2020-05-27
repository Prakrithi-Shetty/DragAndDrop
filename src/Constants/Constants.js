import { uuid } from 'uuidv4';

export const itemsFromBackend = [
    { id: uuid(), content: "First task" },
    { id: uuid(), content: "Second task" },
    { id: uuid(), content: "Third task" },
    { id: uuid(), content: "Fourth task" },
    { id: uuid(), content: "Fifth task" }
  ];


  export const columnsFromBackend = {
    ['todo']: {
      name: "To do",
      items: itemsFromBackend
    },
    ['doing']: {
      name: "Doing",
      items: []
    },
    ['done']: {
      name: "Done",
      items: []
    },
    ['rejected']: {
      name: "Rejected",
      items: []
    }
  };