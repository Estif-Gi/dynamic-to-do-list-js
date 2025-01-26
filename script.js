const addButton = document.getElementById('add-task-btn');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');
function addTask() {
    let taskText = taskInput.value.trim();
    if(taskText == "")
        {
            alert('please inter a task');
        }
        else
        {
            const li = document.createElement('li');
            li.textContent = taskText;
            const button = document.createElement('button');
            button.textContent = "Remove";
            button.classList.add('remove-btn');
            button.addEventListener('click' , ()=>{
                li.style.display = 'none'
            });
            li.appendChild(button);
            taskList.appendChild(li); 
            taskInput.value = '';
        }
    } 
    addButton.addEventListener('click', () => {
        addTask()
    });
    taskInput.addEventListener('keypress',()=>{
        if(event.key === 'Enter'){
            addTask();
        };
    });
    document.addEventListener('DOMContentLoaded', addTask);


// addTask()