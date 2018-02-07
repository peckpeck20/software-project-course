//classes
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
export  class Drivechain {
    constructor(gears){
        this.gears = gears;
        this.type = "automatic";   
    }
    //class instance method
    showType() {
        alert(this.type);
    }

    //getters n setters
    getType() {
        return this.type;
    }
    setType(value) {
        this.type = value;
    }
    getGears() {
        return this.gears;
    }
    toString(){
        console.log(`Drivechain specs ${this.gears} ${this.type}`)
    }
}

var testD = new Drivechain(6);
testD.toString();
console.log(testD);
//set diffent value
testD.setType("manual");
console.log(testD);

//method call
//testD.showType();

//class inheritance
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/extends 
export class Car extends Drivechain {
    constructor(brand,model,color,type,gears) {
        //super needed to refer to upper class
        super(type,gears);
        this.brand = brand;
        this.model = model;
        this.color = color;
    }

    getBrand() {
        return this.brand;
    }
    setBrand(value) {
        this.brand = value;
    }
    getModel() {
        return this.model;
    }

    getColor() {
        return this.color;
    }

    toString() {
        console.log(`car specs:  ${this.brand} ${this.model} ${this.color} ${this.type} ${this.gears}`);
    }
}

export var  createCar = () => {
    const honda = new Car('honda','vic','green',6);
    honda.toString();
};

