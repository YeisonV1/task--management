// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks")) || [];
let nextId = JSON.parse(localStorage.getItem("nextId"));

// Todo: create a function to generate a unique task id
function generateTaskId() {
    
    let timeStamp = Date.now().toString();
    let randLetter = Math.random().toString(36);
    let uniqueGenId = timeStamp + randLetter.substring(1,6);
    
    return uniqueGenId;
}

// Todo: create a function to create a task card
function createTaskCard(task) {
    const taskCard = $('<div>');
    taskCard.addClass('task-card draggable');

    const titleEl = $('<h3>');
    titleEl.textContent = task.name;

    const descriptionEl = $('<p>');
    descriptionEl.textContent = task.description;

    const dueDateEl = $('<p>');
    dueDateEl.textContent = task.dueDate;

    taskCard.append(titleEl, descriptionEl, dueDateEl);

    return taskCard;
}

// Todo: create a function to render the task list and make cards draggable
function renderTaskList() {
    const toDoCardsEl = $("#todo-cards");
    const progressCardsEl = $("#in-progress-cards");
    const doneCardsEl = $("#done-cards");

    for(let i = 0; i < taskList.length; i++){
        if(taskList[i].state === "to-do"){
            toDoCardsEl.append(createTaskCard(taskList[i]))
        }else if(taskList[i].state === "in-progress"){
            progressCardsEl.append(createTaskCard(taskList[i]))
        }else{
            doneCardsEl.append(createTaskCard(taskList[i]))
        };
    }
    // todo drag
    $('.draggable').draggable();
}

// Todo: create a function to handle adding a new task
function handleAddTask(event){
    
}

// Todo: create a function to handle deleting a task
function handleDeleteTask(event){

}

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {
    $( this )
          .addClass( "ui-state-highlight" )
          .find( "p" )
            .html( "Dropped!" );
}

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {

});
