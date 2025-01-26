
document.addEventListener('DOMContentLoaded', function (){
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    function loadTasks(){
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.forEach(taskText=>{
            const li = document.createElement('li');
            li.textContent = taskText;
            const button = document.createElement('button');
            button.textContent = "Remove";
            button.classList.add('remove-btn');
            button.addEventListener('click' , ()=>{
                 removeTask(li,taskText);
            });
            li.appendChild(button);
            taskList.appendChild(li); 
            });
    };





    function addTask() {
        let taskText = taskInput.value.trim();
        if(taskText === "")
            {
                alert('please enter a task');
            }
            else
            {
                const li = document.createElement('li');
                li.textContent = taskText;
                const button = document.createElement('button');
                button.textContent = "Remove";
                button.classList.add('remove-btn');
                button.addEventListener('click' , ()=>{
                    removeTask(li, taskText);
                });
                li.appendChild(button);
                taskList.appendChild(li); 
                const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
                tasks.push(taskText);
                localStorage.setItem('tasks', JSON.stringify(tasks));
                taskInput.value = '';
            }
        } 
        function removeTask(li,taskText){
            li.style.display = 'none';
            const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
            const updatedTasks = tasks.filter(task =>task !==taskText);
            localStorage.setItem('tasks',JSON.stringify(updatedTasks));
        }
        loadTasks()

        addButton.addEventListener('click', () => {
            addTask()
        });
        taskInput.addEventListener('keypress',()=>{
            if(event.key === 'Enter'){
                addTask();
            };
        });
    
});


// addTask()