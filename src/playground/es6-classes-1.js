class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }

    getGreeting() {
        // return 'Hi I am ' + this.name + '!';
        return `Hi I am ${this.name} !`;
    }

    getDescription() {
        return `${this.name} is ${this.age} year(s) old`;
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);// Call init for the parent Class
        this.major = major;
    }

    hasMajor() {
        return !!this.major;// because !<string> returns false, so !!<string> return true
    }

    getDescription() {// Override
        let description = super.getDescription();
        if (this.hasMajor()) {
            description += `. Their major is ${this.major}`;
        }
        return description;
    }
}

class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }

    getGreeting() {// Override
        let greeting = super.getGreeting();
        if (this.homeLocation) {
            greeting += ` I'm visiting from ${this.homeLocation}`;
        }
        return greeting;
    }
}

const me = new Student('Henry Nguyen', 28, 'Computer Science');
console.log(me.getDescription());

const other = new Student();
console.log(other.getDescription());

const traveler1 = new Traveler('Henry Nguyen', 28, 'Vietnam');
console.log(traveler1.getGreeting());

const traveler2 = new Traveler(undefined, undefined, 'Nowhere');
console.log(traveler2.getGreeting());