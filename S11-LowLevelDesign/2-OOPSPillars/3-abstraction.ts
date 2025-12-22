class Vehicle {
  make: string;
  model: string;

  constructor(make: string, model: string) {
    this.make = make;
    this.model = model;
  }

  start(): void {
    console.log(`Starting the vehicle: ${this.make} ${this.model}`);
  }

 stop(): void {
    console.log(`Stopping the vehicle: ${this.make} ${this.model}`);
  }
}


class Bike extends Vehicle {
    constructor(make : string , model : string) {
        super(make , model)
    }
    
}
