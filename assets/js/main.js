/* 
Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team. Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.
MILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe
BONUS 1:
Trasformare la stringa foto in una immagine effettiva
BONUS 2:
Organizzare i singoli membri in card/schede

Dati:
- Wayne Barnett
Founder & CEO	
wayne-barnett-founder-ceo.jpg
-Angela Caroll	
Chief Editor	
angela-caroll-chief-editor.jpg
-Walter Gordon
Office Manager
walter-gordon-office-manager.jpg
-Angela Lopez
Social Media Manager	
angela-lopez-social-media-manager.jpg
-Scott Estrada	
Developer	
scott-estrada-developer.jpg
-Barbara Ramos	
Graphic Designer	
barbara-ramos-graphic-designer.jpg
*/

//creo l'array di oggetti per rappresentare i membri del team
//array = team
//objects = members
let team = [
    //[0]
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        image: './assets/img/wayne-barnett-founder-ceo.jpg'
    },
    //[1]
    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        image: './assets/img/angela-caroll-chief-editor.jpg'
    },
    //[2]
    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        image: './assets/img/walter-gordon-office-manager.jpg'
    },
    //[3]
    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        image: './assets/img/angela-lopez-social-media-manager.jpg'
    },
    //[4]
    {
        name: 'Scott Estrada',
        role: 'Developer',
        image: './assets/img/scott-estrada-developer.jpg'
    },
    //[5]
    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        image: './assets/img/barbara-ramos-graphic-designer.jpg'
    }
]

//stampo array
console.log(team);

let teamEl = document.querySelector('.team');

//Stampo in console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
/* for (const key in team) {
    console.log(team[key]);
} */

//Stampo le informazioni su DOM sottoforma di stringhe

/* for (let i = 0; i < team.length; i++) {
    const member = team[i];
    console.log(member);
    const markupEl = 
    `<div>${member['name']}</div>
    <div>${member['role']}</div>
    <div>${member['image']}</div>`

    teamEl.insertAdjacentHTML('beforeend', markupEl);
    
} */

//Trasformo la stringa in un immagine real
//Creo le card

for (let i = 0; i < team.length; i++) {
    const member = team[i];
    console.log(member);
    const markupEl =
        `<div class="col-12 col-md-4">
            <div class="card p-2 m-3 bg-info">
                <h5>${member['name']}</h5>
                <div>${member['role']}</div>
                <img class="card bg-info" src="${member['image']}" alt="Member of Team"></div>
            </div>`

    teamEl.insertAdjacentHTML('beforeend', markupEl);

}

/*
Bonus aggiuntivo:
Fare un form che permetta di aggiungere un nuovo membro del team.
Per l’immagine va bene usare semplicemente una url causale da picsum oppure anche la stesse immagine. 
*/

let formEl = addEventListener('submit', function (e){
    
    e.preventDefault(); //solo per fare prove, poi togliere
    
    //console.log('enter on form');
    
    const fullNameEl = document.getElementById('full_name').value;
    const roleEl = this.document.getElementById('role').value;
    console.log(`Full Name: ${fullNameEl} Role: ${roleEl}`);

    let newMember = {name: fullNameEl, role: roleEl, image: 'https://picsum.photos/400/429'};

    team.push(newMember);

    //console.log(team);

    const markupEl =
        `<div class="col-12 col-md-4">
            <div class="card p-2 m-3 bg-info">
                <h5>${newMember['name']}</h5>
                <div>${newMember['role']}</div>
                <img class="card bg-info" src="${newMember['image']}" alt="Member of Team"></div>
            </div>`

    teamEl.insertAdjacentHTML('beforeend', markupEl);

})

