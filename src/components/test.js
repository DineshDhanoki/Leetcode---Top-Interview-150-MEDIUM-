const person = {
  name: "Dinesh",
  age: 30,
  address: {
    street: "Tulinj rd",
    city: "mumbai",
  },
};

const {
  name,
  age,
  address: { street, city },
} = person;

console.log(`Name: ${name}, Age: ${age}, Street: ${street}, City:${city}`);
