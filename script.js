//assigning variable to
const input_box=document.getElementById('input_box');
const ul_task_list=document.getElementById('ul_task_list');


//Function for the add task button
function addTask(){
   if(input_box.value ===""){
    alert("Should add some task ")
   }else{
    let li = document.createElement("li");
    li.innerHTML=input_box.value;
    ul_task_list.appendChild(li);
    li.className="list-group-item";
    
    let span = document.createElement("span");
    span.innerHTML="\u2716";
    li.appendChild(span);
    span.className="cross-symbol";
   }
   input_box.value="";
}

ul_task_list.addEventListener('click',function(e){
    if( e.target.tagName ==='LI'){
        e.target.classList.toggle('checked');
    }else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        }
    
})




