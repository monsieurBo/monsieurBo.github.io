var winCounter = false;

// check for draws
function checkDraw() {
	var draw = document.getElementsByClassName('box');
	var check = 0;
	for (i=0;i<draw.length;i++) {
		if (draw[i].innerHTML != '') {
			check++;
		}
		else {break;}
		console.log(check);
		if (check == draw.length) {
			if (!winCounter) {
				const unhide = document.getElementById('lightBox');
				console.log(unhide);
				unhide.classList.remove("hideResult");
	
				const result = document.getElementById('hoverMsg');
				var txt = "DRAW!";
				result.innerHTML = txt;
	
				const img = document.getElementById('hoverImg');
				img.src = 'game-over.png';
			}
		}
	}	
}






// horizontal/row 
function checkRow() {
	var coords;
	var coordsX;
	var coordsY = 1;
	var check = [];
	// y-coords
	for (y=1; y<4;y++) {
		check = [];
		// x-coords
		for (x=0;x<3;x++) {
			coordsX = x;
			coords = coordsY*10+coordsX;
			// gets value at box[YX]
			var boxId = document.getElementById(coords).innerHTML;
			// adds value to 'check' array
			check.push(boxId);
		}
		console.log(check);
	
		//	compares if value in all boxes are the same
		if (check[0] === check[1] && check[1] === check[2] && check[0] != '') {
			const show = document.getElementById('lightBox');
			console.log(show);
			show.classList.remove("hideResult");

			const result = document.getElementById('hoverMsg');
			if (check[0] === 'X'){
				var para = "Player X WINS!!";
				result.innerHTML = para;}
			else {
				var para = "Player O WINS!!";
				result.innerHTML = para;}

			const img = document.getElementById('hoverImg');
			img.src = 'trophy.png';
			winCounter = true;
			break;
			}
			else {
				coordsY++;}
	}

}


// vertical/col 
function checkCol() { 
	var coords;
	var coordsX = 0;
	var coordsY;
	var check = [];
	// x-coords
	for (x=0; x<3;x++) {
		check = [];
		// y-coords
		for (y=1;y<4;y++) {
			coordsY = y;
			coords = coordsY*10+coordsX;
			// gets value at box[XY]
			var boxId = document.getElementById(coords).innerHTML;
			// adds value to 'check' array
			check.push(boxId);
		}
		console.log(check);
	
		//	compares if value in all boxes are the same
		if (check[0] === check[1] && check[1] === check[2] && check[0] != '') {
			const show = document.getElementById('lightBox');
			console.log(show);
			show.classList.remove("hideResult");

			const result = document.getElementById('hoverMsg');
			if (check[0] === 'X'){
				var para = "Player X WINS!!";
				result.innerHTML = para;}
			else {
				var para = "Player O WINS!!";
				result.innerHTML = para;}

			const img = document.getElementById('hoverImg');
			img.src = 'trophy.png';
			winCounter = true;

			break;
		}
		else {
			coordsX++;}
	}
}


// diagonal left right
function checkDiagLeftRight() { 
	var coords;
	var coordsX = 0;
	var coordsY;
	var check = [];
	// get y coords
	for (y = 1; y < 4; y++) {
		coordsY = y;
		coords = coordsY*10+coordsX;
		// gets box value at box.id(YX)
		var boxId = document.getElementById(coords).innerHTML;
		// adds value to 'check' array
		check.push(boxId);
		coordsX++;
	}
	console.log(check);
	//	compares if value in all boxes are the same
	if (check[0] === check[1] && check[1] === check[2] && check[0] != '') {
		const show = document.getElementById('lightBox');
		console.log(show);
		show.classList.remove("hideResult");

		const result = document.getElementById('hoverMsg');
		if (check[0] === 'X'){
			var para = "Player X WINS!!";
			result.innerHTML = para;}
		else {
			var para = "Player O WINS!!";
			result.innerHTML = para;}

		const img = document.getElementById('hoverImg');
		img.src = 'trophy.png';

		winCounter = true;	
	}
}


// diagonal left right
function checkDiagRightLeft() { 
	var coords;
	var coordsX = 2;
	var coordsY;
	var check = [];
	// get y coords
	for (y = 1; y < 4; y++) {
		coordsY = y;
		coords = coordsY*10+coordsX;
		// gets box value at box.id(YX)
		var boxId = document.getElementById(coords).innerHTML;
		// adds value to 'check' array
		check.push(boxId);
		coordsX--;
	}
	console.log(check);
	//	compares if value in all boxes are the same
	if (check[0] === check[1] && check[1] === check[2] && check[0] != '') {
		const show = document.getElementById('lightBox');
		console.log(show);
		show.classList.remove("hideResult");

		const result = document.getElementById('hoverMsg');
		if (check[0] === 'X'){
			var para = "Player X WINS!!";
			result.innerHTML = para;}
		else {
			var para = "Player O WINS!!";
			result.innerHTML = para;}

		const img = document.getElementById('hoverImg');
		img.src = 'trophy.png';

		winCounter = true;
	}

}


// check win
function checkWin() {
	checkRow();
	checkCol();
	checkDiagLeftRight();
	checkDiagRightLeft();
	checkDraw();
}

function setup() {
	const boxes = document.querySelectorAll('.box');
	console.log(boxes);
	var boxClick;
	var counter = 0;
	var player = document.getElementById('turn');

	for (i = 0; i < boxes.length; i++){
		
		boxes[i].onclick = function(event) {
			console.log(event.target);
			boxClick = event.target;
			console.log(boxes[i]);
			console.log(boxClick);
			console.log(counter);

			// alternates turn
			if (boxClick.innerHTML == '') {
				if (counter%2){
					boxClick.innerHTML = 'X';
					boxClick.style.background = '#e7b6b3';
					counter++;
					player.innerHTML = 'Player O';
					console.log(counter);
					checkWin();
					checkDraw();
				}
				else {
					boxClick.innerHTML = 'O';
					boxClick.style.background = '#7FC2C5';
					counter++;
					player.innerHTML = 'Player X';
					console.log(counter);
					checkWin();
				}
			}
			else {
				alert("box has been clicked");
			}
		}
	}

	if (counter == 8)
	{
		alert('draw!!');}
}


setup();