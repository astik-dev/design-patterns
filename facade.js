class TV {

    turnOn() {
        console.log("TV is now ON.");
    }
    turnOff() {
        console.log("TV is now OFF.");
    }
    setInputSource(source) {
        console.log(`TV input source set to ${source}`);
    }
    setBrightness(brightnessLevel) {
        console.log(`TV brightness set to ${brightnessLevel}`);
    }
}

class StreamingDevice {

    turnOn() {
        console.log("Streaming device is now ON.");
    }
    turnOff() {
        console.log("Streaming device is now OFF.");
    }
    streamMovie(movieName) {
        console.log(`Streaming movie: ${movieName}`);
    }
    streamMusic(musicName) {
        console.log(`Streaming music: ${musicName}`);
    }
}

class SoundSystem {

    turnOn() {
        console.log("Sound system is now ON.");
    }
    turnOff() {
        console.log("Sound system is now OFF.");
    }
    setVolume(volumeLevel) {
        console.log(`Sound system volume set to ${volumeLevel}`);
    }
    setMode(mode) {
        console.log(`Sound system set to ${mode} mode.`);
    }
}


class HomeTheaterSystem {

    constructor(tv, streamingDevice, soundSystem) {
        this.tv = tv;
        this.streamingDevice = streamingDevice;
        this.soundSystem = soundSystem;
    }

    turnOnSystem() {
        this.streamingDevice.turnOn();
        
        this.tv.turnOn();
        this.tv.setInputSource("HDMI 1");
        this.tv.setBrightness(100);
        
        this.soundSystem.turnOn();
        this.soundSystem.setVolume(50);
    }

    turnOffSystem() {
        this.tv.turnOff();
        this.streamingDevice.turnOff();
        this.soundSystem.turnOff();
    }

    watchMovie(movieName) {
        this.soundSystem.setMode("movie");
        this.streamingDevice.streamMovie(movieName);
    }

    listenToMusic(musicName) {
        this.soundSystem.setMode("music");
        this.streamingDevice.streamMusic(musicName);
    }
}



function clientCode() {

    const homeTheater = new HomeTheaterSystem(new TV(), new StreamingDevice(), new SoundSystem());

    console.log("\nTurning on the system...\n");
    homeTheater.turnOnSystem();

    console.log("\nPlaying movie...\n");
    homeTheater.watchMovie("Inception");

    console.log("\nSwitching to music...\n");
    homeTheater.listenToMusic("Bohemian Rhapsody");

    console.log("\nTurning off the system...\n");
    homeTheater.turnOffSystem();
}

clientCode()
