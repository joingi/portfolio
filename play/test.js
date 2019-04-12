var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const person = [
   {name: "john", age: 45},
   {name: "siggi", age: 35},
   {name: "joi", age: 23}
]

// var test = fruits.slice(0,3)


// console.log("Fruits "+fruits);
// console.log("Test "+test);

const moreThen5 = fruits.filter(function (item) {
   return item.length <= 5;
})

console.log(moreThen5);

const legal = person.filter(function (age) {
   return age.age > 23 && age.name == "siggi"

});

console.log(legal);
