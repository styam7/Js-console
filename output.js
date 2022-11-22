1. //output with var

// obj1 = {a: 12}
// const obj2 = obj1

// obj2.a = 20; 

// console.log(obj1)
// console.log(obj2)

// let obj1 // output will be referece error 
// we can not access let variable before initialization

2. //output with var

// obj1 = {a: 12}
// const obj2 = obj1 // here we creating a shallow copy

// obj2.a = 20; 

// console.log(obj1)
// console.log(obj2)

// var obj1  // output will be {a: 20}, {a: 20}

3. //output with deep copy

obj1 = {a: 12}
const obj2 = {...obj1}  // here we creating a deep copy

obj2.a = 20; 

console.log(obj1)
console.log(obj2)

var obj1    // output will be {a: 12}, {a: 20}