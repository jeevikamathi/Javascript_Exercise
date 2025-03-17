                              ES6 feature(ECMASCRIPT 2015)

//let block Scoped so consoles "sum is not defined Error"(Reference Error)
{
    let sum=5;
}
let newValue=5+sum;
console.log(newValue);

//let allows to change a variable value after declaration ie.,Reassignment allowed
//output :  6
{
    let sum=5;
}
sum=6;
console.log(sum);

//let does not allow to access a value before declaration consoles "sum is not defined"(Reference Error)
console.log(sum);
{
    let sum=5;
}

//No Redeclaration Example, cannot declare the same variable twice with let in the same scope
//consoles "sum is already defined"
{
    let sum=5;
    let sum=6
}
console.log(sum);

//let in Loops
for (let i = 0; i < 3; i++) {
    console.log(i); // ✅ Output: 0, 1, 2
}
console.log(i); // ❌ ReferenceError: i is not defined

//let in Function Scope
function greet() {
    let message = "Hello!";
    console.log(message); // ✅ Output: Hello!
}
greet();
console.log(message); // ❌ ReferenceError: message is not defined


