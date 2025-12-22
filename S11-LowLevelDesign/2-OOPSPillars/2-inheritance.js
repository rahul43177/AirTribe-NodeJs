class Animal {
  #name;
  constructor(name, sound) {
    this.#name = name;
    this.sound = sound;
  }
  speak() {
    console.log(`${this.#name} says ${this.sound}`);
  }

  speak() {
    console.log(`${this.#name} makes a sound: ${this.sound}`);
  }
  
  //getter method 
  getName() {
    return this.#name;
  }

  //setter method -- we can add validation here and some logic here 
  setName(newName) {
    if (typeof newName === "string" && newName.length > 0) {
      this.#name = newName;
    } else {
      console.log("Invalid name");
    }
  }

  breathe() {
    console.log(`${this.#name} is breathing.`);
  }
}


class Mammal extends Animal {
    constructor(name, sound,type) {
        super(name, sound);
        this.type = type; //e.g., "Dog", "Cat"
    }

    breathe() {
        
        console.log(`${this.getName()} the ${this.type} is breathing.`);
    }

}


class Human extends Mammal {
    constructor(name , sound , type) {
        super(name , sound , type); 
    }

    think() {
        console.log(`${this.getName()} is thinking.`);
    }
}

const rahul = new Human("Rahul", "Hello", "Human");

rahul.speak();

