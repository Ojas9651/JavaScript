const form = document.querySelector('form');
const task = document.getElementById('task');
const allTasks = document.getElementById('allTasks');
console.log(allTasks);

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    let taskDiv = createTaskDiv(task);
    console.log(taskDiv);
    allTasks.append(taskDiv);
    form.reset();
})

function createTaskDiv(task){
    //task div
    let taskDiv = document.createElement('div');
    taskDiv.id = task.value;
    taskDiv.textContent = task.value;

    //done button
    let doneButton = document.createElement('button');
    doneButton.textContent = "Done";
    doneButton.id = `${task.value}-done`
    taskDiv.append(doneButton);

    //delete button
    let deleteButton = document.createElement('button');
    deleteButton.textContent = "Delete Task";
    deleteButton.id = `${task.value}-delete`
    taskDiv.append(deleteButton);

    return taskDiv;
}

allTasks.addEventListener('click', (e)=>{
    if(e.target.textContent == "Done"){
        e.target.style.backgroundColor = "green";
        const parent = e.target.parentElement;
        parent.style.textDecoration = "line-through";
    }
    if(e.target.textContent == "Delete Task"){
        const parent = e.target.parentElement;
        parent.remove();
    }
})



