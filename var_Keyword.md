//var is function-scoped – accessible anywhere inside the function.
function example() {
  if (true) {
    var x = 10;
   
  }
  console.log(x); // ✅ Output: 10 (var is function-scoped)
}
example();


//var is initialized with undefined.
console.log(a); // ✅ Output: undefined
var a = 5;

//var can be reassigned.
var a = 5;
a = 10; // ✅ Allowed
console.log(a); // Output: 10

//var allows redeclaration.
var x = 1;
var x = 2; // ✅ Allowed
