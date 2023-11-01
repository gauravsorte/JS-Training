// const ulList = document.querySelector("#ul-list");
// const newLi = document.createElement("li");
// newLi.textContent = "Perfect - ED";
// ulList.appendChild(newLi);
// // console.log('liList: ', liList);

// const liList = document.querySelector(".shm");
// liList.style.color = "red"
// // console.log('liList: ', liList);
// // ulList.removeChild(liList);
// // console.log('ulList: ', ulList.innerHTML);
// // const newText = document.createTextNode(" SHM");
// liList.append(newText);



//Event Listeners...

// const clickmeBtn = document.querySelector("#click-me-btn");
// clickmeBtn.addEventListener("mouseover", () => {
//   // alert("Button Double Clicked")
//   console.log("hovered");
//   clickmeBtn.style.color = "green"
// })

// clickmeBtn.addEventListener("mouseout", () => {
//   // alert("Button Double Clicked")
//   console.log("hovered out");
//   clickmeBtn.style.color = "red"
// })

// clickmeBtn.removeEventListener("mouseover", () => {
// console.log("reomved");
// })


//Form...


// const form = document.querySelector("#myForm");

// form.addEventListener("submit", (event) => {
//   console.log('form: ', form);
//   event.preventDefault();
//   console.log('event: ', event);
//   console.log("Form SUbmitted");
//   const userName = form.elements.username.value;
//   const password = form.elements.password.value;
//   if(!userName) {
//     form.elements.username.style.borderColor = "red";
//   }
//   if(!password) {
//     form.elements.password.style.borderColor = "red";
//   }
//   console.log('form.elements: ', form.elements);
// });


//Optional Chaining
// const obj1 = {
//   name: "Gaurav",
//   lastName: "Sorte",
//   address: {
//     city: "Pune",
//     state: "Maharashtra" 
//   }
// }
// let obj2;

// console.log(obj2?.name);


//destructuring of Objects
// const {name: firstName, lastName} = obj1 || {}
// console.log('firstName: ', firstName);
// console.log('name: ', name);
// console.log('lastName: ', lastName);

// console.log(obj1?.address?.city);

// const {name = "abc", lastName = "def", address: { city, state } = {} } = obj2 || {};
// console.log('address: ', address);
// console.log('name: ', name);
// console.log('lastName: ', lastName);
// console.log('city: ', city);
// console.log('state: ', state);
// const { city, state } = address || {};



// destructuring of Arrays
const arr1 = [1,2,3,4]
const [f1, f2,f3,f4] = arr1;
console.log('f2: ', f2);
console.log('f1: ', f1);
