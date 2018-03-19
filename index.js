//initialize nd binding views to variables
var deleteButtons = document.getElementsByClassName("delete");
var editButtons = document.getElementsByClassName("edit");
var list = document.getElementById("list");
var actionList = document.getElementById("actionList");
//gets submit button
var submit = document.getElementById("subButton");
var formTitle = document.getElementById('formTitle');
var formBody = document.getElementById('formBody');
var notes =[];
//creating the note data object.

// var note =  {
// "title": String,
// "body":String,
// "id": Number
// };

//constructor for note
function Note(title, body) {
  this.title = title;
  this.body = body;
}

// <li>
// <h3>this.title</h3>
// <p>this.body</p>
//  </li>

// p  =  new Person('first','body');

//basic functions
function formatNote(note){
 note = '<li>'+'<h3>'+ note.title + '</h3>' + '<p>' + note.body + '</p>' + '</li>';
}

//onclicks

submit.onclick = () =>{
    var title = formTitle.value;
    var body = formBody.value;
    var note =  new Note (title, body);
    formatNote(note);
    notes.push(note);
    console.log(notes);
};


