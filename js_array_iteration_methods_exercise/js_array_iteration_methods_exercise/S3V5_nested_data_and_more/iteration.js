const movies = [
  ['The Day the Earth Stood Still', 'Superman', 'Ghostbusters'],
  ['Finding Dory'],
  ['Jaws', 'On the Waterfront']
];

let flatMovies;

flatMovies = movies.reduce((arr, movies) => {
  return [...arr, ...movies];
}, []);

console.log(flatMovies);

const users = [
  {
    name: 'Samir',
    age: 27,
    favoriteBooks: [
      { title: 'The Iliad' },
      { title: 'The Brothers Karamazov' }
    ]
  },
  {
    name: 'Angela',
    age: 33,
    favoriteBooks: [
      { title: 'Tenth of December' },
      { title: 'Cloud Atlas' },
      { title: 'One Hundred Years of Solitude' }
    ]
  },
  {
    name: 'Beatrice',
    age: 42,
    favoriteBooks: [
      { title: 'Candide' }
    ]
  }
];

// Result: ['The Iliad', 'The Brothers Karamazov', 'Tenth of December', 'Cloud Atlas', 'One Hundred Years of Solitude', 'Candide'];

let flatUsers;

flatUsers = users
  .map((user) => user.favoriteBooks.map((book) => book.title))
  .reduce((arr, titles) => [...arr, ...titles], []);

console.log(flatUsers);
