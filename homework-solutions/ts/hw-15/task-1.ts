// 1. Create the IVehicle interface
interface IVehicle {
    getDetails(): string;

    start(): string;
  }

// 2. Create abstract class Vehicle implementing IVehicle

abstract class Vehicle implements IVehicle {
    protected make: string;
    protected model: string;

    constructor(make: string, model: string) {
      this.make = make;
      this.model = model;
    }
  
    start(): string {
      return `The vehicle ${this.make} ${this.model} is starting.`;
    }
  
    abstract getDetails(): string;
}

// 3. Create Car class extending Vehicle

class Car extends Vehicle {
    private year: number;
  
    constructor(make: string, model: string, year: number) {
      super(make, model);
      this.year = year;
    }

    getDetails(): string {
      return `${this.make} ${this.model}, ${this.year}`;
    }
}

// 4. Create a Car object and test it
const myCar = new Car("BMW", "E36", 1997);
  
console.log(myCar.start());          // "The vehicle BMW E36 is starting."
console.log(myCar.getDetails());   // "BMW E36, 1997"