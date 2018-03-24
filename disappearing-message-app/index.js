// 1. Get the <form> element
form = document.querySelector('#create-form');
// console.log(form)

// 2. Event Listen when form has been submitted
// // 2.1 Prevent the default behavior of form submission
form.onsubmit = function(event) {
	event.preventDefault();


	// // 2.2 Get the value of <input> elements
	
	img = document.querySelector('#input-img').value;
	msg = document.querySelector('#input-msg').value;

	// // 2.3 Concatenate the URL string
	homeURL = "file:///C:/Users/naive/OneDrive/Desktop/disappearing-message-app-boiler-master/message.html"
 	
 	newURL = homeURL + "?img-url=" + img + "&msg=" + msg
 	console.log(newURL);



	// // 2.4 Get the <p> element and change it's value to the URL string
	paragraph = document.querySelector('#share-url');
	paragraph.innerHTML = newURL;


}