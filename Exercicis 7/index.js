// Exercici 1.7: Promises & Async/Await

// Exercici 1
// Creació d'una Promesa: Crea una promesa que es resolgui després de 2 segons i que retorni la cadena de text 'Hola, món'.

let promesa = new Promise(resolve => setTimeout(() => resolve('Hola, món'), 2000));

// Exercici 2
// Utilització d'una Promesa: Utilitza la promesa creada en l'exercici anterior. Crea un .then que imprimeixi el resultat a la consola.

promesa.then(resultat => console.log(resultat));

// Exercici 3
// Promesa amb reject: Crea una promesa que es resolgui després de 2 segons si l'input és igual a 'Hola', i que la rebutgi si l'input és qualsevol altra cosa.

let validarEntrada = input => new Promise((resolve, reject) => {
    setTimeout(() => input === 'Hola' ? resolve('Entrada vàlida') : reject('Entrada no vàlida'), 2000);
});

validarEntrada('Hola').then(resultat => console.log(resultat)).catch(error => console.error(error));
// Exercici 4
// Ús de async/await: Escriu una funció asíncrona que utilitzi la funció await per a esperar el resultat de la promesa creada a l'exercici 1, 
// i que després imprimeixi aquest resultat a la consola.

async function obtenirMissatge() {
    let resultat = await promesa;
    console.log(resultat);
}
obtenirMissatge()

// Exercici 5
// Gestió d'errors amb async/await: Modifica la funció de l'exercici 4 per a que capturi qualsevol possible error utilitzant un bloc try/catch.

async function obtenirMissatgeSegur() {
    try {
        await obtenirMissatge(); // Crida l'Exercici 4
        console.log('Funció obtenirMissatge() executada correctament.');
    } catch (error) {
        console.error('Error capturat:', error);
    }
}
obtenirMissatgeSegur()

// Exercici 6
// Promise.all: Crea dues promeses que es resolguin després de 2 i 3 segons, respectivament. 
// Utilitza Promise.all per a esperar que ambdues promeses es resolguin, i imprimeix els resultats a la consola.

let promesa1 = new Promise(resolve => setTimeout(() => resolve('Promesa 1 resolta'), 2000));
let promesa2 = new Promise(resolve => setTimeout(() => resolve('Promesa 2 resolta'), 3000));
Promise.all([promesa1, promesa2]).then(resultats => console.log(resultats));
