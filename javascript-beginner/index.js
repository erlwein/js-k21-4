//var name = "Rodrigo";

let username = "Rodrigo Erlwein";
const alter= 30;


console.log(username, alter)

//var x =1;
//if (x=1){
//    var x = 2;
//    console.log(x)

//}
//console.log(x);

// Variablen in Javascript haben keinen festen Typen

console.log(window.location)

let foo =42;
console.log(foo);
foo = "bar";
console.log(foo);

/*if (true){
    let window = "true";
}

console.log(window);*/

let myBoolean = true;
myBoolean = false;
// myBoolean = "ABC";

let myNumber = 42;
myNumber = 42.1337;
myNumber = -31;
let maxInt = Number.MAX_SAFE_INTEGER / 1.3;
console.log(maxInt);

let myBigInt = Number.MAX_SAFE_INTEGER + Number.
MAX_SAFE_INTEGER;
let myOtherBigint = 11n;
console.log(myBigInt);

let myString = "Hello World!";

myString = 'Abc';
myString = 'Und ich sage: "Feierabend"';

let myIntString = `Hallo, mein name ist ${username}`;

console.log(myString);
console.log(myIntString);

let myNull = null;
console.log(myNull);


let myUndefined = undefined;
//console.log(xyz);

let myObj = {}
//myObj = Object;

let myPerson= {
    name: "John",
    age : 42
}

/*let myPerson= {
    "name": "John",
    "age" : 42
}*/

myPerson.age += 1;
console.log(myObj);
console.log(myPerson);
console.log(myPerson.age);
