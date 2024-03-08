document.addEventListener("DOMContentLoaded",function(){
    var todoData=JSON.parse(localStorage.getItem("todoData"))||[];
    const todoInput=document.getElementById("todoText");
    const todobtn=document.getElementById("add");
    const todos=document.getElementById("ToDos");
    todobtn.addEventListener("click",()=>{
        const newIp=todoInput.value;
        if(newIp!==""){
            const newTodoItem=document.createElement("li");
            newTodoItem.innerText=newIp;
            const deleteBtn=document.createElement("button");
            deleteBtn.innerText="X";
            todoData.push(newIp);
            deleteBtn.classList.add("dlt");
            deleteBtn.addEventListener("click",function(){
                newTodoItem.remove();
                removeFromStore(newIp);
            })
            newTodoItem.appendChild(deleteBtn);
            todos.appendChild(newTodoItem);
            todoInput.value="";
            localStorage.setItem("todoData",JSON.stringify(todoData));
            console.log(todoData);
        }
    });

    function populateTodoList(data){
        todos.innerHTML="";
        data.map((item) => {
            const newTodoItem=document.createElement("li");
            newTodoItem.innerText=item;
            const deleteBtn=document.createElement("button");
            deleteBtn.innerText="X";
            deleteBtn.classList.add("dlt");
            deleteBtn.addEventListener("click",function(){
                newTodoItem.remove();
                removeFromStore(item);
            })
            newTodoItem.appendChild(deleteBtn);
            todos.appendChild(newTodoItem);

        });
    }
    populateTodoList(todoData); 
    function removeFromStore(item){
        const delIndex=todoData.indexOf(item);
        if(delIndex!==-1){
            todoData.splice(delIndex,1);
            localStorage.setItem("todoData",JSON.stringify(todoData));

        }
    }
})