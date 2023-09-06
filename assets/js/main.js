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
        image: 'wayne-barnett-founder-ceo.jpg'
    },

    //[1]
    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        image: 'angela-caroll-chief-editor.jpg'
    },

    //[2]
    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        image: 'walter-gordon-office-manager.jpg'
    },

    //[3]
    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        image: 'angela-lopez-social-media-manager.jpg'
    },

    //[4]
    {
        name: 'Scott Estrada',
        role: 'Developer',
        image: 'scott-estrada-developer.jpg'
    },

    //[5]
    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        image: 'barbara-ramos-graphic-designer.jpg'
    }

]

//stampo array
console.log(team);

let membersEl = document.querySelector('.team');

//Stampo in console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
for (const key in team) {
    console.log(team[key]);

    membersEl.append(team[key]);
}

//Stampo le informazioni su DOM sottoforma di stringhe

