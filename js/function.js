// Function -> per ogni Object nell'array ourTeam crea i membri presenti e li aggiunge al DOM
mostraTeam();
function mostraTeam() {
    // Ciclo For -> ciclo e "estraggo" le loro proprietà (chiave:valore)
    for (let i = 0; i < ourTeam.length; i++) {

        const element = ourTeam[i];

        // console.log(element.name);
        // console.log(element.role);
        // console.log(element.image);

        // Estrai le proprietà (chiave - valore) (singolarmente)  
        aggiungiMembri(element.name, element.role, element.image);
    };
};


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
    imageTeam.innerHTML = `<img src="${imageMembro}"/>`;
    nameTeam.innerHTML = `${nameMembro}`;
    roleTeam.innerHTML = `${roleMembro}`;
};


// BONUS
// Function -> con i valori inseriti nel form aggiungo un nuovo membro all'array
function formSubmit() {
    // .value -> metto i valori del form in 3 nuove variabili
    const valoreName = formName.value;
    const valoreRole = formRole.value;
    const valoreImage = formImage.value;
    // Objects Array -> nuovo array con i 3 nuovi valori per i nomi già esistenti
    const membroAggiunto = {
        // nome: valore
        name: valoreName,
        role: valoreRole,
        image: valoreImage
    }
    // Push -> aggiungo il nuovo Object Array all'Array ourTeam
    ourTeam.push(membroAggiunto);
    // Richiamo la funzione precedentemente scritta per la nuova card da aggiungere
    aggiungiMembri(membroAggiunto.name, membroAggiunto.role, membroAggiunto.image);
    // Console -> mostra i "nomi" del nuovo membro
    console.log(`Il nuovo membro si chiama ${membroAggiunto.name} e il suo ruolo è quello di ${membroAggiunto.role}`)
};