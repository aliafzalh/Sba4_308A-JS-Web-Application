export async function getRandomDog() {
    const response = await fetch('https://dog.ceo/api/breeds/image/random')
    const data = await response.json();
    return data.message
    
}

export async function getDogByBreed(breed) {
    const res = await fetch (`https://dog.ceo/api/breed/${breed}images/random`)
    const data = await res.json();
    if(data.status !=="success") throw new Error("Breed not found")
        return data.message
}