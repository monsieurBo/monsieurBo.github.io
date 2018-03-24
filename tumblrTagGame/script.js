// database for words to guess
const database = ['fruit', 'chocolate', 'coffee', 'whisky', 'tea', 'pie', 'dinner', 'breakfast', 'dessert', 'cake'];				
// selected words from database
var words = []; 
// fixed random number to select from selected words[]
var random = Math.floor(Math.random() * 4);
const images = document.getElementById('imageBox');



// an algorithm to generate a set of unique random numbers.
// 4 numbers from the total number of items in database
function randomiser() {

  var picks = [];
  // Store possibilities in the numbersArr array
  var numbersArr = [];

  // X is the max number you can choose from, i.e. select range
  for ( var i = 0; i < database.length; i++ ) { 
    numbersArr.push(i);
  }

  while (picks.length < 4) {
     var randomIndex = Math.floor(Math.random() * numbersArr.length);
     picks.push(numbersArr[randomIndex]);
     numbersArr.splice(randomIndex, 1);
  }

  return picks;
}


// selects and generates the items from database based on random numbers
function generateWordBox() {	
	var ranArr = randomiser();


	for (i = 0; i < ranArr.length; i++) {
		var li = document.createElement('li');
		li.className = 'wordTag';
		li.innerHTML = database[ranArr[i]];

		var tagsContainer = document.querySelector('#wordBox');
		tagsContainer.appendChild(li);
		words.push(database[ranArr[i]]);
	}
}



// searches the tag with tumblr's API
function searchTag() {
	// selects the word from database to be searched
	var word = words[random];
  var newApi = 'https://api.tumblr.com/v2/tagged?tag=' + word + '&api_key=lcOb0wo7ZPlZLxzXVBKnbezGijCufwYwEbIlT7toCUlV93PTdr';
  console.log(newApi);

  // fetch from API
  fetch(newApi)
  .then(function(response){
  	if (!response.ok) {
  		window.alert('Sorry, seems like something went wrong. Please contact help at email@email.com.');
  		return;
  	}
  	return response.json(); 
  })
  .then(function(result){
  	if (!result) {
  		return;
  	}

  	// retrieves and appends each pictures to list
	  const items = result.response;
	  let masonry;

	  for (i = 0; i < items.length; i++) {
			var item = items[i];

			if (item.photos != undefined) {
				var altSizes = item.photos[0].alt_sizes;
				var imageSrc = altSizes[altSizes.length - 3].url;
				
				var img = document.createElement('img');
				img.src = imageSrc;
				// runs masonry layout after images has loaded
				img.onload = function() {
					masonry.layout();
				}

				var li = document.createElement('li');
				li.appendChild(img);

				images.appendChild(li);
			}
		}

		// initialise masonry after list has loaded
		masonry = new Masonry(images, {
			itemSelector : 'li',
			// gutter : 5,
		});

		//run masonry layout // at this point, images have/might not load yet
		// masonry.layout();
	})
  // catches error 
  .catch(function(err) {
  	window.alert('Sorry, seems like Tumblr API is down. Please try again later.');
  	console.log(err);
  });
}


// checks for win or lose upon clicking on target item
function checkWin() {
	var word = words[random];
	const tagBox = document.querySelectorAll('.wordTag');
	var boxClick;

	for (i = 0; i < tagBox.length; i++){
		tagBox[i].onclick = function(event) {
			boxClick = event.target;

			// checks tags for win
			if (boxClick.innerHTML == word) {
				const unhide = document.getElementById('lightBox');
				console.log(unhide);
				unhide.classList.remove("hideResult");

				const result = document.getElementById('hoverMsg');
				var txt = "Yay! You've got it right!";
				result.innerHTML = txt;

				const img = document.getElementById('hoverImg');
				img.src = 'trophy.png';
				}
			else {
				const unhide = document.getElementById('lightBox');
				console.log(unhide);
				unhide.classList.remove("hideResult");

				const result = document.getElementById('hoverMsg');
				var txt = "Oops. The right tag is " + word + '.';
				result.innerHTML = txt;

				const img = document.getElementById('hoverImg');
				img.src = 'oops.png';
			}
		}
	}
}


function run() {
	generateWordBox();
	searchTag();
	checkWin();
}


// // initial setup
run();