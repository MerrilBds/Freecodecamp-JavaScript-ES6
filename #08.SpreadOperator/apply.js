/*
ES6 introduces the spread operator, 
which allows us to expand arrays and other expressions in places where multiple parameters or 
elements are expected.
The ES5 code below uses apply() to compute the maximum value in an array.
*/

//Copy all contents of arr1 into another array arr2 using the spread operator.
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

arr2 = [...arr1];

console.log(arr2);