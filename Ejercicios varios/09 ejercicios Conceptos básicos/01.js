
// Ejercicio 1

let myFavoriteHero = "Hulk";
let x = 50; 
let h = 5;
let y = 10;
let z = h + y;

//Ejercicio 2

//1.1 Dado el siguiente objeto, cambia el valor de la propiedad age a 25.
const character = {name: 'Jack Sparrow', age: 10};
character.age = 25;

//1.2 Declara 3 variables con los nombres y valores siguientes 
	let firstName = 'Jon'; 
	lastName = 'Snow'; 
	age = 24;     
    //Muestralos por consola de esta forma: 
        'Soy Jon Snow, tengo 24 años y me gustan los lobos.'        
    console.log(`Soy ${firstName} ${lastName}, tengo ${age} años y me gustan los lobos.`);


//1.3 Dado el siguiente código, imprime con un console.log la suma del precio de
//ambos juguetes.
const toy1 = {name: 'Buss myYear', price: 19};
const toy2 = {name: 'Rallo mcKing', price: 29};
console.log(toy1.price + toy2.price);

// 1.4 Dado el siguiente código, actualiza el valor de la variable globalBasePrice a 25000 
//y actualiza la propiedad finalPrice de todos los coches con el valor de su propiedad 
//basePrice más el valor de la variable globalBasePrice.
let globalBasePrice = 10000;
const car1 = {name: 'BMW m&m', basePrice: 50000, finalPrice: 60000};
const car2 = {name: 'Chevrolet Corbina', basePrice: 70000, finalPrice: 80000};



globalBasePrice = 25000;
car1.finalPrice = car1.basePrice + globalBasePrice;
car2.finalPrice = car2.basePrice + globalBasePrice;

//Ejercicio 3

//1.1 Multiplica 10 por 5 y muestra el resultado mediante console.
console.log(10 * 5);


//1.2 Divide 10 por 2 y muestra el resultado en un console.
console.log(10 / 2);

//1.3 Muestra mediante un console el resto de dividir 15 por 9.
console.log(15 % 9);

//1.4 Usa el correcto operador de asignación que resultará en o = 15, 
//teniendo dos variables p = 10 y j = 5.
let p = 10;
let j = 5;
let o = p + j;


//1.5 Usa el correcto operador de asignación que resultará en i = 50,
//teniendo dos variables c = 10 y m = 5.
let c = 10;
let m = 5;
let i = c * m;


//Ejercicio 4

//1.1 Consigue el valor "HULK" del array de avengers y muestralo por consola.
const avengers1 = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
console.log(avengers[0]);

//1.2 Cambia el primer elemento de avengers a "IRONMAN"
const avengers2 = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
avengers[0] = "IRONMAN";

//1.3 console numero de elementos en el array usando la propiedad correcta de Array.
const avengers3 = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
console.log(avengers.length);


//1.4 Añade 2 elementos al array: "Morty" y "Summer". 
//Muestra en consola el último personaje del array
const rickAndMortyCharacters1 = ["Rick", "Beth", "Jerry"];
rickAndMortyCharacters.push("Morty", "Summer");
console.log(rickAndMortyCharacters[rickAndMortyCharacters.length - 1]);

//1.5 Elimina el último elemento del array y muestra el primero y el último por consola.
const rickAndMortyCharacters2 = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];
rickAndMortyCharacters.pop();
console.log(rickAndMortyCharacters[0]);
console.log(rickAndMortyCharacters[ricksAndMortyCharacters.length - 1]);


//1.6 Elimina el segundo elemento del array y muestra el array por consola.
const rickAndMortyCharacters = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];
rickAndMortyCharacters.splice(1, 1);

// Ejercicio 5

const number1 = 10;
const number2 = 20;
const number3 = 2;

// ejemplo
if(number1 === 10){
    console.log('number1 es estrictamente igual a 10')
}

if (numnber2 / number1 === 2) {
  console.log("number2 dividido entre number1 es igual a 2");
}

if (number1 !== number2) {
  console.log("number1 es estrictamente distinto a number2");
}

if (number3 !== number1) {
  console.log("number3 es distinto number1");
}

if (number3 * 5 === number1) {
  console.log("number3 por 5 es igual a number1");
}

if (number3 * 5 === number1 && number1 * 2 === number2) {
  console.log("number3 por 5 es igual a number1 Y number1 por 2 es igual a number2");
}


if (number2 / 2 === number1 || number1 / 5 === number3) {
  console.log("number2 entre 2 es igual a number1 O number1 entre 5 es igual a number3");
}


// Ejercicio 6

//1.1 Crea un bucle for que vaya desde 0 a 9 y muestralo por consola.

for (let i = 0; i <= 9; i++) {
  console.log(i);
}

//1.2 Crea un bucle for que vaya desde 0 a 9 y muestralo por consola solo 
//cuando el resto del numero dividido entre 2 sea 0.

for (let i = 0; i <= 9; i++) {
 if (i % 2 === 0) {
    console.log(i);
  }
}

//1.3 Crea un bucle para conseguir dormir contando ovejas. 
//Este bucle tiene que dar 10 vueltas, es decir, 10 console.log.
//Muestra por consola un mensaje diciendo 'Intentando dormir 🐑' en cada vuelta del bucle 
//y cambia el mensaje en la décima vuelta a 'Dormido!'.

for (let i = 1; i <= 10; i++) {
  if (i === 10) {
    console.log('Dormido!');
  } else {
    console.log('Intentando dormir 🐑');
  }
}


// Ejercicio 7

function getMaxNumber(numberOne, numberTwo) {

  return Math.max(numberOne, numberTwo);
}

// Ejercicio 8

function findLongestWord(param) {
  let longestWord = param[0];
  for (let i = 1; i < param.length; i++) {
    if (param[i].length > longestWord.length) {
      longestWord = param[i];

    }
  }

  return longestWord;
}


// Ejercicio 9

function sumAll(param) {
  let sum = 0;
  for (let i = 0; i < param.length; i++) {
    sum += param[i];
  }

  return sum;

}


// Ejercicio 10

function average(param) {
  let sum = 0;
  for (let i = 0; i < param.length; i++) {
    sum += param[i];

  }

  return sum / param.length;
}


// Ejercicio 11


function averageWord(param) {
  let sum = 0;
  for (let i = 0; i < param.length; i++) {
    if (typeof param[i] === 'number') {
      sum += param[i];
    } else if (typeof param[i] === 'string') {
      sum += param[i].length;
      
    }
  }

  return sum / param.length;
}



// Ejercicio 12

function removeDuplicates(param) {
  for (let i = 0; i < param.length; i++) {
    for (let j = i + 1; j < param.length; j++) {
      if (param[i] === param[j]) {
        param.splice(j, 1);
        j--; 
      }
    }
  }

  return param;
}

// Ejercicio 13

function finderName(param, value) {
  for (let i = 0; i < param.length; i++) {

    if (param[i] === value) {
      return [true, i];
    }

  }

  return false;
}

// Ejercicio 14


function repeatCounter(param) {
  let count = {};
  for (let i = 0; i < param.length; i++) {
    if (count[param[i]]) {
      count[param[i]]++;
    } else {
      count[param[i]] = 1;
    }
  }

  return count;
}

// Ejercicio 15

for (let i = 0; i < products.length; i++) {
  if (products[i].includes('Camiseta')) {

    console.log(products[i]);
  }
}

// Ejercicio 16

const placesToTravel = ['Japon', 'Venecia', 'Murcia', 'Santander', 'Filipinas', 'Madagascar'];

for (const place of placesToTravel) {

  console.log(place);
}


// Ejercicio 17

const alien = {
    name: 'Wormuck',
    race: 'Cucusumusu',
    planet: 'Eden',
    weight: '259kg'
};

for (const key in alien) {

    console.log(key + ': ' + alien[key]);
}


// Ejercicio 18

const placesToTravel = [{id: 5, name: 'Japan'}, {id: 11, name: 'Venecia'}, {id: 23, name: 'Murcia'}, {id: 40, name: 'Santander'}, {id: 44, name: 'Filipinas'}, {id: 59, name: 'Madagascar'}];

for (let i = 0; i < placesToTravel.length; i++) {
  if (placesToTravel[i].id === 11 || placesToTravel[i].id === 40) {
    placesToTravel.splice(i, 1);
    i--; 
  }
}

console.log(placesToTravel);



// Ejercicio 19

const toys = [
  {id: 5, name: 'Buzz MyYear'},
  {id: 11, name: 'Action Woman'},
  {id: 23, name: 'Barbie Man'},
  {id: 40, name: 'El gato con Guantes'},
  {id: 40, name: 'El gato felix'}
];

for (let i = 0; i < toys.length; i++) {
  if (toys[i].name.includes('gato')) {
    toys.splice(i, 1);
    i--; 
  }
}
console.log(toys);


// Ejercicio 20

const popularToys = [];
const toys = [
    {id: 5, name: 'Buzz MyYear', sellCount: 10},
    {id: 11, name: 'Action Woman', sellCount: 24},
    {id: 23, name: 'Barbie Man', sellCount: 15},
    {id: 40, name: 'El gato con Guantes', sellCount: 8},
    {id: 40, name: 'El gato felix', sellCount: 35}
];

for (const toy of toys) {
    if (toy.sellCount > 15) {
        popularToys.push(toy);
    }
}
console.log(popularToys);


// Ejercicio 21


const users = [
  { name: "Tony", years: 43 },
  { name: "Peter", years: 18 },
  { name: "Natasha", years: 14 },
  { name: "Bruce", years: 32 },
  { name: "Khamala", years: 16 },
];

for (const user of users) {
  if (user.years < 18) {
    console.log("Usuarios menores de edad:", user.name);
  }
  
  if (user.years >= 18) {
    console.log("Usuarios mayores de edad:", user.name);
  }
}


// Ejercicio 22

const fruits = ["Strawberry", "Banana", "Orange", "Apple"];
const foodSchedule = [
  { name: "Heura", isVegan: true },
  { name: "Salmon", isVegan: false },
  { name: "Tofu", isVegan: true },
  { name: "Burger", isVegan: false },
  { name: "Rice", isVegan: true },
  { name: "Pasta", isVegan: true },
];

let fruitIndex = 0;

for (let i = 0; i < foodSchedule.length; i++) {
  if (!foodSchedule[i].isVegan) {
    foodSchedule[i].name = fruits[fruitIndex];
    foodSchedule[i].isVegan = true;
    fruitIndex++;
  }
}
console.log(foodSchedule);


// Ejercicio 23

const movies = [
  { name: "Titan A.E.", durationInMinutes: 130 },
  { name: "Nightmare before Christmas", durationInMinutes: 225 },
  { name: "Inception", durationInMinutes: 165 },
  { name: "The Lord of the Rings", durationInMinutes: 967 },
  { name: "Star Wars: A New Hope", durationInMinutes: 214 },
  { name: "Terminator", durationInMinutes: 140 },
];

const peliculasPequenas = [];
const peliculasMedianas = [];
const peliculasGrandes = [];

for (const movie of movies) {
  if (movie.durationInMinutes < 100) {
    peliculasPequenas.push(movie);
  } else if (movie.durationInMinutes >= 100 && movie.durationInMinutes < 200) {
    peliculasMedianas.push(movie);
  } else {
    peliculasGrandes.push(movie);
  }
}

console.log("Películas pequeñas (menos de 100 min):", peliculasPequenas);
console.log("Películas medianas (100 - 200 min):", peliculasMedianas);
console.log("Películas grandes (más de 200 min):", peliculasGrandes);


// Ejercicio 24

const products = [
  { name: "Funko Dr. Strange", sellCount: 10 },
  { name: "Mochila de protones: Ghostbusters", sellCount: 302 },
  { name: "Sable laser FX", sellCount: 23 },
  { name: "Varita de Voldemort", sellCount: 6 },
];

let totalSales = 0;

for (const product of products) {
  totalSales += product.sellCount;
}
console.log(totalSales);

// Ejercicio 25

const products = [
  { name: "Funko Dr. Strange", sellCount: 10 },
  { name: "Mochila de protones: Ghostbusters", sellCount: 302 },
  { name: "Sable laser FX", sellCount: 23 },
  { name: "Varita de Voldemort", sellCount: 6 },
];

let totalSales = 0;

for (const product of products) {
  totalSales += product.sellCount;
}

const averageSales = totalSales / products.length;
console.log(averageSales);


// Ejercicio 26

const goodProducts = [];
const badProducts = [];
const products = [
  { name: "Funko Dr. Strange", sellCount: 10 },
  { name: "Mochila de protones: Ghostbusters", sellCount: 302 },
  { name: "Sable laser FX", sellCount: 23 },
  { name: "Varita de Voldemort", sellCount: 6 },
];

for (const product of products) {
  if (product.sellCount > 20) {
    goodProducts.push(product);
  } else {
    badProducts.push(product);
  }
}


console.log("Good Products:", goodProducts);
console.log("Bad Products:", badProducts);

