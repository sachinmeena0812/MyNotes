console.log("Welcome to notes app. This is app.js");
showNotes();
// If user adds a note, add it to the localStorage
let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function(e) {
    let addTxt = document.getElementById("addTxt");
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesArray = [];
    } else {
        notesArray = JSON.parse(notes);
    }
    notesArray.push(addTxt.value);
    localStorage.setItem("notes", JSON.stringify(notesArray));
    addTxt.value = "";
    //   console.log(notesArray);
    showNotes();
});

// Function to show elements using the  localStorage
let html = "";

function showNotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesArray = [];
    } else {
        notesArray = JSON.parse(notes);
    }
    let html = "";

    notesArray.forEach(function(element, index) {
        html = html + `
            <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">Note ${index + 1}</h5>
                        <p class="card-text"> ${element}</p>
                        <button id="${index}"onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
                    </div>
                </div>`;
    });
    let AddedNotes = document.getElementById("notes");
    if (notesArray.length != 0) {
        AddedNotes.innerHTML = html;
    } else {
        AddedNotes.innerHTML = `Nothing to show! Use "Add a Note" section above to add notes.`;
    }
}

// DeleteNote
function deleteNote(index) {


    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesArray = [];
    } else {
        notesArray = JSON.parse(notes);
    }

    notesArray.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesArray));
    showNotes();
}