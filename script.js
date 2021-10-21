/*
Ricreiamo le card del nostro team aggiungendo al layout di base 
fornito, il nostro javascript in cui:
 1) Creiamo il nostro array di oggetti che rappresentano ciascun 
    membro del team. Ogni membro dovrà avere le informazioni necessarie
    per stampare la relativa card: Nome, Ruolo e Foto.
 2) Prendendo come riferimento il layout di esempio presente nel
    html, stampiamo tutte le card del nostro team.
 3) Utilizziamo poi gli input presenti nella pagina per permettere 
    all’utente di aggiungere nuovi membri del team.
*/
"use strict";

// Array fornito per esercizio
let ourTeam = [
    // 1 (0)
    {
        name: "Wayne Barnett",
        role: "Founder & CEO",
        image: "img/wayne-barnett-founder-ceo.jpg"
    },
    // 2 (1)
    {
        name: "Angela Caroll",
        role: "Chief Editor",
        image: "img/angela-caroll-chief-editor.jpg"
    },
    // 3 (2)
    {
        name: "Walter Gordon",
        role: "Office Manager",
        image: "img/walter-gordon-office-manager.jpg"
    },
    // 4 (3)
    {
        name: "Angela Lopez",
        role: "Social Media Manager",
        image: "img/angela-lopez-social-media-manager.jpg"
    },
    // 5 (4)
    {
        name: "Scott Estrada",
        role: "Developer",
        image: "img/scott-estrada-developer.jpg"
    },
    // 6 (5)
    {
        name: "Barbara Ramos",
        role: "Graphic Designer",
        image: "img/barbara-ramos-graphic-designer.jpg"
    },
]

// Esperimenti in console
//  Console -> tutto l'array
console.log(ourTeam);

console.log(ourTeam[0]); //(1)
console.log(ourTeam[1]); //(2)
console.log(ourTeam[2]); //(3)
console.log(ourTeam[3]); //(4)
console.log(ourTeam[4]); //(5)
console.log(ourTeam[5]); //(6)

console.log(`Il "name" del 1° (0) elemento è ${(ourTeam[0].name)}.`)
console.log(`L'"image" del 3° (2) elemento è ${(ourTeam[2].image)}.`)
console.log(`Il "role" del 6° (5) elemento è ${(ourTeam[5].role)}.`)

