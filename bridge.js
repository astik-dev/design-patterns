class DisplayDevice { // abstract

    MAX_BRIGHTNESS;
    MIN_BRIGHTNESS;

    isOn;
    brightness;

    turnOn() { // abstract
        throw new Error("Abstract method 'turnOn' must be implemented");
    }
    turnOff() { // abstract
        throw new Error("Abstract method 'turnOff' must be implemented");
    }

    setBrightness() { // abstract
        throw new Error("Abstract method 'setBrightness' must be implemented");
    }
}

class Monitor extends DisplayDevice {

    MAX_BRIGHTNESS = 1;
    MIN_BRIGHTNESS = 0.1;

    isOn = false;
    brightness = 1;

    turnOn() {
        this.isOn = true;
        console.log("Monitor is powered on");
    }
    turnOff() {
        this.isOn = false;
        console.log("Monitor is powered off");
    }

    setBrightness(level) {
        
        const newBrigtnessLevel =
            Math.max(Math.min(level, this.MAX_BRIGHTNESS), this.MIN_BRIGHTNESS);

        this.brightness = newBrigtnessLevel;

        console.log(`Brightness of the monitor is set to ${newBrigtnessLevel}`);
    }
}

class Projector extends DisplayDevice {

    MAX_BRIGHTNESS = 1;
    MIN_BRIGHTNESS = 0.2;

    isOn = false;
    brightness = 0.8;

    turnOn() {
        this.isOn = true;
        console.log("Projector is powered on");
    }
    turnOff() {
        this.isOn = false;
        console.log("Projector is powered off");
    }

    setBrightness(level) {
        const newBrigtnessLevel =
            Math.max(Math.min(level, this.MAX_BRIGHTNESS), this.MIN_BRIGHTNESS);

        this.brightness = newBrigtnessLevel;
        
        console.log(`Brightness of the projector is set to ${newBrigtnessLevel}`);
    }
}


class RemoteController {

    #BRIGHTNESS_STEP = 0.1;

    constructor(displayDevice) {
        this.displayDevice = displayDevice;
    }

    togglePower() {
        if (this.displayDevice.isOn) {
            this.displayDevice.turnOff();
        } else {
            this.displayDevice.turnOn();
        }
    }

    increaseBrightness() {
        const currentBrightness = this.displayDevice.brightness;
        this.displayDevice.setBrightness(currentBrightness + this.#BRIGHTNESS_STEP);
    }

    decreaseBrightness() {
        const currentBrightness = this.displayDevice.brightness;
        this.displayDevice.setBrightness(currentBrightness - this.#BRIGHTNESS_STEP);
    }
}

class AdvancedRemoteController extends RemoteController {

    setMaxBrightness() {
        this.displayDevice.setBrightness(this.displayDevice.MAX_BRIGHTNESS);
    }

    setMinBrightness() {
        this.displayDevice.setBrightness(this.displayDevice.MIN_BRIGHTNESS);
    }
}



function clientCode() {

    const monitorRemoteController = new RemoteController(new Monitor());
    monitorRemoteController.togglePower();
    monitorRemoteController.decreaseBrightness();
    monitorRemoteController.togglePower();

    const projectorRemoteController = new AdvancedRemoteController(new Projector());
    projectorRemoteController.togglePower();
    projectorRemoteController.setMaxBrightness();
}

clientCode();
