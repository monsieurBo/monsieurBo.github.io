const haha = document.getElementById('jokes');
const pic = document.getElementById('icon');
var cat = document.getElementById('category');
var newApi;

function loadCat(res) {
	for (i=0; i<res.length; i++) {
		var op = document.createElement('option');
		op.value = res[i];
		op.innerHTML = res[i];
		cat.appendChild(op);
		// console.log(op);
	}
}

fetch('https://api.chucknorris.io/jokes/categories')
  .then(function(response){
     return response.json(); 
  })
  .then(function(result){
     console.log(result)  
     loadCat(result);
  });


// When a new <option> is selected
cat.addEventListener('change', function() {
  var index = cat[cat.selectedIndex].innerHTML;
  console.log(index);
  var newApi = 'https://api.chucknorris.io/jokes/random?category=' + index;
  console.log(newApi);

  fetch(newApi)
  .then(function(response){
     return response.json(); 
  })
  .then(function(result){
     console.log(result)  
     console.log(result.value)
     haha.innerHTML = result.value;
     pic.src = result.icon_url;
  });
})
