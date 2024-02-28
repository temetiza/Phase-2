// // //Function //

// // function adder(x, y) {
// //   console.log(x + y);
// // }
// // adder(5, 4); // prints 9, the sum of 5 and 4
// // // return
// // function myAdditionCalculator(a, b) {
// //   var c;
// //   c = a + b;
// //   return c;
// // }
// // // Now, let us use the returned sum to do something else
// // var numberOne;
// // var numberTwo;
// // var total;
// // numberOne = 4;
// // numberTwo = 5;
// // total = myAdditionCalculator(numberOne, numberTwo);
// // console.log(total);
// // // function myCar() {
// // //   var firstCar = "Toyota"; // has function Scope
// // //   let secondCar = "Honda"; // has function Scope
// // //   var thirdCar = "Volvo"; // has function Scope
// // // }
// // // console.log(myCar(firstCar)); // prints “firstCar is not defined”
// // // more function

// // var a = 5;
// // let b = 3;
// // b = "7";
// // b = 10;
// // var c;
// // c = a + b;
// // console.log(a);
// // var fullName = "";
// // var firstName = "Adem";
// // var lastName = " Wolde";
// // fullName = firstName + lastName;
// // console.log(fullName);
// // if ("false") {
// //   console.log("Hello");
// // } else {
// //   console.log("Olla");
// // }
// // var aa = "";
// // var bb = " Another Text";
// // var cc = aa + bb;
// // console.log(cc);
// // //
// // // Arithmetic operators
// var a, b, c, d, e;
// a = 6;
// b = 50;
// c = a + b;
// d = a * b;
// console.log(d);
// e = (a + b) * (c / d);
// console.log(e);
// // Comparison Operators
// var a = "A";
// var b = 65;
// console.log(a == b);

// // // ** Why is 5 less than A
// // // // Logical Operators

// console.log(1 == 1 || 2 == 2 || 3 == 7);
// //  Weak Typing
// var a = 5;
// var b = "T";
// a = true;
// console.log(a);
// var c = a + b;
// console.log(c);
// if (1 == 1) {
//   console.log("Working");
// }
// // // // Array
// // // // Declaring empty array
// let exampleArray = [];
// // // // Adding values to an Array
// exampleArray = ["white", "black", "orange"];
// // // Accessing array values with index
// console.log(exampleArray);
// console.log(exampleArray[1]);

// // // // Declaring/defining  a function
// function onn(id) {
//   console.log("We are on .. ");
//   console.log("The id is " + id);
// }
// // // // Calling/using a function
// onn(345698);
// onn(564321);

// // // // Functions with arguments
// // function myFunctionNameWithArgument(a) {
// //   console.log(a);
// // }
// // myFunctionNameWithArgument("Abebe beso bela");
// function myAdditionCalculator(a, b) {
//   var c;
//   c = a + b;
//   console.log(c);
// }
// myAdditionCalculator(45, 99);

// // Functions that return a value

// function myAdditionCalculator2(a, b) {
//   var c;
//   c = a + b;
//   var d = (a + b) / 2;
//   return [c, d];
// }
// // // // How to use it

// var a = myAdditionCalculator2(45, 99);
// console.log(a);

// // My average calculator

// function myAverageCalculator(a, b) {
//   var c = (a + b) / 2;
//   return c;
// }
// var ave = myAverageCalculator(40, 60);
// console.log(ave);

// // // // Another way of writing the same function
// function myAverageCalculator2(a, b) {
//   var c = myAdditionCalculator2(a, b) / 2;
//   return c;
// }
// var ave = myAverageCalculator2(40, 60);
// console.log(ave);
// // conditionall statements
// // var i;
// // for (i = 1; i <= 55; i++) {
// //   console.log("Student " + i + " raise your hand");
// // }
// // var a = 90;
// // console.log("Student " + a + " raise your hand");

// // If Statement
// var pass = 50;
// var score = 49;
// if (score >= pass) {
//   console.log("Hey you passed");
// }
// if (score < pass) {
//   console.log("Failed");
// }
// function checkIfPassed(pass, score) {
//   if (score >= pass) {
//     console.log("Hey you passed");
//   }
//   if (score < pass) {
//     console.log("Failed");
//   }
// }
// checkIfPassed(50, 49);

// // If ... Else Statement
// var pass = 50;
// var score = 72;
// if (score >= pass) {
//   console.log("Hey you passed");
// } else {
//   console.log("You failed");
// }
// function checkIfPassedIfElse(pass, score) {
//   if (score >= pass) {
//     console.log("Hey you passed");
//   } else {
//     console.log("You failed");
//   }
// }
// checkIfPassedIfElse(50, 99);

// // Example 2
// // var x = 90;
// // var y = 80;
// // var z = 70;
// // var score = 76;
// // if (score >= x) {
// //   alert("You got A");
// // } else if (score >= y) {
// //   alert("You got B");
// // } else if (score >= z) {
// //   alert("You got C");
// // } else {
// //   alert("You Failed!");
// // }
// function giveGrade(score) {
//   var x = 90; // A
//   var y = 80; // B
//   var z = 70; // C
//   if (score > 100 || score < 0) {
//     console.log("Not a valid Entry");
//   } else {
//     if (score >= x) {
//       console.log("You got A");
//     } else if (score >= y) {
//       console.log("You got B");
//     } else if (score >= z) {
//       console.log("You got C");
//     } else {
//       console.log("You Failed!");
//     }
//   }
// }
// giveGrade(45);

// // // Ternary Operator
// var pass = 50;
// var score = 82;
// var result = "";
// console.log(result);

// // // Switch Statement
// var greetings = "";
// var timeOfDay;
// timeOfDay = "morning";

// switch (timeOfDay) {
//   case "morning":
//     greetings = "Good morning";
//     break;

//   case "afternoon":
//     greetings = "Good afternoon";
//     break;

//   case "evening":
//     greetings = "Good evening";
//     break;

//   default:
//     greetings = "Hi there";
//     break;
// }

// console.log(greetings);

// // // for loop

// // Example 1
// var i;
// for (i = 1; i < 4; i++) {
//   console.log(i);
// }

// // // Example 2
// var someNumbers = [7, 58, 27];
// console.log(someNumbers);
// var lengthOfArray = 3;
// var loopNumber = 0;
// var someMessage = "";
// var i;

// for (i = 0; i < 3; i++) {
//   loopNumber = i + 1;

//   someMessage = "Loop " + loopNumber + ":" + someNumbers[i];
//   console.log(someMessage);
// }

// // Example 3
// // Problem solving example (From Edabit)
// // Create a function that takes a number as an argument. Add up all the numbers from 1 until the number you passed to the function. For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.
// // - Use for loop for one
// // - Think of a better way to do this

// // Examples
// // addUp(4) ➞ 10
// // addUp(13) ➞ 91
// // addUp(600) ➞ 180300

// // Psudo code
// // Check if the provided value is a number
// // - Declare a function that takes a single argument
// // - Check if the passed argument is a number
// //   - If Not, return "Please pass a number"
// // - Declare a variable to save the total sum. (initially 0)
// // - Use for loop that starts from 1 and ends at the given number. Loop should increment by 1
// // - Add the value of the var i on the total sum variable
// // - Return the total sum

// function addAll(num) {
//   if (typeof num !== "number") {
//     return "Please enter a number value";
//   }
//   let sum = 0;
//   for (let i = 1; i <= num; i++) {
//     sum = sum + i;
//     console.log(i);
//   }

//   return sum;
// }
// console.log(addAll(5));
