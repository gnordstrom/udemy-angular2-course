// Classes allow us to create 'blueprints' for objects
// In Angular 2 we use classes a lot. For example to create Components, Services, Directives, Pipes, ...

// How to create a class

class Car {
    engineName: string;
    gears: number;

    // Creates a private variable speed 
    private speed: number;

    // Takes the argument and assigns it to the speed variable created above
    // Sets the speed = to input, OR 0
    constructor(speed: number) {
        this.speed = speed || 0;
    }

    accelerate(): void {
        this.speed++;
    }

    throttle():void {
        this.speed--;
    }

    getSpeed():void {
        console.log(this.speed);
    }
    // Static means it's set and accessible whenever I want. Don't need to specify when creating new car
    static numberOfWheels(): number {
        return 4;
    }
}

// Instantiate (create) an object from a class

let car = new Car(5);
car.accelerate();
car.getSpeed();

console.log(Car.numberOfWheels());