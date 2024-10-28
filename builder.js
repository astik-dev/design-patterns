class Computer {
    cpu;
    ram;
    hdd;
    ssd;
    gpu;
    os;

    showConfig() {
        console.log(`CPU: ${this.cpu}`);
        console.log(`RAM: ${this.ram}`);
        if (this.hdd) console.log(`HDD: ${this.hdd}`);
        if (this.ssd) console.log(`SSD: ${this.ssd}`);
        console.log(`GPU: ${this.gpu}`);
        console.log(`OS: ${this.os}`);
    }
}

class ComputerBuilder {

    computer;

    constructor() {
        this.reset();
    }

    setCPU(cpu) {
        this.computer.cpu = cpu;
        return this;
    }
    setRAM(ram) {
        this.computer.ram = ram;
        return this;
    }
    setHDD(hdd) {
        this.computer.hdd = hdd;
        return this;
    }
    setSSD(ssd) {
        this.computer.ssd = ssd;
        return this;
    }
    setGPU(gpu) {
        this.computer.gpu = gpu;
        return this;
    }
    setOS(os) {
        this.computer.os = os;
        return this;
    }

    reset() {
        this.computer = new Computer();
    }

    getResult() {
        const { computer } = this;
        this.reset();
        return computer;
    }
}

class Director {

    constructor(builder) {
        this.builder = builder;
    }

    buildGamingComputer() {
        this.builder.reset();
        this.builder
            .setCPU("Intel Core i9")
            .setRAM("64GB")
            .setSSD("2TB")
            .setGPU("NVIDIA RTX 4090")
            .setOS("Windows 11 Pro");
    }
    buildOfficeComputer() {
        this.builder.reset();
        this.builder
            .setCPU("Intel Core i5")
            .setRAM("16GB")
            .setSSD("256GB")
            .setGPU("Intel Integrated Graphics")
            .setOS("Windows 11");
    }
    buildBudgetComputer() {
        this.builder.reset();
        this.builder
            .setCPU("Intel Core i3")
            .setRAM("8GB")
            .setHDD("128GB")
            .setGPU("Intel Integrated Graphics")
            .setOS("Linux")
    }
}



function clientCodeUsingDirector(buildType) {
    
    const builder = new ComputerBuilder();
    const director = new Director(builder);
    
    switch (buildType) {
        case "gaming":
            director.buildGamingComputer();
            break;
        case "office":
            director.buildOfficeComputer();
            break;
        case "budget":
            director.buildBudgetComputer();
            break;
        default:
            console.error("Error: Unknown build type");
            return;
    }

    const computer = builder.getResult();
    computer.showConfig();
}

function clientCodeDirectBuild() {
    
    const builder = new ComputerBuilder();
    
    const computer = builder
        .setCPU("AMD Ryzen 7")
        .setRAM("32GB")
        .setHDD("2TB")
        .setSSD("512GB")
        .setGPU("Radeon RX 7900 XTX")
        .setOS("Windows 11 Home")
        .getResult();

    computer.showConfig();
}

console.log("Gaming computer:");
clientCodeUsingDirector("gaming");

console.log("\nOffice computer:");
clientCodeUsingDirector("office");

console.log("\nBudget computer:");
clientCodeUsingDirector("budget");

console.log("\nDirect build:");
clientCodeDirectBuild();
