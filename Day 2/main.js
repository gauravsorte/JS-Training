
// var i = 40;
// console.log('before i: ', i);
// for(var i = 0; i < 10; i++) {
//   const insideVar = 100;
//   console.log("inside i: ", i);
// }

// console.log('insideVar: ', insideVar);
// console.log("outside i: ", i);


// @TODO: Callback Functions

// function sumNum(p1, p2) {
//   console.log("Inside 'a' function");
//   return p1+p2;
// }

// function getSum(param) {
//   return param(10,20);
// }

// const retrivedSum = getSum((p1, p2) => {
//   console.log("Inside 'a' function");
//   return p1+p2;
// })
// console.log('retrivedSum: ', retrivedSum);


// let a = [1,2,3,4,5]

// console.log(a.map((item) => {
//   return item*2;
// }));













// @TODO: Event Loop....

// console.log("Start");

// function a() {
//   console.log("inside function a");
// }
// a();
// console.log("end");

//-------------------------------------

// console.log("Start");

// setTimeout(function cbST() {
//   console.log("inside the SetTimeout");
// }, 0);

// console.log("end");

//-------------------------------------------------

// console.log("Start");

// setTimeout(function cbST() {
//   console.log("inside the SetTimeout");
// }, 5000);

// fetch("https://freeapi.app/")
// .then(function cbF() {
//   console.log("Inside Fetch");
// })

// console.log("End");



//@TODO: Exception Handling

// try {
//   // console.log(10/0);
//   throw "error divide by zero"
// } catch (error) {
//   console.log('error: ', error);
// } finally {
//   console.log("finally block");
// }


//@TODO: Async Await]

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("p1 resolved");
  }, 20000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("p2 resolved");
  }, 50000);
});

//p1 
//p2 alredy resolved 

async function asyncFunction () {
  console.log("inside asyncFunction ");
   await p1.then((res) => {
    console.log('P1 res: ', res);
   });

   await p2.then((res) => {
    console.log('P2 res: ', res);
   });
  // "Promise Resolved"
  console.log("after Promise");
}
// console.log('asyncFunction: ', asyncFunction());
asyncFunction();



// in 10s P1 then at 15th sec P2 resolve 
