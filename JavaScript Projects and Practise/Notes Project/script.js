showNotes();

let addBtn = document.getElementById('add-btn');
let addTitle = document.getElementById('note-title');
let addTxt = document.getElementById('note-text');

addBtn.addEventListener("click", (e) =>{
  if(addTitle.value==""  || addTxt.value == ""){
    return alert("Please add title and note text.")
  }

  let notes = localStorage.getItem("notes");
  if (notes== null){
    notesObj = [];
  }
  else{
    notesObj = JSON.parse(notes);
  }

  let myObj = {
    title: addTitle.value,
    text: addTxt.value
  }

  notesObj.push(myObj)

  localStorage.setItem("notes", JSON.stringify(notesObj));

  addTitle.value= "";
  addTxt.value = "";

  showNotes();
})





function showNotes(){
  let notes = localStorage.getItem("notes");
  if (notes== null){
    notesObj = [];
  }
  else{
    notesObj = JSON.parse(notes);
  }

  let html = "";
  notesObj.forEach(function(element, index){
    html+=`
    <div id="note">
                    <p class="note-counter">Note ${index+1}</p>
                    <h3 class="note-title">${element.title}</h3>
                    <p class="note-text">${element.text}</p>
                    <button id="${index}" onclick="deleteNote(this.id)" class="note-btn">Delete Note</button>
                    <button id="${index}" onclick="editNote(this.id)" class="note-btn edit-btn">Edit your note</button>
                </div>`;
  });

  let noteElm = document.getElementById("notes");
  if (notesObj.length != 0){
    noteElm.innerHTML = html;
  }
  else{
    noteElm.innerHTML = "Notes Not Added, Use Add Note Button above to add a new note"
  }
}








function deleteNote(index){
  let confirmDel = confirm("You are about to delete this note!!!");

  if (confirmDel == true){
    let notes = localStorage.getItem("notes");
    if (notes== null){
      notesObj = [];
    }
    else{
      notesObj = JSON.parse(notes);
    }

    notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();
  }
}






function editNote(index){
  let notes = localStorage.getItem(" notes");
  if (addTitle.value !==""  || addTxt.value !==""){
    return alert("Please clear the form before editing the note");
  }
  if (notes== null){
    notesObj = [];
  }
  else{
    notesObj = JSON.parse(notes);
  }

  notesObj.findIndex((element, index) => {
    addTitle.value = element.title;
    addTxt.value = element.text;
  })

  notesObj.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  showNotes();
}











