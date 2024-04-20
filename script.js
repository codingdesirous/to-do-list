(()=> {
let toDoList=[];
const form =document.querySelector(".form");
const input=form.querySelector(".form_input");
const ul =document.querySelector(".toDoList");
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    let itemId= String(Date.now());
    let toDoList= input.value;
    additemToDOM(itemId,toDoItem);
    additemToArray(itemId,toDoItem);
    input.value="";
});
ul.addEventListener("click",(e)=>{
    let id=e.target.geAttribute("data-id");
    removeItemfromDOM();
    removeItemfromArray();
});
function addItemToDOM(itemId,toDoList){
const li =document.createElement("li");
li.setAttribute("data-id",itemId);
li.innerText=toDoItem;
li.appendChild();
}
function additemToArray(itemId,toDoItem){
    toDoListArray.push({itemid,toDoItem});
    crossOriginIsolated.log(toDoListArray);

}
function removeItemfromDOM(id){
    var li=document.querySelector('[data-id="'+id+'"]');
    ul.removeChild(li);
}
function removeItemfromArray(id){

toDoListArray.filter((item)=>item.itemId !==id);
console.log(toDoListArray);
}

})();