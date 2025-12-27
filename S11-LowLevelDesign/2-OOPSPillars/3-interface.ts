abstract class Vehicle {
    make : string ; 
    model : string ;


    constructor(make : string , model : string) {
        this.make = make;
        this.model = model;
    }


    abstract start() : void ;

    stop() : void {
        console.log(`Stopping the vehicle: ${this.make} ${this.model}`);
    }

    takeOff() : void {
        console.log(`Taking off the vehicle: ${this.make} ${this.model}`);
    }

    cruise() : void {
        console.log(`Cruising the vehicle: ${this.make} ${this.model}`);
    }

    land() : void { 
        
    }

    row() : void {

    }
}

interface drivable {
    drive() : void ; 
}

interface flyable {
    fly() : void ; 
}

interface rowable {
    row() : void ; 
}



class Bus extends Vehicle {
    constructor(make : string , model : string) {
        super(make , model)
    }

    drive() : void {
        console.log(`Driving the bus: ${this.make} ${this.model}`);
    }
}

class Train extends Vehicle {
    constructor(make : string , model : string) {
        super(make , model)
    }   
    drive() : void {
        console.log(`Driving the train: ${this.make} ${this.model}`);
    }

}

class Car extends Vehicle implements flyable {
    constructor(make : string , model : string) {
        super(make , model)
    }

    drive() : void {
        console.log(`Driving the car: ${this.make} ${this.model}`);
    }

    fly() : void {
        console.log(`Flying the car: ${this.make} ${this.model}`);
    }
}


