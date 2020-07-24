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
        domString +=    `<h2>${pets[i].name}</h2>`;
        domString +=    `<div class="petImg"><img src=${pets[i].image}></div>`;
        domString +=    `<p1>${pets[i].color}</p1>`;
        domString +=    `<p2>${pets[i].specialSkill}</p2>`;
        domString +=    `<p3>${pets[i].typeOfPet}</p3>`;
        domString += `</div>`;

    }

    printToDom("pets", domString)
}

    buildPetCards();


