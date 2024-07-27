const arr = [1, 2, 3];

const smallerArr = arr.filter(number => number !== 2);
const incrementedArr = smallerArr.map(number => number + 1);

console.log(incrementedArr); // => [2,4]

const numbers = [1, 1, 2, 3, 4, 3, 5, 5, 6, 7, 3, 8, 9, 10];

const unique = numbers.filter(function (number, index, array) {
    console.log(number);
    console.log(index);
    return index === array.indexOf(number);
});

console.log(unique); // => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
