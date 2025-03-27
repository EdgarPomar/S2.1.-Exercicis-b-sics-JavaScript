// Exercici 1.3: Callbacks

// Exercici 1
// Callback bàsic: Escriu una funció anomenada processar que accepti dos paràmetres: un nombre i una funció de callback. 
// La funció processar ha d'invocar la funció de callback, passant el nombre com a paràmetre.

const processar = (nombre, callback) => callback(nombre);
const duplicar = num => num * 2;
console.log(processar(5, duplicar)); 

// Exercici 2
// Callbacks amb operacions matemàtiques: Escriu una funció calculadora que accepti tres paràmetres: dos nombres i una funció de callback. 
// La funció calculadora ha d'invocar la funció de callback amb els dos nombres com a paràmetres. 
// Després, crida calculadora amb una funció que faci la suma dels dos nombres.

const calculadora = (a, b, operacio) => operacio(a, b);
console.log(calculadora(5, 3, (x, y) => x + y)); 

// Exercici 3
// Ús de callbacks en funcions asíncrones: Escriu una funció esperarISaludar que accepti dos paràmetres: un nom i una funció de callback. 
// La funció ha d'esperar 2 segons i llavors invocar la funció de callback, passant el nom com a paràmetre.

const esperarISaludar = (nom, callback) => {
    setTimeout(() => {
      callback(nom);
    }, 2000); // Espera 2 segons
};

esperarISaludar('Joan', (nom) => {
    console.log(`Hola, ${nom}!`);
});

// Exercici 4
// Callbacks amb arrays: Escriu una funció processarElements que accepti dos paràmetres: un array i una funció de callback. 
// La funció processarElements ha d'invocar la funció de callback per cada element de l'array.

const processarElements = (array, callback) => {
  for (let i = 0; i < array.length; i++) {
    callback(array[i], i, array);
  }
};
const array = [1, 2, 3, 4, 5];
processarElements(array, (element, index) => {
  console.log(`Element a l'índex ${index}: ${element}`);
});

// Exercici 5
// Escriu una funció processarCadena que accepti dos paràmetres: una cadena de caràcters i una funció de callback. 
// La funció processarCadena ha de convertir la cadena a majúscules i llavors invocar la funció de callback amb la cadena transformada.

const processarCadena = (cadena, callback) => {
  const cadenaTransformada = cadena.toUpperCase(); 
  callback(cadenaTransformada); 
};
const cadena = "hola món";
processarCadena(cadena, (cadenaTransformada) => {
  console.log(`La cadena transformada és: ${cadenaTransformada}`);
});
