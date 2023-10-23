// var x=9
// var y="6"
// console.log(x-y)

// const { set } = require("mongoose")

//what is NaN (not an number)
// console.log(isNaN("xbh"))


// diff btw pass by value and pass by reference
// primitive datatypes pass by value and non promitive data types pass by reference
// pass by value passing the value only by type and pass by refereance  is the memmorie also changes

// what IIFE imediatly involked function

// function hello(c){
//     console.log(c)
// }
// hello(10);

// call argument apply array

// wht is higherorder function
// console.log("xmemkjcmefmc"+haa.name)


// primitive 
// string boolean(true or false) number bigint(large numbers) null(null) undefined(declared but not initialised) Symbol(anonymes and unique values)
// non primitive:>object and arrays
// primitive usualy stores single value and non primitive usally stores multiple values


//== and ===
//== compares value only
//=== compares value and type

//var and let  var function scoped  let block scoped
//const value is fixed can change the variable

//implict type coercian
//converting one datat type to another   js automatically changes the type


// exec()&test() in js
// reguler expression string  
//check if the value is there or  not test(true or false)


//diff btw map and for each( 
// If you have a requirement to modify the current array and are expecting a modified one, then you should go with map() . If you just want to iterate the array, then you can use forEach() . If you are expecting filtered values from a given array then you should use the filter() method.) 

//diff btw splice and slice
//slice (doesnt effect original array)
//splice (effect original array)
//both arra using for get a perticular item from an array
// const arr=[1,2,3,4,5,6]
//  const jav=arr.slice(1,3)

// console.log(jav)
// console.log(arr)

//how to reverse a string from js
// const str="hello world"
// const arr=str.split("").reverse().join("")//string to array

// console.log(arr)


//remove duplicate from array
// const arr=[1,1,1,2,3,4,5,5]

// const uni= [...new Set(arr)]

// console.log(uni)


// currying  cha
//scopes chain (scopes:-globelscope,local,block)

// array methods
//push(adding an new element in the last of array)
//shift(delete first element)

// const  arr=[1,2,3,4,5,]
// arr.shift()
// console.log(arr) first element delete

// const  arr=[1,2,3,4,5,]
// arr.pop()
// console.log(arr) deleete last element

// const  arr=[1,2,3,4,5,]
// arr.splice(1,1)
// console.log(arr) custom delete

// const  arr=[2,1,5,3]
// arr.sort()
// console.log(arr) sort y correct format

//string in js
// charAt 
// concat
// //  
// var text="hey"
// var te="hello"
// console.log(text.concat(" ", te)) joing to string or arrays

// toLowerCase
// var text="hello"
// console.log(text.toUpperCase())
//slice to get a perticular word


//math object
///sqrt

//Dom:- application program interface(api)


//arrow function()
 

// async and await cleaner way to handle promise



const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter((number) => number % 2 === 1);console.log(evenNumbers) 
