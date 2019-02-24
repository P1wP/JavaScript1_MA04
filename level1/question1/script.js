// CREATE BUTTON ELEMENT
var button = document.createElement("BUTTON");
    button.innerHTML = "CLICK ME!";
    button.setAttribute('ID', "myBtn");

// APPEND BUTTON TO HTML BODY
document.body.appendChild(button);

// ADD EVENTLISTENER FOR BTN CLICK
document.getElementById('myBtn').addEventListener('click', function () {
    alert("YOU CLICKED THE BUTTON");    // ALERT WHEN BTN CLICKED
});