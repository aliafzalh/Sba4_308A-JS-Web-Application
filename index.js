import { getRandomDog } from "./api.js";
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


button.addEventListener(`click`, loadDog)
loadDog();