// function parent () {
//   let a = 10;

//   return function child() {
//     console.log(a);
//   }
// }
// //
// const childFunc = parent();

// console.log('childFunc: ', childFunc());



// function parent () {
//   let a = 10;

//   function child() {
//     console.log(a); // a is pointing to reference
//   }
//   a = 100;
//   child();
// }
// //
// parent();

//=======================================
// function xyz() {
//   // const b = 30
//   function parent () {
//     let a = 10;
  
//      function child() {
//       console.log(a, b);
//     }
//     child();
//   }
//   parent();
// }

//  xyz();



// for(var i = 1; i<= 10; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, i*1000);
// }


// for(var i = 1; i<= 10; i++) {
//   function st (j) {
//     setTimeout(() => {
//       console.log(j);
//     }, j*1000);
//   }
//   st(i);
// }




//=============================================================================================
// Currying


// function multiple(a) {

//   return function (b) {
//     console.log(a*b); // a is pointing to reference
//   }
// }

// const multipleFive = multiple(5);
// multipleFive(10);
// multipleFive(20);

// const obj1 = {
//   name: "Gaurav",
//   lastName: "Sorte",
//   city: "Pune"
// }

// function logUserData(obj) {
//   return function(key) {
//      return obj[key];
//   }
// }

// const myData = logUserData(obj1);
// myData("name")
// console.log('myData("name"): ', myData("city"));


//============
// const mapFunc = (arr, fun) => arr.map(fun)

// function doubleFunc(fun) {
//   return function (arr) {
//     arr.map(fun)
//   }
// }

// function makeDouble(item) {
//   return item * 2;
// }

// const doubleArr = doubleFunc(makeDouble);

// console.log(doubleArr([1,2,3]));

//======================================================================

// console.log('a: ', a);
// let a = 10;



// console.log('b: ', b);
// // console.log('hoist: ', hoist());
// hoist();
// var b = 100;

// function hoist(params) {
//   console.log("inside function");
// } 

// const hoist = () => {
//   console.log("inside function");
// }

import multply, {add, subTwoNum, divideNum, NAME} from "./maths.js";
console.log('NAME: ', NAME);
console.log('divideNum: ', divideNum(20,10));
console.log('multply: ', multply);
console.log('subTwoNum: ', subTwoNum(20,10));

// addTwoNum(10,20);
console.log('addTwoNum(10,20);: ', add(10,20));
