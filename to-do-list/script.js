var toDoBox=document.querySelector("#to-do-box")
var toDoInput=document.querySelector("#to-do-input")

toDoInput.addEventListener("keyup",function(dets){
    if(dets.key==`Enter`){
        addToDo(this.value)
        this.value=''
    }
})
function addToDo(data){
 var newList=document.createElement("li")
 newList.innerHTML=`
   ${data}
 <i class="ri-close-line"></i> `;
 toDoBox.appendChild(newList)


 newList.querySelector("i").addEventListener("click",function(){
    newList.remove()
 })
 newList.addEventListener("click",function(){
    this.classList.toggle("done");
 })

}


