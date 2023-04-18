//this includes the vehicle class as a module
const VehicleModule = require("./vehicle")

class Car extends VehicleModule {
    constructor(make, model, year, color, milage) {
        super(make, model, year, color, milage);
        this.maxPassengers = 5;
        this.passenger = 0;
        this.numberOfWheels = 4;
        this.maxSpeed = 160;
        this.fuel = 10;
        this.scheduleService = false;
    }

    checkService() {
        if (this.milage > 30000) {
            this.scheduleService = true
            return this.scheduleService;
        }
    }

    start() {
        if (this.fuel > 0) {
            console.log("engine has started.");
            return this.scheduleService;
        } else {
            console.log("no fuel");
            return this.started = false;
        }
    }

    loadPassanger(num) {
        if (this.passenger < this.maxPassengers){
            if ((num + this.passenger) <= this.maxPassengers){
                this.passenger = num;
                return this.passenger;
            } else {
                constole.log(this.model + " " + this.make + " not have enough space to take all passengers.");
            }
        } else { 
            console.log(this.model + " " + this.make " is full");
        }
    }
}


//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mercury", "Sedan", "1965", "color", "mileage");

myCar.start()
myCar.loadPassanger()
myCar.stop()
myCar.checkService()

console.log(v.make)