console.log("Hello World");

const cars = [
    "Audi",
    "BMW",
    "Merzedes",
    "Volvo",
    "Skoda"

];


//c# => ArrayList // Abstraktion eines Arrays => Erstellt neues größeres Array,

const random = [1, -42, "Hello", true, {name: "Hans"}, [[[]]]];
console.log(random);

//Alternativ
const altCars = new Array("Audi", "BMW");
console.log("altCars:\t" + altCars);



console.log(cars);
console.log(cars.length);

cars.push("Saab");

// cars = ["VW"];  => kann nicht neu Zugewiesen werden wenn Variable cont ist

console.log(cars);
console.log(cars.length);

cars[0] = "Ford";
console.log(cars);
console.log(cars.length);

let myCar = cars[4];
console.log(myCar);




//Array Methodes

//const demoElem = document.getElementById('demo');
//console.log(demoElem);

const demoElem = document.getElementById('demo');
console.log(demoElem);
demoElem.innerHTML = cars;//toString();

//"10" + "10" => "1010";  "Hello" + "World!"

demoElem.innerHTML = cars.join(',  ');
cars.push(42);


//Array.pop => letzes Element entfernen und als Rückgabewert liefern
demoElem.innerHTML = cars;

console.log(cars.pop());
demoElem.innerHTML =cars;
cars.pop();
demoElem.innerHTML = cars;

//Array.shift() => erstes Element wird entfernt und zurückgegeben; Die anderen Elementen rücken aud eunen geringeren Index

cars.shift();
//cars[2] = "";
demoElem.innerHTML = cars;

//Array.shift() => gegenteil von Array.shift()
cars.unshift("Saab");
demoElem.innerHTML = cars;

// Array.splice() => löcht element aus Array von Start positio bis Anzahl Elemnete
//die gelöscht werden sollen.

cars.splice(1,2);
demoElem.innerHTML = cars;

cars.splice(0,2, "VW", "Lamnborghini"); //apaga e agrega tb
demoElem.innerHTML = cars;

//Array.slice() => gibt eine Kopie des Arrays zurück, von Startindex bis Endindex -1

let carsSlice = cars.slice(1,2+1);
let otherSlice = cars.slice(1);


demoElem.innerHTML = cars;
console.log(carsSlice);
console.log(otherSlice);

//JavaScript hat keine Array.max oder Array min Funktion

const fruits = ["Banana", "Grapefruit", "Mango", "Apple"];

fruits.sort()
console.log(fruits);

fruits.reverse();// Kehrt Reihenfolgen um. Sortiert nicht zwangsläufig nach Anfangsbustabe/Höhe einer Zahl.

console.log(fruits);

//Kurzer Exkurs zu Funktionen
function compareNums(param1, param2){
    return param1 - param2;
}

const numbers = [10, 5, 101, 42, 64, 12, 72];
console.log(numbers);
numbers.sort(compareNums);
/*in der sort funtion
let res = compareNums(10, 5); // => 5
*/

//numbers.sort((a, b) => a - b);

numbers.sort(function(a,b) {return a -b})
console.log(numbers);

const carsUnsortedElem = document.getElementById('carsUnsorted');
const carsSortedElem = document.getElementById('carsSorted');

function Cars(){
    this.carsList = [
        {type: "Volvo", year: 2022},
        {type: "Skoda", year: 2018},
        {type: "Sudi", year: 2023},
        {type: "VW", year: 2019}
    ]
    
}

Cars.prototype.toString = function carsToString(){
    let output = "";
    this.carsList.forEach(item =>{
        output += `Type: ${item.type}; Year: ${item.year}\n;`

    });
    return output

}
    
const carObjects = new Cars();

/*const carObjects = [
    {type: "Volvo", year: 2022},
    {type: "Skoda", year: 2018},
    {type: "Sudi", year: 2023},
    {type: "VW", year: 2019}
]*/

carsUnsortedElem.innerHTML = carObjects;   
//console.log(carObjects);
//carObjects.sort((carA, carB) => carA.year - carB.year);

carsSortedElem.innerHTML = carObjects;
console.log(carObjects.toString());
//console.log(carObjects);

