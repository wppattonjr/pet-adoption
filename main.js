"use strict";

const pets  = [
    {
        image: "pet-adoption-images/Zipper.jpg",
        name: "Zipper",
        color: "brown",
        specialSkill: "stealing socks Lucas ipsum dolor sit amet jawa lars bothawui ",
        typeOfPet: "Dog",
    },
    {
        image: "pet-adoption-images/Apollo.jpg",
        name: "Apollo",
        color: "brown and white",
        specialSkill: "chillaxin Lucas ipsum dolor sit amet jawa lars bothawui ",
        typeOfPet: "Dog",
    },
    {
        image: "pet-adoption-images/Gandolf.jpg",
        name: "Gandolf",
        color: "grey",
        specialSkill: "magic Lucas ipsum dolor sit amet jawa lars bothawui ",
        typeOfPet: "Cat",
    },
    {
        image: "pet-adoption-images/Scabbers.jpg",
        name: "Scabbers",
        color: "brownish",
        specialSkill: "turning human Lucas ipsum dolor sit amet jawa lars bothawui ",
        typeOfPet: "Rat",
    },
    {
        image: "pet-adoption-images/Smeagol.jpg",
        name: "Smeagol",
        color: "grey-ish",
        specialSkill: "directions Lucas ipsum dolor sit amet jawa lars bothawui ",
        typeOfPet: "Ferret",
    },
    {
        image: "pet-adoption-images/Hedwig.jpg",
        name: "Hedwig",
        color: "white and black",
        specialSkill: "delivering messages Lucas ipsum dolor sit amet jawa lars bothawui ",
        typeOfPet: "Owl",
    },
]

const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
}

const buildPetCards = () => {
    let domString = "";

    for (let i = 0; i < pets.length; i++) {
        domString += `<div class="pet-card">`;
        domString +=    `<div id="pet-card-name">${pets[i].name}</div>`;
        domString +=    `<div id="pet-card-image"><img src=${pets[i].image}></div>`;
        domString +=    `<div>${pets[i].color}</div>`;
        domString +=    `<div>${pets[i].specialSkill}</div>`;
        domString +=    `<div id="pet-card-footer">${pets[i].typeOfPet}</div>`;
        domString += `</div>`;

    }

    printToDom("pets", domString)
}

    buildPetCards();
