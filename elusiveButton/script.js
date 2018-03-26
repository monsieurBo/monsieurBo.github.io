var button = document.querySelector('#btn');
		var run = document.querySelector('#runner');
		var counter = 0;

		// ninja steps and disguises every hover
		function morph() {
			var check = run.getAttribute('src');
			
			if (counter<10) {
				var yell = document.getElementById('scream');
				console.log(scream.innerHTML);
				if (check === 'dragon.png') {
					run.src = 'pig.png';
					console.log(yell);
					// if (scream.innerHTML === '') {
					yell.innerHTML = 'oh noes!!';
					// }
					counter++;
	
				}
				else {
					run.src = 'dragon.png';
					console.log(yell);
					// if (scream.innerHTML === '') {
					yell.innerHTML = 'rawwrrRRRR!!';
					// }
					counter++;
				}
				offSet();
			}


			console.log(counter);
		}


		// gets cooked upon clicking
		function cooked() {
			var yell = document.getElementById('scream');
			run.src = 'steak.png';
			// button.style.left = '0vw';
			run.removeAttribute('onmouseover');
			yell.innerHTML = '*sSizzzlesSs*';
		}

		// ninja footworks
		function offSet() {
			var newLeft = Math.floor(Math.random() * 400);
			var newTop = Math.floor(Math.random() * 400);
			button.style.left = String(newLeft) + 'px';
			button.style.top = String(newTop) + 'px';
		}