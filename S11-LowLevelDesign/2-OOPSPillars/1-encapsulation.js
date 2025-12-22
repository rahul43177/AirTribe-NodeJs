//encapsulation 

class Car {
    //we make properties private by using # before property name
    //let's make model property private
    #model;
    //if we make something private , we use it using # inside the class 
    constructor(make , model , year) {
        this.make = make 
        this.model = model 
        this.year = year 
    }

    start() {
        console.log(`${this.make} ${this.#model} is starting`)
    }
    
    drive(speed) {  
        console.log(`${this.make} ${this.#model} is driving at ${speed} km/h.`)
    }

    #injectFuelToEngine(fuelInMl) {
        console.log(`${this.make} ${this.#model} is injecting fuel to engine`); 
    }
}

const myCar = new Car("Honda" , "Civic" , 2022);

myCar.start();
myCar.drive(80);

//private method : injectFuelToEngine is private method

myCar.#injectFuelToEngine(500); //error : we cannot access private method outside class

