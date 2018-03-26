function copyLink() {
  var copyText = document.getElementById("share-url").innerHTML;
  console.log(copyText);
  copyText.select();
  document.execCommand("Copy");
  alert("Copied the text: " + copyText.value);
}




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
	homeURL = "https://monsieurbo.github.io/disappearing-message-app/messsage.html"
 	
 	newURL = homeURL + "?img-url=" + img + "&msg=" + msg 	//might have to encodeUri() -  check url encoded
 	console.log(newURL);

 	newURL = encodeURIComponent(newURL);
 	console.log(newURL);


	// // 2.4 Get the <p> element and change it's value to the URL string
	paragraph = document.querySelector('#share-url');
	// paragraph.innerHTML = newURL;


	API = 'https://api-ssl.bitly.com/v3/shorten?access_token=1caa8b2c00936737169d93b91b6a9bf8de45bc0d&longUrl=' + newURL + '&format=json'
	fetch(API)
	  .then(function(response){
	     return response.json(); 
	     console.log(response);
	  })
	  .then(function(result){
	     console.log(result);
	     console.log(result.data.url);
	     paragraph.innerHTML = result.data.url;

	     var unhide = document.getElementById('copyBtn');
	     unhide.classList.remove('hidden');
	  });

	// function copyLink() {
	//   var copyText = document.getElementById("share-url");
	//   copyText.select();
	//   document.execCommand("Copy");
	//   alert("Copied the text: " + copyText.value);
	// }
}





// bitly oauthcode 1caa8b2c00936737169d93b91b6a9bf8de45bc0d

// bitly login = o_3935se8pt7
// bitly api key = R_a4e5152922fa44a6b5b743699da01f2a

// function bitly() {
// 	var url =
// 	fetch('https://api-ssl.bitly.com/v3/shorten?access_token=1caa8b2c00936737169d93b91b6a9bf8de45bc0d&longUrl=http%3A%2F%2Fgoogle.com%2F&format=txt')
// 	  .then(function(response){
// 	     return response.json(); 
// 	  })
// 	  .then(function(result){
// 	     console.log(result)  
// 	     loadCat(result);
// 	  });


// 	// When a new <option> is selected
// 	cat.addEventListener('change', function() {
// 	  var index = cat[cat.selectedIndex].innerHTML;
// 	  console.log(index);
// 	  var newApi = 'https://api.chucknorris.io/jokes/random?category=' + index;
// 	  console.log(newApi);

// 	  fetch(newApi)
// 	  .then(function(response){
// 	     return response.json(); 
// 	  })
// 	  .then(function(result){
// 	     console.log(result)  
// 	     console.log(result.value)
// 	     haha.innerHTML = result.value;
// 	     pic.src = result.icon_url;
// 	  });
// 	})
// }