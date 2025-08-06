const taskInput= document.getElementById("taskInput");
const addTask= document.querySelector("button");
const taskList= document.querySelector(".task-list");

addTask.addEventListener('click',()=>{
    const taskText= taskInput.value.trim();

    if(taskText === ''){
        alert("Please enter some text");
    }

    const li= document.createElement('li');

    const checkboxContainer= document.createElement('label');
    checkboxContainer.className= "checkbox-container";

    const checkbox = document.createElement('input');
    checkbox.type= "checkbox";

    const checkmark= document.createElement('span');
    checkmark.className= "checkmark";

    const span= document.createElement('span');
    span.className= "task-text";
    span.textContent= taskText;

    const deleteBtn= document.createElement('span');
    deleteBtn.className= "delete-btn";
    deleteBtn.innerHTML= "&times";

    checkboxContainer.appendChild(checkbox);
    checkboxContainer.appendChild(checkmark);

    li.appendChild(checkboxContainer);
    li.appendChild(span);
    li.appendChild(deleteBtn);


    taskList.appendChild(li);
    taskInput.value= "";

    deleteBtn.addEventListener('click',()=>{
        li.remove();
    });
});