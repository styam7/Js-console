//objects

// objects is the collection of properties, and a property is an association b/w a key(name) and a value.

//a property value can be fn in that case property is known as method.


1. // objects in js

// const user = {
//     name: "satyam",
//     age: 25
// }

// //modify a property
// user.name = "john"

// //delete a property
// delete user.age

// //how to access object proerty
// console.log(user)


2. //output problem 1

// const func = (function(a) {
//     delete a; // this delete will only use to delete object value and not from a local variable.
//     return a
// })(5)

// console.log(func) // output will be 5 


3. // how to add  like this video proerty in aobject


// const user = {
//     name: "satyam",
//     age: 25,
//     "like this video": true
// }

// //delete this kinf of property
// delete user["like this video"]

// //how to access this key
// console.log(user )

4. //how to dynamically add properties in a object

// const property = 'firstname'
// const name = 'satyam'

// const user = {
//     [property]: name  // always wrap key with square brackets
// }

// console.log(user)

5. // how to iterate through a object

// const user = {
//     name: "satyam",
//     age: 25,
//     asshole: true
// }

// for (key in user){
//     console.log(key) // for key
//     console.log(user[key]) // for value
// }

6. // what will be the output

// const obj ={
//     a: 10,  // if there are two keys with same name, so the first specified key value 
//     b: 20,  // will be replaced by last specified value
//     a: 30
// }

// console.log(obj) // output will be { a: 30, b: 20}

7. // create a fn multiplyByTwo(obj) that multiply all the numeric value by 2

// let nums = {
//     a: 100,
//     b: 200,
//     title: "my nums"
// }
// multiplyByTwo(nums)
// function multiplyByTwo(obj){
//     for (key in obj){
//         if(typeof obj[key] === 'number'){
//             obj[key] = obj[key]*2
//         }
//     }
// }

// console.log(nums)

8. // what will be the output ****** important question

// const a = {}
// const b = {key: 'b'}  // a object can not be converted into a key unless it's a string 
// const c = {key: 'c'}  // so here when it trying to assing a object as a key it will give "[object object]"

// a[b] = 123
// a[c] = 456 
// //so both of these will bwhave like this
// //a"[object object]" = 123

// console.log(a[b]) //output will be 456 

9. // JSON.stringfy and JSON.parse

// const user = {
//     name: "satyam",
//     age: 25
// }

// //stringfy a object
// const str = JSON.stringify(user)
// console.log(str)

// //convert it back to an object
// const abc = JSON.parse(str)
// console.log(abc)

// // we use it to store data in local storage 
// // becoz we can not directry store object in local storage
// localStorage.setItem('test', str)

// console.log(JSON.parse(localStorage.getItem('test')))


10. // output spred operator

//console.log([..."satyam"]) // o/p will be  [s, a, t, y, a, m]

11. // output spred operator

// const user = { name: 'satyam', age: 25 }
// const admin = { admin: true, ...user }

// console.log(admin) // o/p will be { admin: true, name: 'satyam', age: 25}

12. // how to stringify particular properties of an object

// const setting = {
//     username: 'satyam',
//     level: 2,
//     health: 100
// }
// //pass key as second parameter which you want to stringify
// const data = JSON.stringify(setting, ['level', 'health'])
// console.log(data)

13. // o/p b/w normal fn and arrow fn

// const shape = {
//     radius: 10,
//     diameter() {
//         return this.radius * 2;
//     },
//     parameter: () => 2 * Math.PI * this.radius // in arrow fn this keyword refer to global scope
// }

// console.log(shape.diameter())
// console.log(shape.parameter())


14. // destructuring 

// taking out the specific property from an object in called destructuring

// let user = {
//     name: 'satyam',
//     age: 25,
//     fullname: {
//         firstname: 'satyam',
//         lastname: 'singh'
//     }
// }
// // how to destucture
// const { name } = user
// console.log(name)
// // how to rename
// const { name: myName} = user
// console.log(myName)

// //nested destructuring

// const { fullname: { firstname, lastname}} = user
// console.log(lastname)

15. //object referencing

// let c = { name: 'satyam'}
// let d;

// d=c  //here we simply refering c to d
// c.name = 'hello'  // so if we change c property value so now new value of c will refer to d 
// console.log(d.name) // o/p will be hello


16. //object referencing

// console.log({a: 1} == {a: 1})
// console.log({a: 1} === {a: 1})

// output will be false always as each object have diffrent space in the memory
// objects are only equal when they are refer to another object

17. //object referencing

// let person = { name: 'satyam'}

// const member = [person] 
// //here we provide person to member array at member[0] index 
// //person = null // here we modifying the the complete variable so it not effect the person in member
// person.name = null // here we modifying the property of the object so it effect the member
// console.log(member)

17. //output

// const value = { num : 10}

// const multiply = (x = {...value}) =>{
//     console.log(x.num*=2)
// }

// multiply()
// multiply()
// multiply(value)
// multiply(value)

18. // shallow copy and deep copy

// when one hold the reference of another object this is called as shallow copy
// when we completely clone a object into another variable this is called as deep copy.

19. //how to create a deep copy or clone a object

// const user = {
//     name: 'satyam',
//     age: 25
// }

//there are three methods

//const newUser = Object.assign({}, user) // by object.assign method

//const newUser = JSON.parse(JSON.stringify(user)) // by stringify and parse 

// const newUser = {...user}  // destructuring
// newUser.name = "john"
// console.log(user)
// console.log(newUser)