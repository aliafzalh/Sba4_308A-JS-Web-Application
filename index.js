import { getRandomDog } from "./api.js";
import { showDogImage } from "./ui.js";

const button = document.getElementById('load-btn')

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