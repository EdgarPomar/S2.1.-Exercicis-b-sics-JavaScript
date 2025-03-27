// Exercici 1.4: Rest & Spread operators

// Exercici 1
// Operador Spread en Arrays: Crea dues arrays, array1 i array2. 
// Utilitza l'operador spread per a crear una tercera array que contingui tots els elements de array1 i array2.

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const arrayCombinada = [...array1, ...array2];
console.log(arrayCombinada); 


// Exercici 2
// Operador Rest en Funcions: Crea una funció 'suma' que utilitzi l'operador rest per a acceptar un nombre indeterminat d'arguments i retornar la seva suma.

const suma = (...numeros) => numeros.reduce((a, b) => a + b, 0);
console.log(suma(1, 2, 3, 4)); 
console.log(suma(5, 10, 15));  
console.log(suma(7));           


// Exercici 3
// Copiant objectes amb Spread: Crea un objecte 'objecte1'. 
// Després crea un segon objecte, 'objecte2', que sigui una còpia de 'objecte1' utilitzant l'operador spread. Canvia una propietat de 'objecte2' i comprova que 'objecte1' no ha canviat.

const objecte1 = {
    nom: 'Joan',
    edat: 30,
    ciutat: 'Barcelona'
};
const objecte2 = { ...objecte1 };
objecte2.edat = 35;
console.log(objecte1); 
console.log(objecte2); 

// Exercici 4
// Rest en Destructuring: Crea una array amb diversos elements. 
// Utilitza destructuring i l'operador rest per a assignar els primers dos elements a variables, i després assignar la resta dels elements a una tercera variable.

const array = [10, 20, 30, 40, 50];
const [primerElement, segonElement, ...resta] = array;
console.log(primerElement);  
console.log(segonElement);   
console.log(resta);         


// Exercici 5
// Spread en Funcions: Crea una funció que accepti tres arguments. 
// Després, crea una array amb tres elements i crida la funció utilitzant l'operador spread amb aquesta array.

const mostrarArgumentos = (arg1, arg2, arg3) => console.log(arg1, arg2, arg3);
const arrays = [10, 20, 30];
mostrarArgumentos(...arrays);

// Exercici 6
// Fusionant Objectes amb Spread: Crea dos objectes amb propietats diferents. 
// Utilitza l'operador spread per a fusionar aquests dos objectes en un de nou.

// Objectes inicials amb propietats diferents
const objecte11 = {
    nom: 'Joan',
    edat: 25
  };
  
  const objecte22 = {
    ciutat: 'Barcelona',
    ocupacio: 'Desenvolupador'
  };
  
 
  const objecteFusionat = {
    ...objecte11,
    ...objecte22
  };
  
  console.log(objecteFusionat);
  