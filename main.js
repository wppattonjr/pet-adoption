"use strict";

const pets  = [
    {
        image: "pet-adoption-images/Zipper.jpg",
        name: "Zipper",
        color: "Brown",
        specialSkill: "Stealing socks Lucas ipsum dolor sit amet jawa lars bothawui ",
        typeOfPet: "Dog",
    },
    {
        image: "pet-adoption-images/Apollo.jpg",
        name: "Apollo",
        color: "Brown and white",
        specialSkill: "Chillaxin Lucas ipsum dolor sit amet jawa lars bothawui ",
        typeOfPet: "Dog",
    },
    {
        image: "pet-adoption-images/Gandolf.jpg",
        name: "Gandolf",
        color: "Grey",
        specialSkill: "Magic Lucas ipsum dolor sit amet jawa lars bothawui ",
        typeOfPet: "Cat",
    },
    {
        image: "pet-adoption-images/Scabbers.jpg",
        name: "Scabbers",
        color: "Brown-ish",
        specialSkill: "Turning human Lucas ipsum dolor sit amet jawa lars bothawui ",
        typeOfPet: "Rat",
    },
    {
        image: "pet-adoption-images/Smeagol.jpg",
        name: "Smeagol",
        color: "Grey-ish",
        specialSkill: "Directions Lucas ipsum dolor sit amet jawa lars bothawui ",
        typeOfPet: "Ferret",
    },
    {
        image: "pet-adoption-images/Hedwig.jpg",
        name: "Hedwig",
        color: "White and black",
        specialSkill: "Delivering messages Lucas ipsum dolor sit amet jawa lars bothawui ",
        typeOfPet: "Owl",
    },
];

const handleButtonClick = (e) => {
    const buttonID = e.target.id;

    const selectedPets = [];
    for (let i = 0; i < pets.length; i++) {
        if(pets[i].typeOfPet === buttonID) {
            selectedPets.push(pets[i]);
        }
    }

    if (buttonID === 'All' || buttonID === e.currentTarget.id){
        buildPetCards(pets)
    }else {
        buildPetCards(selectedPets);
    }
}

const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
}

const buildPetCards = (cardsForPets) => {
    let domString = '';

    for (let i = 0; i < pets.length; i++) {
        domString += `<div class="card my-2" style="width: 20rem;" id="${i}">
                            <h1 class="card-header">${cardsForPets[i].name}</h1>
                            <div class="img-container" style="background-image"><img src=${cardsForPets[i].image}></div>
                            <p1 class="card-text">${cardsForPets[i].color}</p1>
                            <p2 class="card-text">${cardsForPets[i].specialSkill}</p2>
                            <p3 class="card-text">${cardsForPets[i].typeOfPet}</p3>
                      </div>`
    }

    printToDom("pets", domString)
}

const buttonEvents = () => {

    document.querySelector('#pet-card-buttons').addEventListener('click', handleButtonClick);
    
}
    
    const init = () => {
        buttonEvents();
        buildPetCards(pets);
}

init();

    
