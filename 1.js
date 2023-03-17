const user = {
  name: 'Andrei',
  surname: 'Ivanov',
  age: 18,
  position: 'developer',
};

function dev(user) {
for (let key in user) {
  if (user.hasOwnProperty(key)) {
      console.log(`${key}: ${user[key]}`);
  }   
}
}
dev(user);