/*
The const declaration has many use cases in modern JavaScript.

Some developers prefer to assign all their variables using const by default, 
unless they know they will need to reassign the value. 
Only in that case, they use let.
*/
const s = [5, 7, 2];
function editInPlace() {
    // Using s = [2, 5, 7] would be invalid
    s[0] = 2;
    s[1] = 5;
    s[2] = 7;
    console.log(s);

}
editInPlace();