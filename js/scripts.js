/*
    *Make references to the HTML elements that we want to interact through JS
    *Add in the ability to add a new list item
    *Add in the ability to remove a list item
    *Add in the ability to mark a list item as done
*/
var submitButton = document.getElementById("submit");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul"); //querySelector gets the first instance of a particular element type. Since we only have one ul, this will create a reference to that ul.
function createListElement() {
    //Create a new li element
    var li = document.createElement("li");
    //Add comment to it
    li.innerHTML = input.value;
    //Add it to our ul
    ul.appendChild(li);
    //Clear input after entered
    input.value = "";

    function markDone() {
        console.log("markDone called");
    }

    li.addEventListener("click", markDone);

    //List item is complete
    function markDone() {
        li.classList.toggle("done")
    }

}

function createListItemSubmitButton() {
    if (input.value.length > 0) {
     createListElement();
    }
}

//This is going tho be used to create a list element when the enter key is pressed
function createListItemEneterKey(event) {
    console.log(event.keyCode);

    //Create a new list item if there is text in the input field, and the eneter key is pressed
    if (input.value.length > 0 && event.keyCode === 13) {
        createListElement();
    }
}

//Maske it so that when the submit button is clicked, the createListItemSubmitButton function is called
submitButton.addEventListener("click", createListItemSubmitButton);

//This will use the enter key to submit
input.addEventListener("keypress", createListItemEneterKey);