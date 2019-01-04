function getDogPics(number) {
	console.log(number);
	fetch(`https://dog.ceo/api/breeds/image/random/${number}`)
		.then(res => res.json())
		.then(resJSON => console.log(resJSON))
		.catch(err => console.log(err));
}

function watchForm() {
	$('#js-dog-form').submit(e => {
		e.preventDefault();
		console.log('clicked');
		getDogPics($('#number').val());
	});
}

function loadDogApp() {
	watchForm();
}

$(loadDogApp);
