// elements that we need for output:

// get animals pic div to hold images
const animalpics = document.getElementById('animal-pics');

// get video player div
const player = document.getElementById('video-player');

// get h2 for animal name
const h2 = document.querySelector('h2');

// get p tag for description
const p = document.querySelector('p');


//output on load
h2.textContent = `Click an animal photo to learn more.`;
p.textContent = "";
player.innerHTML = "";

//output the animal images to the `animal-pics` div that call swapAnimal function onClick.

for (let i = 0; i < animalsArr.length; i++) {
    animalsArr.sort((a, b) =>
    a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1);
    let animal = animalsArr[i];
    let animalImg = animal.name.replace(" ", "-") + ".jpg";
    animalpics.innerHTML +=`<img src ="images/${animalImg}" onclick="swapAnimal(${i})">`
}
function swapAnimal(i) {
    const obj = animalsArr[i]
    h2.innerHTML = `${obj.name.toUpperCase()} - ${obj.class} - ${obj.region}`;
    p.innerHTML = `${obj.desc}`;
    player.innerHTML = `<iframe src="https://www.youtube.com/embed/${obj.youTube}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
}