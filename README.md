This projected was developed using React.js

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Details of the project

## 1. Create a task board dashboard

Design a dashboard with basic functionality similar to [trello.com](https://trello.com).

The dashboard design should have the following features

* 4 columns (TODO, DOING, DONE and REJECTED) to represent the status of each task

   
* A button to create a new task that pops up onclick. The created task should be moved to the first column by default.


  * The tasks created can be moved (dragged and dropped) to any of the columns to change the status
  ## 2. Make the status changes persistent

* When a new task is created or the task changes its status by moving it to a different column, store the task and status in the [localstorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) or any framework persistence functionality so that changes are persistent. 

* You can also provide a delete option for the tasks if it needs to be removed from the localstorage
