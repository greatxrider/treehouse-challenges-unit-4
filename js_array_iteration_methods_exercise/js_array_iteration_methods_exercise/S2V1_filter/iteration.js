const names = ['Selma', 'Ted', 'Mike', 'Sam', 'Sharon', 'Marvin'];

const startsWithS = name => name.charAt(0) === 'S';
const sNames = names.filter(startsWithS);

console.log(sNames);

const numbers = [1, 2, 3, 4, 5];

const no3 = numbers.filter(number => number === 2);

console.log(no3)

const numbers10 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const even = numbers10.filter(number => number % 2 === 0);

console.log(even);
