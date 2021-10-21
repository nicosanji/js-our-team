// Function -> per ogni Object nell'array ourTeam crea i membri presenti e li aggiunge al DOM
mostraTeam();
function mostraTeam() {
    // Ciclo For -> ciclo e "estraggo" le loro proprietà (chiave:valore)
    for (let i = 0; i < ourTeam.length; i++) {

        const element = ourTeam[i];

        console.log(element.name);
        console.log(element.role);
        console.log(element.image);

        // Estrai le proprietà (chiave - valore) (singolarmente)  
        aggiungiMembri(element.name, element.role, element.image);
    }
}


// Function -> per ogni object dell'Array devo "passare" i 3 valori e aggiungerli al DOM
function aggiungiMembri(nameMembro, roleMembro, imageMembro) {

    // createElement -> tutti i div ecc... che mi servono per ogni membro
    const membroTeam = document.createElement("div");
    const testoTeam = document.createElement("div");
    const nameTeam = document.createElement("h3");
    const roleTeam = document.createElement("p");
    const imageTeam = document.createElement("div");
    // Append -> "aggiungi" al .team-container
    teamContainer.append(membroTeam);
    membroTeam.append(imageTeam);
    membroTeam.append(testoTeam);
    testoTeam.append(nameTeam);
    testoTeam.append(roleTeam);
    // classList.add -> aggiungi le classi già presenti nell'html/css
    membroTeam.classList.add("team-card");      
    imageTeam.classList.add("card-image");
    testoTeam.classList.add("card-text");
    // innerHTML -> aggiungi i contenuti con le variabili già "definite"
    imageTeam.innerHTML = `<img src="${imageMembro}"/> `
    nameTeam.innerHTML = `${nameMembro}`;
    roleTeam.innerHTML = `${roleMembro}`;
}

