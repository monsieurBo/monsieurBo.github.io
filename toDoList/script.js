form = document.querySelector('#createList');

// submit input on Enter
var input = document.getElementById("task");
input.addEventListener("keyup", function(event) {
event.preventDefault();
if (event.keyCode === 13) {
    document.getElementById("task").click();
}
});

//Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.remove();
  }
}

function addTask() {

	var taskList = document.querySelector('ul');
	// creates a new item
	var listItem = document.createElement('li');
	// add innerHTML from input
	var toDo = document.querySelector('#task').value;
	listItem.contenteditable = true;
	listItem.innerHTML = toDo;

	
	// checks for empty input
	if (toDo === "") {
		alert("You must write something!");
	}
	else {
		// append item to list
		taskList.appendChild(listItem);
	}

		// clear form
	form.reset();

	var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  listItem.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.remove();
    }
 }
  
}