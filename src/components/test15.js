const user1 = {
  name: "Dinesh",
  age: 28,
  address: {
    city: "Mumbai",
    state: "MH",
  },
};

const user2 = JSON.parse(JSON.stringify(user1));

user2.name = "Diplo";
user2.address.city = "Pune";
console.log(user1);
console.log(user2);
