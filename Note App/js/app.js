console.log('Welcome to notes app. This is a app.js');
showNotes();

// if user adds a notes .add to a local storage
let addbtn = document.getElementById('addBtn');
addbtn.addEventListener("click", function (e) {
    let addText = document.getElementById('addTxt')
    let notes = localStorage.getItem("notes")
    if (notes == null) {
        notesobj = [];
    }

    else {
        notesobj = JSON.parse(notes)
    }
    notesobj.push(addTxt.value);
    localStorage.setItem("notes", JSON.stringify(notesobj))
    addTxt.value = "";
    console.log(notesobj);
    showNotes();
})
//read local storage in a function
function showNotes() {
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesobj = [];
    }

    else {
        notesobj = JSON.parse(notes)
    }
    let html = "";
    notesobj.forEach(function (element, index) {
        html += ` <div class=" noteCard my-2 mx-2 card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">Note${index + 1}</h5>
            <p class="card-text">${element}</p>
            <button  onclick = "deleteNotes(this.id)" id="${index}"  class="btn btn-primary">Delete Notes</button>
        </div>
    </div>`

    });
    let notesElm = document.getElementById('notes');
    if (notesobj.length != 0) {
        notesElm.innerHTML = html;
    } else {
        notesElm.innerHTML = `Nothing is show! Use "Add a Notes"Section above to add notes.`
    }
}
//function to delete a notes
function deleteNotes(index) {
    console.log("I am deleting", index);

    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesobj = [];
    }

    else {
        notesobj = JSON.parse(notes)
    }
    notesobj.splice(index, 1)
    localStorage.setItem("notes", JSON.stringify(notesobj))
    showNotes();
}
let search = document.getElementById('searchTxt');
search.addEventListener("input",function(){
    let inputval = search.value
    let noteCart = document.getElementsByClassName('noteCard');
    Array.from(noteCart).forEach(function(element){
        let cardtxt =element.getElementsByTagName("p")[0];
        if (cardtxt.includes(inputval)){
            element.style.display = "block"
        }else{
            element.style.display = "none"

        }
    })
    console.log('tnput event fire',inputval)
})