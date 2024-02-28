//  algortihm thinking
// Functions and conditional statements - practice exercise
// 1.Define a simple function named myFirst that prints the word "Hello" on the console?
function myFirst() {
  console.log("Hello");
}
myFirst();
// 2.Define a function called mySecond that takes a parameter and prints the parameter on console?

function mySecond(x) {
  console.log("tom is the first");
}
mySecond(6);
// 3.Define a function called myThird that takes a parameter and prints the parameter on the
// console. But, it uses mySecond function to print the parameter on the console?

function myThird() {
  console.log(8);
  return;
}
myThird();
// 4.Write a function named myFourth that takes an array as a parameter and prints only the first
// value of the array on the console?

function myFourth() {
  var mycar = [];
  var mycar = ["BMW", "Honda", "Ford"];
  console.log(mycar);
  console.log(mycar[0]);
}
myFourth();
// 5.Write a function named myFifth that takes an array with two numbers in it as a parameter
// and prints the sum of the two numbers on console
function myFifth(a, b) {
  if (typeof a != "number" || typeof b != "number") {
    return "I can only add numbers. Please provide number values";
  } else {
    return a + b;
  }
}
let add = myFifth(8, 20);
console.log(add);
// 6.Write a function that takes an integer minutes and converts it to seconds.
function minuteToSecondConverter(minutes) {
  if (typeof minutes !== "number") {
    return "You entered a string. Please enter a postive number";
  } else if (minutes < 0) {
    return "You entered a negative number. Please enter a positive number";
  } else {
    return minutes * 60;
  }
}
var converted = minuteToSecondConverter("5");
console.log(converted);

//7. Create a function that takes a number as a parameter, increments the number by +1 and
// returns the result.

function addition(num) {
  num = num + 1;
  console.log(num);
}
addition(5);
// 8.Write a function that takes the base and height of a triangle and returns its area?
function triArea(base, height) {
  if (typeof base !== "number" || typeof height !== "number") {
    return "Please enter a number value";
  } else if (base < 0 || height < 0) {
    return "Please provide only positive numbers";
  } else {
    return (base * height) / 2;
  }
}
var area = triArea("u", 8);
console.log(area);
// 9.Create a function that takes the number of wins, draws and losses and calculates the number of points a football team has obtained so far.

function footballpoint(wins, draws, losses) {
  if (typeof wins !== "number" || typeof draws !== "number") {
    return "Please enter a number value";
  } else if (wins < 0 || draws < 0) {
    return "Please provide only positive numbers";
  } else {
    return 3 * wins + 1 * draws;
  }
}
var points = footballpoint(4, 5, 1);
console.log(points);
function find_max(nums) {
  let max_num = Number.NEGATIVE_INFINITY; // smaller than all other numbers
  for (let num of nums) {
    if (num > max_num) {
      // (Fill in the missing line here)
    }
  }
  return max_num;
}
find_max();