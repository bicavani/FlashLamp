function Battery() {

    this.setEnergy = function (energy) {
        this.energy = energy;
    };
    this.getEnergy = function () {
        return this.energy;
    };
    this.decreaseEnergy = function () {
        if (this.energy > 0) {
            this.energy--;
        }
    }
}

function FlashLamp() {

    this.setBattery = function (battery) {
        this.battery = battery;
    };
    this.getBatteryInfo = function () {
        return this.battery.energy;
    };
    this.light = function () {
        if (this.status) {
            alert("Lighting");
        }
        else alert("Not lighting");
    };
    this.turnOn = function () {
        this.status = true;
    };
    this.turnOff = function () {
        this.status = false;
    };
}

let battery = new Battery();
battery.setEnergy(10);
let flashLamp = new FlashLamp();
flashLamp.setBattery(battery);

document.write("Battery info: " + flashLamp.getBatteryInfo() + "<br>");
flashLamp.light();

document.write("Turn On");
flashLamp.turnOn();
flashLamp.light();

document.write("Turn Off");
flashLamp.turnOff();
flashLamp.light();