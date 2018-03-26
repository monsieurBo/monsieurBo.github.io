const closeBtn = document.querySelector('.lbClose');
const lBox = document.querySelector('.lightBox');
const galleryItems = document.querySelectorAll('.projects');
const lBoxImage = document.querySelector('.lbImage');

function showLightbox(event) {
// displays lightbox
	lBox.classList.remove('hidden');

	// register target URL
	const URL = event.target;
	console.log(event.target);
	const newURL = URL.childNodes[0].innerHTML;
	console.log(newURL);

	// replaces source of iframe with new url
	const newSrc = document.getElementById('lbiFrame');
	newSrc.src = newURL;
	console.log(newSrc);
}


function hideLightbox(event) {
	event.preventDefault();
	lBox.classList.add('hidden');

}
closeBtn.onclick = hideLightbox; 


// set onclick handler for every gallery item.
for (i = 0; i < galleryItems.length; i++) {
	let item = galleryItems[i];

	item.onclick = showLightbox;
}

