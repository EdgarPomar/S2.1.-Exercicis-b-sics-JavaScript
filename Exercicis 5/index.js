// Exercici 1.5: Array transformations

// Exercici 1
// Map: Teniu un array de números [1, 2, 3, 4]. Crea una nova array que contingui el quadrat de cada número.

const numeros2 = [1, 2, 3, 4];
const quadrats = numeros2.map(n => n * n);
console.log(quadrats);

// Exercici 2
// Filter: Teniu una array de números [1, 2, 3, 4]. Crea una nova array que només contingui els números parells.

const numeros3 = [1, 2, 3, 4];
const parells = numeros3.filter(n => n % 2 === 0);
console.log(parells);

// Exercici 3
// Find: Teniu una array de números [1, 10 , 8, 11]. Utilitza la funció find per a trobar el primer número que és major a 10.

const numeros4 = [1, 10, 8, 11];
const primerMajorQue10 = numeros4.find(n => n > 10);
console.log(primerMajorQue10);

// Exercici 4
// Reduce: Teniu una array de números [13, 7, 8, 21]. Fes servir la funció reduce per a calcular la suma total dels números.

const numeros5 = [13, 7, 8, 21];
const sumaTotal = numeros5.reduce((sum, n) => sum + n, 0);
console.log('El resultado es: ' + sumaTotal)

// Exercici 5
// Donat un array "[ 1, 3, 7, 10 ,15, 17, 11, 5, 8, 12, 9 ]", crea una funció en una sola línia que faci el següent:

// - Filtra els nombres majors o iguals a 10.

// - Multiplica cada nombre filtrat per 2.

// - Calcula la suma dels nombres filtrats i multiplicats per 2.

// - La funció ha de retornar el resultat de la suma.

const sumaFiltrats = arr => arr.filter(n => n >= 10).reduce((sum, n) => sum + n * 2, 0);
console.log('La suma total es: ' + sumaFiltrats([1, 3, 7, 10, 15, 17, 11, 5, 8, 12, 9])); 

// Exercici 6
// Every / Some: Usa every i some per a determinar si tots o alguns dels elements de l'array [11, 12, 13, 14] són majors que 10, respectivament

const numeros = [11, 12, 13, 14];
const totsMajorsQue10 = numeros.every(n => n > 10); 
const algunMajorQue10 = numeros.some(n => n > 10);  
console.log(totsMajorsQue10); 
console.log(algunMajorQue10); 
