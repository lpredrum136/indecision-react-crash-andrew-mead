// arguments object = no longer bound

const add = (a, b) => {
    // console.log(arguments);
    return a + b;
};

console.log(add(12, 5, 1001));

// this keyword = no longer bound

const user = {
    name: 'Andrew',
    cities: ['Philadelphia', 'New York', 'Dublin'],
    printPlacesLived() {
        return this.cities.map((city) => this.name + ' has lived in ' + city);

        // this.cities.forEach((city) => {
        //     console.log(this.name + ' has lived in ' + city);
        // });
    }
};

console.log(user.printPlacesLived());

const multiplier = {
    // numbers
    numbers: [1, 2, 3],
    // multiplyBy
    multiplyBy: 4,
    // multiply - return new array where the number have been multiplied
    /*multiply() {
        const result = this.numbers.map((number) => {
            return number * this.multiplyBy;
        });
        return result;
    }*/

    // make it better
    multiply() {
        return this.numbers.map(number => number * this.multiplyBy);
    }

};

console.log(multiplier.multiply());