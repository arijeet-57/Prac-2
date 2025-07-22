const { no } = require("zod/v4/locales");

function createNote () {
    const note = document.getElementById("note").value;
    console.log(note);
    const notes = document.createElement("div");
    notes.textContent = note;

    document.getElementById("noteParent").appendChild(notes);

    document.getElementById("note").value = ""; // clears the input box after each submit

}