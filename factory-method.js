class Drink {
    createDrink() { // abstract
        throw new Error("Abstract method 'createDrink' must be implemented");
    }
    prepareWithIce() {
        const drink = this.createDrink();
        drink.prepare();
        drink.addIce();
    }
}

class Coffee {
    prepare() {
        console.log("Preparing coffee...");
    }
    addIce() {
        console.log("Adding ice to coffee...");
    }
}
class Juice {
    prepare() {
        console.log("Preparing juice...");
    }
    addIce() {
        console.log("Adding ice to juice...");
    }
}

class CoffeeDrink extends Drink {
    createDrink() {
        return new Coffee();
    }
}
class JuiceDrink extends Drink {
    createDrink() {
        return new Juice();
    }
}



function clientCode(drinkType) {
    let drink;

    if (drinkType === 'coffee') {
        drink = new CoffeeDrink();
    } else if (drinkType === 'juice') {
        drink = new JuiceDrink();
    } else {
        throw new Error(`Unknown drink type: ${drinkType}`);
    }

    drink.prepareWithIce();
}

clientCode("coffee");
clientCode("juice");
