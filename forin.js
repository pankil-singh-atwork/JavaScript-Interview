// used to iterate over the objects
const person = {
  username: "Pankil Singh",
  age: 21,
  address: "Munger , Bihar",
};

for (const itr in person) {
  console.log(`${itr} : ${person[itr]}`);
}
