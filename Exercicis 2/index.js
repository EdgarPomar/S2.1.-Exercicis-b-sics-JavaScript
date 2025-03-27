// Exercici 1.2: Operador ternari

// Exercici 1
// Operador ternari bàsic: Escriu una funció potConduir que accepti l'edat com a paràmetre i utilitzi l'operador ternari per determinar si l'usuari pot conduir. 
// Si l'edat és 18 o més, ha de retornar 'Pots conduir'. Si no, ha de retornar 'No pots conduir'.

const potConduir = edat => edat >= 18 ? 'Pots conduir' : 'No pots conduir';
console.log(potConduir(20)); 
console.log(potConduir(16)); 

// Exercici 2
// Ús amb operadors de comparació: Escriu una expressió que utilitzi l'operador ternari per determinar quin dels dos nombres donats (num1 i num2) és més gran. 
// Si num1 és més gran, retorna 'num1 és més gran'. Si no, retorna 'num2 és més gran'.

const compararNumeros = (num1, num2) => num1 > num2 ? 'num1 és més gran' : 'num2 és més gran';
console.log(compararNumeros(10, 5));  // num1 és més gran
console.log(compararNumeros(3, 8));   // num2 és més gran

// Exercici 3
// Ús enllaçat d'operadors ternaris: Escriu una expressió que utilitzi enllaços d'operadors ternaris per determinar si un número és positiu, negatiu o zero.

const determinarSigne = num => num > 0 ? 'Positiu' : num < 0 ? 'Negatiu' : 'Zero';
console.log(determinarSigne(10));  
console.log(determinarSigne(-5));  
console.log(determinarSigne(0));   
// Operador ternari amb funcions: Crea una funció trobarMaxim que accepti tres paràmetres (a, b, c) i utilitzi l'operador ternari per determinar el valor màxim.

const trobarMaxim = (a, b, c) => a > b ? (a > c ? a : c) : (b > c ? b : c); 
console.log(trobarMaxim(3, 7, 5));  
console.log(trobarMaxim(10, 2, 8)); 
console.log(trobarMaxim(1, 6, 6));  

// Exercici 4
// Operador ternari dins un bucle: Escriu una funció parOImpar que accepti un array de números i utilitzi un bucle per a recórrer l'array. 
// Dins del bucle, utilitza l'operador ternari per a determinar si cada número és parell o imparell.

const parOImpar = arr => {
    for (let num of arr) console.log(`${num} és ${num % 2 === 0 ? 'parell' : 'imparell'}`);
};
parOImpar([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  
