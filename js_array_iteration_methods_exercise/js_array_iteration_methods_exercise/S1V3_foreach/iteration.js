const fruits = ['apple', 'pear', 'cherry'];

let capitalizedFruits = [];

fruits.forEach((fruit) => {
    let capitalizedFruit = fruit.toUpperCase();
    capitalizedFruits.push(capitalizedFruit);
});

console.log(capitalizedFruits);

const prices = [6.75, 3.10, 4.00, 8.12];
let total = 0;

prices.forEach((price) => {
    total += price;
});

console.log(total);

const names = ['Selma', 'Ted', 'Mike', 'Sam', 'Sharon', 'Marvin'];
const namesWithS = [];

names.forEach((name) => {
    if (name[0] === 'S') {
        namesWithS.push(name);
    }
});

console.log(namesWithS);
