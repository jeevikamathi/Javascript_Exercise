Definition:Hoisting is a behavior in JavaScript where variable and function declarations are moved to the top of their scope during the compilation phase, before the code is executed.

1.Variable Declarations (var, let, const) are hoisted.
2.Function Declarations are hoisted with their definition.
3.Only Declarations are hoisted—not initializations.


1.Hoisting with var
  console.log(a); // Output: undefined
  var a = 5;
  console.log(a); // Output: 5
//Declaration (var a;) is hoisted to the top.
//Initialization (a = 5;) stays in place.

//What JavaScript does internally:
var a;         // Declaration is hoisted
console.log(a); // undefined (no value assigned yet)
a = 5;         // Initialization happens here
console.log(a); // 5


2.Hoisting with let and const
   console.log(b); // ❌ ReferenceError: Cannot access 'b' before initialization
   let b = 10;
//let and const are hoisted but placed in a "temporal dead zone" (TDZ) until they are defined.
//Temporal Dead Zone (TDZ) is the time between the start of execution and the point where the variable is declared.


3.Hoisting with Functions (Function Declaration (Hoisted with Definition))
   greet(); // ✅ Output: Hello, World!

   function greet() {
   console.log("Hello, World!");
}
//Function declarations are fully hoisted (both the function name and body).

//Internally:
function greet() { 
  console.log("Hello, World!");
}
greet(); // Call works fine


4.Function Expression (Not Hoisted with Definition)
//using var keyword
   sayHello(); // ❌ TypeError: sayHello is not a function

   var sayHello = function() {
   console.log("Hello!");
};

//let and const throws Reference Error
   sayHello(); // ❌ ReferenceError: Cannot access 'sayHello' before initialization

   let sayHello = function() {
   console.log("Hello!");
};
Internally:
// Hoisting happens like this:
let sayHello; // Declaration is hoisted (not initialized)

sayHello(); // ❌ ReferenceError (Access before initialization)

sayHello = function() {
  console.log("Hello!");
};






