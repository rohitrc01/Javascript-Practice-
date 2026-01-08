console.log('meta and proxy script')

// Metaprogramming refers to a number of ways a program can manipulate itself:
// with meta programming code handles code 


const person = {name: "John", age: 41};

// Define "name" to return "secret"
Object.defineProperty(person, "name", {
  get() { return "secret"; }
});

let name = person.name;

console.log(name)



let user = {
  name: "Rohit",
  age: 22
};

let proxyUser = new Proxy(user, { // Proxy is not the real object here 
  get(target, property) {
    return target[property];  // acts as an handler 
  }
});
console.log(proxyUser.name)
console.log(proxyUser.age) // accessing other property 
