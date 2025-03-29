const fruits = [
    "Banana",
    "Orange",
    "Apple",
    "Mango"
];

let fruit = fruits.pop();
//The last index are removed
document.getElementById("demo").innerHTML = fruit;



// push is add index at the end of array
let push = fruits.push("Kiwi");

document.getElementById("push").innerHTML = fruits;

