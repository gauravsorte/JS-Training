// const arr1 = ["Gaurav", "Pune"];
// console.log(typeof arr1);
// console.log('arr1: ', arr1);

// array ---> objects ---> null
// string -->> objects ----> null
// functions --->> objects ---> null

// const myStr = new String("gaurrav");
// console.log('myStr: ', myStr);

// function logMyName(name) {
//   this.name = name;
// }

// logMyName.prototype.logLastName = function (lastName) {
//   return ( `My Last Name is ${lastName}`);
// }
// // logMyName();
// // console.log('logMyName: ', logMyName.prototype);
// // // console.log('logMyName: ', logMyName.logLastName("Sorte"));

// // logMyName.logLastName("Sorte");

// const newObj = new logMyName("Gaurav");
// console.log('newObj: ', newObj);
// console.log('newObj: ', newObj.prototype.logMyName("Sorte"));

// function userData(name, score) {
//   this.name = name;
//   this.score = score;
// }

// userData.prototype.printScore = function() {
//   console.log(`Physics score is ${this.score}`);
// }

// userData.prototype.increaseScore = function() {
//   this.score += 5;
// }

// const u1 = new userData("gaurav", 90);
// console.log('u1: ', u1);
// u1.printScore();
// u1.increaseScore();
// u1.printScore();

// const u2 = new userData("Prashant", 95);
// console.log('u2: ', u2);
// u2.printScore();

//====================================
// const str1 = "   Hello World    ";

// String.prototype.trueLength =  function() {
//   return (this.trim().length);
// };

// console.log((str1.trueLength()));
// const myName = "    Gaurav    ";
// console.log(myName.trueLength());


//=================================================

// function storeName (fName) {
//   console.log('fName: ', fName);
//   console.log(this);
//   this.username = fName;
// }

// function getUserData(username, email, password) {
//   storeName.call(this, username);

//   this.email = email;
//   this.password = password;
// }

// const gauravUser = new getUserData("Gaurav", "g@gmail.com", "12344");
// const prashantUser = new getUserData("Prashant", "p@gmail.com", "12345");
// console.log('gauravUser: ', gauravUser);
// console.log('prashantUser: ', prashantUser);


//=======================================================

// function User(name) {
//   this.name = name;
// }

// function Teachers(subject) {
//   this.subject = subject;
// }

// function Students(marks, name) {
//   this.marks = marks;

// }

// Students.__proto__ = User;
// // Students.setPrototypeOf(User);
// const gaurav = new Students(23, "Gaurav");
// gaurav.setPrototypeOf(User) 
// console.log('gaurav: ', gaurav);

//
///================================================

// class getUserName {
//   constructor(name, email, password) {
//     this.name = name;
//     this.email = email;
//     this.password = password;
//   }

//   printDetails() {
//     console.log(`Name: ${this.name}, email: ${this.email}`);
//   }
// }

// class updateDe

// class User{
//   constructor(name) {
//     this.name = name;
//   }
// }

// class creatUser extends User {
//   constructor(name, email, password) {
//     super(name);
//     this.email = email;
//     this.password = password;
//   }
// }

// const newUser = new getUserName("Gaurav", "g@gmail.com", "12345");
// console.log('newUser: ', newUser);
// newUser.printDetails();

// const newUser = new creatUser("Gaurav", "g@gmail.com", "12345");
// console.log('newUser: ', newUser);


//========================================

// class SubmitButton {
//   constructor() {
//     this.key = "asdfghjkl";
//     this.url = "https://tempUrl.com";
//     console.log('SubmitButton : this: ', this);


//     console.log('this.handleClick.bind(this): ', this.handleClick.bind(this));
//     this.handleClick = this.handleClick.bind(this);
//     document.querySelector("button").addEventListener("click", this.handleClick)
//   }

//   handleClick () {
//     console.log('this: ', this);
//     console.log("Clicked");
//     console.log(this.url);
//   }
// }

// const submitBtn = new SubmitButton();


































/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/