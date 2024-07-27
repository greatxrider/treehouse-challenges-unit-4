const userNames = ['Samir', 'Angela', 'Beatrice', 'Shaniqua', 'Marvin', 'Sean'];
// Result: [{name: 'Samir'}, {name: 'Shaniqua'}, {name:'Sean'}];
let newUserList;

newUserList = userNames
    .filter((username) => {
        return username[0] === 'S';
    })
    .map((username) => {
        return { name: username };
    })

console.log(newUserList);


const users = [
    { name: 'Samir', age: 27 },
    { name: 'Angela', age: 33 },
    { name: 'Beatrice', age: 42 },
    { name: 'Shaniqua', age: 30 },
    { name: 'Marvin', age: 23 },
    { name: 'Sean', age: 47 }
];

// Result: ['Angela', 'Beatrice', 'Shaniqua', 'Sean'];

let userOver30;

userOver30 = users
    .filter((user) => {
        if (user.age >= 30) {
            return user.name;
        }
    })
    .map((user) => {
        return user.name;
    });

console.log(userOver30);
