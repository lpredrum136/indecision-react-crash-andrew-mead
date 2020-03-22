function square(x) {
    return x * x;
}

console.log(square(6));

const squareArrow = x => x * x;

console.log(squareArrow(9));

const getFirstName = fullName => fullName.split(' ')[0];

console.log(getFirstName('Mike Smith'));