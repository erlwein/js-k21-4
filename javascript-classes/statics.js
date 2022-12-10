class Car {
    static numberCars = 0;

    constructor(make) {
        this.make = make;
        Car.numberCars += 1;
    }


    static beginRace(){
        console.log("The Race has started!");
    }

    static isEqual(x, y){
        return x.make == y.make;

    }

}

/** */

let car1 = new Car("Audi");

let car1_1 = car1;
let car2 = new Car("1024");
let car3 = new Car("1024");
let car4 = new Car ("Audi");

//console.log(car1);
//console.log(car2);
//car1.numbersCars +=1;
//console.log(Car.numberCars);

//car1.beginRAce();   Error
Car.beginRace();
console.log(car1);
console.log(car4);


//****************************** */

console.log((car1 == car4)); // true 
console.log((car1 === car4));
console.log((car1 == car1_1));
console.log((car1 === car1_1));

//Ist der Wet/Werte der Instanzen gleich?
console.log(Car.isEqual(car1, car4));
console.log(Car.isEqual(car2, car3));


let varA = 10;
let varB= "10";
console.log(varA == varB);
console.log(varA === varB);


