// start of question 1
/*
1) Write a function to transform array a to array b and print the elements of array b to the console.
 
let a = [2, 4, 6, 8, 9, 15]
let b = [‘4’, ‘16’, ‘64’]
*/

let a = [2, 4, 6, 8, 9, 15];

//function to transform array a to array b
function transform(a) {
    var temp = [];
    var poweredArray = a.map(function(x) {
        return Math.pow(x, 2);
    });
    poweredArray.map(function(x) {
        if (x % 3 != 0) {
            temp.push(String(x));
        }
    });
    return temp;
}
let b = transform(a);
console.log(b);
// end of question 1
