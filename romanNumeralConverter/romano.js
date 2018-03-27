


const form = document.querySelector('#createList');
const input = document.querySelector('#number');

// // submit input on Enter
// var input = document.getElementById("number");
// input.addEventListener("keyup", function(event) {
//   event.preventDefault();
//   if (event.keyCode === 13) {
//     document.getElementById("number").click();
//   }
// });


function romanify(input) {
	//create array to store number
	const roman = [];

	var collector = input;

	// checks whether number insert is more than a thousand
	// if collector%1000 == 1
	// 	let single
	for (x = 1000; collector%x != -1; x = x/10) {
		// checks for thousands
		if ((collector/1000) >=1) {
			var thousandNum;
			var thousand = Math.floor(collector/1000);
			console.log(thousand);
			if( thousand<10 && thousand>8) {
				thousandNum = "CM";
				roman.push(thousandNum);
				console.log(thousand);
				// break;
			}
			else if (thousand>5 && thousand<9) {
				thousandNum = "V";
				roman.push(thousandNum);
				for (i = thousand-5; i > 0;i--){
					thousandNum = "M";
					roman.push(thousandNum);
				}
				// break;
			}
			if (thousand == 5) {
				thousandNum = "V";
				roman.push(thousandNum);
				// break;
			}
			if( thousand<5 && thousand>3) {
				thousandNum = "MV";
				roman.push(thousandNum);
				// break;
			}
			else if (thousand>0 && thousand<4) {
				for (i = thousand; i > 0;i--){
					thousandNum = "M";
					roman.push(thousandNum);
				}
				// break;
			}

			collector = collector%1000;
			console.log(thousandNum);
			console.log(roman);
		}
		
	
		// checks for hundreds
		else if (collector/100 >=1) {
			var hundredNum = "";
			var hundred = Math.floor(collector/100);
			if( hundred<10 && hundred>8) {
				hundredNum = "DX";
				roman.push(hundredNum);
				// break;
			}
			else if (hundred>5 && hundred<9) {
				hundredNum = "D";
				roman.push(hundredNum);
				for (i = hundred-5; i > 0;i--){
					hundredNum = "C";
					roman.push(hundredNum);
				}
				// break;
			}
			if (hundred == 5) {
				hundredNum = "D";
				roman.push(hundredNum);
				// break;
			}
			if( hundred<5 && hundred>3) {
				hundredNum = "DV";
				roman.push(hundredNum);
				// break;
			}
			else if (hundred>=0 && hundred<4){
				for (i = hundred; i > 0;i--){
					hundredNum = "C";
					roman.push(hundredNum);
				}
				// break;
			}
			// // sets collecter as the remainder of 100s
			collector = collector%100;
			console.log(hundredNum);
			console.log(roman);
		}

		// checks for tens
		else if (collector/10 >=1) {
			var tenNum = "";
			var ten = Math.floor(collector/10);
			if( ten<10 && ten>8) {
				romanNum = "IC";
				roman.push(tenNum);
				// break;
			}
			else if (ten>5 && ten<9) {
				tenNum = "L";
				roman.push(tenNum);
				for (i = ten-5; i > 0;i--){
					tenNum = "X";
					roman.push(tenNum);
				}
				// break;
			}
			if (ten == 5) {
				tenNum = "L";
				roman.push(tenNum);
				// break;
			}
			if( ten<5 && ten>3) {
				tenNum = "XL";
				roman.push(tenNum);
				// break;
			}
			else  if (ten>=0 && ten<4) {
				for (i = ten; i > 0;i--){
					tenNum = "X";
					roman.push(tenNum);
				}
				// break;
			}

			collector = collector%10;
			console.log(tenNum);
			console.log(roman);
		}
	
		// checks for single
		else {
			var romanNum = "";
			var single = collector;
			if (collector%1 == 0) {
	
				if( single<10 && single>8) {
					romanNum = "IX";
					roman.push(romanNum);
					// break;
				}
				else if (single>5 && single<9) {
					romanNum = "V";
					roman.push(romanNum);
					for (i = single-5; i > 0;i--){
						romanNum = "I";
						roman.push(romanNum);
					}
				// break;
				}
				else if (single == 5) {
					romanNum = "V";
					roman.push(romanNum);
					// break;
				}
				else if( single<5 && single>3) {
					romanNum = "IV";
					roman.push(romanNum);
					// break;
				}
				else if (single>0 && single<4) {
					for (i = single; i > 0;i--){
						romanNum = "I";
						roman.push(romanNum);
					}
				// break;
				}
				break;
				console.log(romanNum);
				console.log(roman);
			}
		}
	}
	
	let output = roman.join('');
	console.log(output);
	let txt = "Your number [" + input + "] in Roman days would have been [" + output + "].";
	console.log(txt);
	document.getElementById("convert").innerHTML = txt;
}



function setupForm() {
	form.onsubmit = function(event) {
		event.preventDefault();
		const currentInput = input.value;
		console.log(currentInput);

		// checks if input is only a single alphabet, alerts if it isnt
		if (currentInput === "" || currentInput === null || currentInput === NaN) {
				alert('You can only enter ONE alphabet!!');
			}
		else {
				romanify(currentInput);
		}
		// resets the form input
		form.reset();
	}
}


setupForm();

// function romanify () {
// 	const num = prompt("Please enter a number:", "123");
// 	if (!+num) {
// 		let txt = "I asked for a number, not gibberish!";
// 		document.getElementById("convert").innerHTML = txt;
// 	}
// 	else {
// 		var	digits = String(+num).split(""),
// 			key = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM",
// 			       "","X","XX","XXX","XL","L","LX","LXX","LXXX","XC",
// 			       "","I","II","III","IV","V","VI","VII","VIII","IX"],
// 			roman = "",
// 			i = 4;
// 		while (i--) //i = 2									20
// 			roman = (key[+digits.pop() + (i * 10)] || "") + roman;
// 		console.log(roman);
// 		// return Array(+digits.join("") + 1).join("M") + roman;
	
// 		let txt = "Your number [" + num + "] in Roman days would have been [" + roman + "].";
// 		console.log(txt);
// 		document.getElementById("convert").innerHTML = txt;
// 	}
// 	}
	



