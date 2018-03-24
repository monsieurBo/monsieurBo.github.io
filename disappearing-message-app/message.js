// 1. Get values from query params in URL
let url = new URL(document.location.href);
let params = new URLSearchParams(url.search);
let img_url = params.get('img-url');
let msg = params.get('msg');



// 2. Get the <img> and <p> element
imgTag = document.querySelector('img');
imgTag.src = img_url

hTag = document.querySelector('#message');

// 3. Change the innerHTML of the <p> element

hTag.innerHTML = msg

// 4. Change the src attribute of <img> element

// timeout

function toIndex() {
	location.href = "file:///C:/Users/naive/OneDrive/Desktop/disappearing-message-app-boiler-master/index.html"
}

setTimeout(toIndex, 5000)


function timer() {
  const timer = document.getElementById("timer")
  timer.innerHTML = timer.innerHTML - 1
}

// function currentURL() {
// 	location.href = url
// 	window.location.reload()
// }

// // const url = new URL(window.location.href)
// // const imageTag = renderImage(url)
// // const messageTag = renderMessage(url)

// // renderContainer(imageTag, messageTag)
// // prettyUrl()
// setTimeout(function(){currentURL, 10000)
// for(let i = 0; i < 5; i++) {
//   const delay = i * 1000 + 1000
//   setTimeout(function(){timer()}, delay)
// }