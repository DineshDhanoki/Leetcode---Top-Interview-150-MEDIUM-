const user = {
  id: 123,
  name: "Dinesh",
  age: 28,
  address: {
    city: "Mumbai",
    state: "Maharashtra",
  },
};
Object.freeze(user);

user.id = 456;
console.log(user.id);
