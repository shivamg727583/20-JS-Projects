var addBtn =document.querySelector(".addBtn");
var removeBtn=document.querySelector("#delete");
var main =document.querySelector(".main");

function saveNotes(){
    var notes=document.querySelectorAll(".note textarea");
    console.log(notes)
    var data=[];
    notes.forEach(function(note){
        data.push(note.value)
    })
    if(data.length===0){
        localStorage.removeItem("notes")
    }
    else{
        localStorage.setItem("notes",JSON.stringify(data))

    }
}

addBtn.addEventListener("click",function(){
    createNote();
})
function createNote(text=""){
    var note =document.createElement("div");
    note.classList.add("note")
    note.innerHTML= `
    <div class="toolbar">
        <i class="ri-save-2-fill" id="save"></i>
        <i class="ri-delete-bin-6-line" id="delete"></i>
    </div>
    <div class="text">
<textarea>${text}</textarea>   
 </div>
`
note.querySelector("#delete").addEventListener("click",function(){
    note.remove()
    saveNotes()
})

note.querySelector("#save").addEventListener("click",function(){
    saveNotes();
})
note.querySelector("textarea").addEventListener("focusout",function(){
    saveNotes();
})
main.appendChild(note)
saveNotes();
} 
function removeNote(){
    main.removeChild(notes)
}

(
    function (){
        var lbnotes =JSON.parse(localStorage.getItem("notes"));
       if(lbnotes===null){
createNote()
       }
        // console.log(lbnotes)
        else{
            lbnotes.forEach(function(lbNote){
                createNote(lbNote)
            })
        }
    }
)()