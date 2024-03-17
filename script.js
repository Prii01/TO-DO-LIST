function addTask(){
    var taskInput = document.getElementById('taskInput');
    var taskList = document.getElementById("taskList");
    var taskText = taskInput.ariaValueMax.trim()
    if(taskText === ""){
        alert("Please enter a task");
        return;
    }

    var li = document.createElement("li");
    li.textContent = taskText;

    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("change", function(){
        if(this.checked){
            li.classList.add("task-complete");
        }else{
            li.classList.remove("task-complete");
        }
    });

    li.prepend(checkbox);
    taskList.appendChild(li);
    taskInput.value="";
}