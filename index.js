import { getDogByBreed, getRandomDog } from "./api.js";
import { showDogImage } from "./ui.js";

const button = document.getElementById('load-btn')
const searchBtn = document.getElementById(`search-btn`)
const breedInput = document.getElementById(`breed-input`)

async function loadDog() {
    try{
        const imageUrl = await getRandomDog();
        showDogImage(imageUrl)
    }catch(error){
        alert('Failed to load dog image')
    } 
}
async function searchDogByBreed() {
    const breed = breedInput.value.trim().toLowerCase();
    if(!breed) return alert(`Please enter a breed name`);
    try{
        const imageUrl = await getDogByBreed(breed)
        showDogImage(imageUrl)
    }catch(error) {
        alert(`Breed not found or failed to load image.`)
    }
}

button.addEventListener(`click`, loadDog)
searchBtn.addEventListener(`click`, searchDogByBreed);

setInterval(loadDog, 10000);
loadDog();