function createImageTag(imageSrc) {
	return `<img class="dog-image" src="${imageSrc}" alt="random image of a dog"/>`;
}

function loadDogImages(data) {
	console.log(data.message);
	// $('#image-container').html('<h2>TEST</h2>');
	$('#image-container').html(data.message.map(createImageTag));
}

function getDogImages(number) {
	console.log(number);
	fetch(`https://dog.ceo/api/breeds/image/random/${number || 3}`)
		.then(res => res.json())
		.then(resJSON => loadDogImages(resJSON))
		.catch(err => console.log(err));
}

function watchForm() {
	$('#js-dog-form').submit(e => {
		e.preventDefault();
		console.log('clicked');
		getDogImages($('#number').val());
	});
}

function loadDogApp() {
	watchForm();
}

$(loadDogApp);
