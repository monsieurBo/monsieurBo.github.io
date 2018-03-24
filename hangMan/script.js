var database = ['banana', 'apple', 'orange'];	// database for words to guess		
var random = Math.floor(Math.random() * database.length);	
var word = database[random]; // selects a word from database to be guessed
var wordArray = word.split("");
var wrongArray = document.querySelector('#wrongGuess');
var attemptsLeft = wordArray.length + 5;
var blankBox = document.querySelector('#wordBox');
const form = document.getElementById('inputGuess');
const input = document.querySelector('#alphabet');
var keyLog = [];
	
// checks whether player has won or lost
function hasWon(){
	var check	= document.getElementsByTagName("span");
	var trig = true;
	for (i = 0; i < check.length; i++) {
			if (check[i].className.match('hidden')) {
				trig = false;
			}
		}
	if (trig && attemptsLeft >0) {
		displayWordBox();
		const unhide = document.getElementById('lightBox');
			console.log(unhide);
			unhide.classList.remove("hideResult");

			const result = document.getElementById('hoverMsg');
			var txt = "Yay! You've got it!";
			result.innerHTML = txt;

			const img = document.getElementById('hoverImg');
			img.src = 'trophy.png';
	}
	else{
	for (i = 0; i < check.length; i++) {
			if (check[i].className.match('hidden') && attemptsLeft <=0) {
				displayWordBox();
				const unhide = document.getElementById('lightBox');
				console.log(unhide);
				unhide.classList.remove("hideResult");

				const result = document.getElementById('hoverMsg');
				var txt = "Oops. Try again!";
				result.innerHTML = txt;

				const img = document.getElementById('hoverImg');
				img.src = 'oops.png';
			}
		}
	}
}

// splits the word by alphabets into array and compiles into a list
function generateWordBox() {	
	for (i = 0; i < wordArray.length; i++) {
		var li = document.createElement('li');
		var span = document.createElement('span');
		var alph = document.createTextNode(wordArray[i]);
		span.id = "li"+(i+1);
		span.className = "hidden";
		span.appendChild(alph);
		li.appendChild(span);
		blankBox.appendChild(li);
	}
}


// displays all characters:  checks for all hidden class and remove the class
function displayWordBox() {
	const unhide = document.getElementsByClassName('hidden');
	
	for (i = unhide.length; i > 0; i--) {
		unhide[0].classList.remove("hidden");
	}
}

// displays the number of attempts left
function displayAttemptsLeft(num) {
	var txt = "You have " + attemptsLeft + " tries left!!";
	document.getElementById('attempts').innerHTML = txt;

	// const unhide = document.getElementsByClassName('hiddenTries');
	// for (i = unhide.length; i > 0; i--) {
	// 	unhide[0].classList.remove("hiddenTries");
	// }
}

// pushes guesses that are wrong into wrongArray
function displayWrongGuess(guess) {
	var li = document.createElement('li');
	li.innerHTML = guess;
	wrongArray.appendChild(li);
}

// game function
function guess(word, blankBox, currGuess) {
	var append = true;
	// creates a trigger to displayWrongGuess()
	// if word char and input char matches, 'append' will turn false
	for (i = 0; i < wordArray.length; i++){
		if (wordArray[i] == currGuess){
			append = false;
		}
	}
	// if 'append' is true, input char will go to displayWrongGuess
	if (append) {
		displayWrongGuess(currGuess);
	}
	// otherwise,it is false. Compares word[i] with input,
	// for each matches for word[i],
	// the class hidden will be removed to reveal word[i]
	else {
		for (i = 0; i < wordArray.length; i++){
			if (wordArray[i] == currGuess){
				var index = 'li'+(i+1);
				var classId = String(index);
				console.log(index);
				var remove = document.getElementById(index);
				console.log(remove);
				remove.classList.remove("hidden");
			}
		}
	}
	keyLog.push(currGuess);
	const unhide = document.getElementsByClassName('hiddenTries');
	for (i = unhide.length; i > 0; i--) {
		unhide[0].classList.remove("hiddenTries");
	}
	console.log(keyLog);
}

function run() {
	displayAttemptsLeft();
	generateWordBox();
}

// setup form handlers
function setupForm() {
	form.onsubmit = function(event) {
	event.preventDefault();
	const currentInput = input.value;

	// checks if input is only a single alphabet, alerts if it isnt
	if (currentInput.length > 1 || currentInput === null || currentInput === '') {
			alert('You can only enter ONE alphabet!!');
		}
	else if ((currentInput.length == 1) && (keyLog.indexOf(currentInput) != -1)) {
		alert('You have already used this alphabet!');
	}
	else {
			guess(word, blankBox, currentInput);
			attemptsLeft = attemptsLeft -1;
			displayAttemptsLeft(attemptsLeft);
			hasWon();
	}
	// displays all the boxes if player has no attempts left
	if (attemptsLeft == 0) {
		displayWordBox();
	}

	// resets the form input
	form.reset();
	}
}



// initial setup
run();
setupForm();