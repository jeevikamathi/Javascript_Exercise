//Objects and Arrays with const
  const person = { name: "John" };
  person.name = "Doe"; // ✅ Allowed (modifying properties)
  console.log(person); // Output: { name: "Doe" }

person = {}; // ❌ TypeError: Assignment to constant variable
