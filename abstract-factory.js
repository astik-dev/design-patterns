class ToyotaFactory {
    createSedan() {
        return new ToyotaSedan();
    }
    createHatchback() {
        return new ToyotaHatchback();
    }
    createSUV() {
        return new ToyotaSUV();
    }
}
class NissanFactory {
    createSedan() {
        return new NissanSedan();
    }
    createHatchback() {
        return new NissanHatchback();
    }
    createSUV() {
        return new NissanSUV();
    }
}

class ToyotaSedan {}
class ToyotaHatchback {}
class ToyotaSUV {}

class NissanSedan {}
class NissanHatchback {}
class NissanSUV {}



function clientCode(factory) {
    const sedan = factory.createSedan();
    const hatchback = factory.createHatchback();
    const suv = factory.createSUV();

    console.log(`Created sedan object: ${sedan.constructor.name}`);
    console.log(`Created hatchback object: ${hatchback.constructor.name}`);
    console.log(`Created SUV object: ${suv.constructor.name}`);
}

console.log("Creating Toyota cars:");
clientCode(new ToyotaFactory());

console.log("Creating Nissan cars:");
clientCode(new NissanFactory());
