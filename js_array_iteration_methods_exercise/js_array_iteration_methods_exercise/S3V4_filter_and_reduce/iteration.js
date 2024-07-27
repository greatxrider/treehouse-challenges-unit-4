const products = [
  { name: 'hard drive', price: 59.99 },
  { name: 'lighbulbs', price: 2.59 },
  { name: 'paper towels', price: 6.99 },
  { name: 'flatscreen monitor', price: 159.99 },
  { name: 'cable ties', price: 19.99 },
  { name: 'ballpoint pens', price: 4.49 },
];

let lowestPrice;

// Result: { name: 'paper towels', price: 6.99 }

lowestPrice = products
  .filter((price) => {
    if (price.price < 10) {
      return price;
    }
  }).reduce((arr, curr) => {
    if (arr.price > curr.price) {
      return arr;
    }
    return curr;
  });

console.log(lowestPrice);

let greaterThanTenTotal;

greaterThanTenTotal = products
  .filter((product) => product.price > 10)
  .reduce((total, product) => total + product.price, 0)
  .toFixed(2);

console.log(greaterThanTenTotal);
