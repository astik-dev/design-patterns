class Car {

    constructor(brand, model, color) {
        this.brand = brand;
        this.model = model;
        this.color = color;
    }

    getDetails() {
        return `${this.brand} ${this.model}, ${this.color}`;
    }

    clone() {
        return new Car(this.brand, this.model, this.color);
    }
}



function clientCode() {
    
    const car1 = new Car("Tesla", "Model S", "Red");

    const car2 = car1.clone();
    car2.color = "Blue"; 

    const car3 = car2.clone();
    car3.model = "Cybertruck";

    console.log(car1.getDetails());
    console.log(car2.getDetails());
    console.log(car3.getDetails());
}

clientCode();
