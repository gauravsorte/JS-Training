
// console.log(" c : ", typeof c);
// console.log(" b : ", typeof b);
// let a = "Gaurav";
// let b = 1234;
// let boolVar = true;
// var c = "Gaurav";
// const d = null;
// d = 123;
// console.log(" String : ", typeof a);
// console.log(" d : ", typeof d);
// let, const, var
//=======================================================
// let ob1 = {"name": "Gaurav", "lastName": "Sorte"};
// console.log('ob1: ', typeof ob1);
// let arr = ["name", 1, true, null, undefined];
// console.log('arr: ', typeof arr);

//================================================

// let a = 123.12;
// console.log("String() : ", String(a), typeof String(a));
// console.log("toString() : ", a.toString(), typeof a.toString());

// let b = "1234";
// let boolNum = false;
// console.log(Number(boolNum), typeof Number(boolNum));
// console.log(parseInt(boolNum), typeof parseInt(boolNum));
// console.log(+boolNum, typeof +boolNum);


//================================================
// let a = 10;
// let b = 10;

// console.log(a >= b);

//================================================

// let a = 10;
// if(a) {

// } else {

// }
// console.log(a ? "true" : "false");

// for(let i = 0; i<10; i++ ) {
//   console.log("i: ", i);
// } 

// while(a > 0) {
//   console.log("A ", a);
//   a--;
// }


//================================================

// console.log('foo: ', foo);
// function foo(param) {
//   //do somthing
// }

// foo();

// const foo1 = (params1) => {
//   params1 = "Sorte";
// }
// // let obj1 = {
// //   "name": "Gaurav"
// // }
// let obj1 = "gaurav"
// foo1(obj1);
// console.log(obj1);

// foo1(10, );


//================================================
// const arr = ["Jan", "Feb", "March", "April", "May"];
// const numArr = [1,2,3,4,5,6];
// // arr.pop();
// // console.log(arr.pop());
// const arr2 = numArr.map((item) => {
//   return item*2
// })
// console.log('arr2: ', arr2);
// const arr3 = numArr.filter((item) => {
//   return item%2 !== 0;
// })

// console.log('arr3: ', arr3);


//================================================

// const arr = ["Jan", "Feb", "March", "April", "May"];
// const obj1 = {"name": "Gaurav", "lastName": "Sorte"}
// const obj2 = {...obj1};
// console.log('obj2: ', obj2);
// const func1 = (arr, ...param) => {
//   console.log('param: ', param);
//   arr.pop();
//   arr.pop();
//   arr.pop();
// }

// // const arr2 = [...arr];
// // console.log('arr2: ', arr2);
// func1([...arr], 1,2,3);
// // console.log('arr: ', arr);


// const returnName = (name) => {
//   return `Welcome ${name} to JS Training!!`;
// }

// returnName("Gaurav");
// console.log('returnName("Gaurav"): ', returnName("Gaurav"));
// returnName("Sorte");
// console.log('returnName("Sorte"): ', returnName("Sorte"));

//`edit/${id}/...`

//================================================


const promiseObj = new Promise((resolve, reject) => {
  const a = 10, b = 23;
  if(a+b === 30){ 
    resolve("Sum is equal");
  } else {
    reject("Sum is not equal to 30");
  }
})

console.log('promiseObj: ', promiseObj);
promiseObj
.then((res) => {
  console.log('res: ', res);
})
.catch((err) => {
  console.log('err: ', err);
})




























































