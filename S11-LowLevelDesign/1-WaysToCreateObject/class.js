// //this is object 
// const car = {
//     make : "Toyota" , 
//     model : "Camary" , 
//     year : 2023 , 
//     start : function() {
//         console.log(`${this.make} ${this.model} is starting`)
//     } , 
//     drive : function(speed) {
//         console.log(`${this.make} ${this.model} is driving at ${speed} km/h.`)
//     }
// }


// car.start();
// car.drive();


// //using constructor 
// function Car(make , model , year) {
//     this.make = make 
//     this.model = model 
//     this.year = year 
//     this.start = function() {
//         console.log(`${this.make} ${this.model} is starting`)
//     }
//     this.drive = function(speed) {
//         console.log(`${this.make} ${this.model} is driving at ${speed} km/h.`)
//     };
// }


// const myCar = new Car("Tata" , "Nano" , 2023); 

// myCar.start();
// myCar.drive(60);



//new es6 - class keyword 
class Car {
    constructor(make , model , year) {
        this.make = make 
        this.model = model 
        this.year = year 
    }

    start() {
        console.log(`${this.make} ${this.model} is starting`)
    }

    drive(speed) {
        console.log(`${this.make} ${this.model} is driving at ${speed} km/h.`)
    };
}

const myCar = new Car("Honda" , "Civic" , 2022);

myCar.start();
myCar.drive(80);

myCar.model = "Fortuner"; //modifying property
console.log(myCar.model);