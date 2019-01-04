function createImageTag(imageSrc) {
    return `<img class="dog-image" src="${imageSrc}" alt="random image of a dog"/>`;
}

function loadDogImages(data) {
    $('#image-container').html(data.message.map(createImageTag));
}

function loadOneDogImage(data) {
    console.log(data);
    $('#image-container').html(createImageTag(data.message));
}

function loadErrorMessage(message) {
    $('#image-container').html(`<h2>${message}</h2>`);
}

function getDogImages(number) {
    fetch(`https://dog.ceo/api/breeds/image/random/${number}`)
        .then(res => res.json())
        .then(resJSON => loadDogImages(resJSON))
        .catch(err => console.log(err));
}

function getDogBreedImage(breed) {
    fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
        .then(res => res.json())
        .then(resJSON => {
            resJSON.status === 'error' ? loadErrorMessage(resJSON.message) : loadOneDogImage(resJSON);
        })
        .catch(err => console.log(err));
}

function watchForms() {
    $('#js-random-dog-form').submit(e => {
        e.preventDefault();
        let imgCount = $('#number').val() === '' ? 3 : $('#number').val();
        getDogImages(imgCount);
    });
    $('#js-breed-form').submit(e => {
        e.preventDefault();
        getDogBreedImage($('#breed').val());
    })
}

function loadDogApp() {
    watchForms();
}

$(loadDogApp);