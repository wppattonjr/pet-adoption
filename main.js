"use strict";

const pets  = [
    {
        image: "/Users/wendellpattonjr/workspace/foundations/exercises/pet-adoption-images/Zipper.jpg",
        name: "Zipper",
        color: "brown",
        specialSkill: "stealing socks",
        typeOfPet: "Dog",
    },
    {
        image: "/Users/wendellpattonjr/workspace/foundations/exercises/pet-adoption-images/Apollo.jpg",
        name: "Apollo",
        color: "brown and white",
        specialSkill: "chillaxin",
        typeOfPet: "Boxer Dog",
    },
    {
        image: "/Users/wendellpattonjr/workspace/foundations/exercises/pet-adoption-images/Gandolf.jpg",
        name: "Gandolf",
        color: "grey",
        specialSkill: "magic",
        typeOfPet: "Cat",
    },
    {
        image: "/Users/wendellpattonjr/workspace/foundations/exercises/pet-adoption-images/Scabbers.jpg",
        name: "Scabbers",
        color: "brownish",
        specialSkill: "turning human",
        typeOfPet: "Rat",
    },
    {
        image: "/Users/wendellpattonjr/workspace/foundations/exercises/pet-adoption-images/Smeagol.jpg",
        name: "Smeagol",
        color: "grey-ish",
        specialSkill: "directions",
        typeOfPet: "Ferret",
    },
    {
        image: "/Users/wendellpattonjr/workspace/foundations/exercises/pet-adoption-images/Hedwig.jpg",
        name: "Hedwig",
        color: "white and black",
        specialSkill: "delivering messages",
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
        domString += `<div class="pets">`;
        domString +=    `<h1>${pets[i].name}</h1>`;
        domString +=    `<div class="petImg"><img src=${pets[i].image}></div>`;
        domString +=    `<h2>${pets[i].color}</h2>`;
        domString +=    `<p>${pets[i].specialSkill}</p>`;
        domString +=    `<p>${pets[i].typeOfPet}</p>`;
        domString += `</div>`;

    }

    printToDom("pets", domString)
}

    buildPetCards();


