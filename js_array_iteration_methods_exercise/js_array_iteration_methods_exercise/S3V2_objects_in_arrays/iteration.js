const users = [
  { name: 'Samir', age: 27 },
  { name: 'Angela', age: 33 },
  { name: 'Beatrice', age: 42 }
];

const removeSamir = users.filter(user => user.name !== 'Samir');
const userAge = users.map((user) => `${user.name} is ${user.age} years old.`);
const newArray = users.reduce((usersObject, curr) => {
  usersObject[curr.name] = curr.age;
  return usersObject;
}, {})

console.log(removeSamir);
console.log(userAge);
console.log(newArray);
