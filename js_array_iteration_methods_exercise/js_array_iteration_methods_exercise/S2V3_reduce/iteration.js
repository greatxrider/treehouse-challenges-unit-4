const prices = [6.75, 3.10, 4.00, 8.12]; // Total: 21.97

let total = 0;

total = prices.reduce((acc, cur) => acc + cur);

console.log(total);

const names = ['Gary', 'Pasan', 'Gabe', 'Treasure', 'Gengis', 'Gladys', 'Tony'];

let Gnames;

Gnames = names.reduce((acc, cur) => {
    if (cur[0] === 'G') {
        return acc + 1;
    }
    return acc;
});

console.log(Gnames);
