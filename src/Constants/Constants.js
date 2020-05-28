import { uuid } from 'uuidv4';



export const itemsFromBackend = [
    { id: uuid(), content: "First task" },
    { id: uuid(), content: "Second task" },
  
    
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

  
  localStorage.setItem("columnsFromBackend",JSON.stringify(columnsFromBackend));