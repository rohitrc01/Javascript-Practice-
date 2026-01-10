// Q1: Simple get trap – double the value

let obj = { a: 10 };

let 
p = new Proxy(obj, {
  get(target, prop) {
    return target[prop] * 2;
  }
});

console.log(p.a); // 20



// Q2: Using set trap – reject negative values

let obj_1 = {};

let p2 = new Proxy(obj_1, {
  set(target, prop, value) {
    if (value < 0) return false;
    target[prop] = value;
    return true;
  }
});

p2.score = 10;
p2.score = -5; // rejected

console.log(p2.score); // 10



// Q3: Validation using get + set 

const p1 = {
  fname: "rohit",
  lname: "chaudhari",
  age: 35
};

const p1Proxy = new Proxy(p1, {
  get(target, prop) {
    if (prop in target) return target[prop];
    return false;
  },

  set(target, prop, value) {
    if (!(prop in target)) {
      throw new Error(`${prop} does not exist`);
    }

    switch (prop) {
      case "fname":
      case "lname":
        if (typeof value !== "string") {
          throw new Error(`${prop} must be a string`);
        }
        break;

      case "age":
        if (typeof value !== "number") {
          throw new Error(`${prop} must be a number`);
        }
        if (value <= 0) {
          throw new Error(`${prop} must be > zero`);
        }
        break;
    }

    target[prop] = value;
    return true;
  }
});

p1Proxy.age = 100;
console.log(p1Proxy.age);
console.log(p1Proxy.fname);

// p1Proxy.age = -10; // throws error



// Q4: Proxy that logs access using Reflect.get

const user = {
  name: "Rohit",
  age: 24
};

const proxyUser = new Proxy(user, {
  get(target, prop, receiver) {
    console.log(`Accessed property: ${prop}`);
    return Reflect.get(target, prop, receiver);
  }
});

console.log(proxyUser.name);
console.log(proxyUser.age);



// Q5: Proxy that allows only number values (Reflect.set)

const data = {};

const numberOnlyProxy = new Proxy(data, {
  set(target, prop, value, receiver) {
    if (typeof value !== "number") {
      console.log(`${prop} must be a number`);
      return false;
    }
    return Reflect.set(target, prop, value, receiver);
  }
});

numberOnlyProxy.count = 10;
numberOnlyProxy.score = 5;
numberOnlyProxy.name = "JS"; // rejected

console.log(data);



// Q6: Safe delete using Reflect.deleteProperty

function safeDelete(obj, prop) {
  return Reflect.deleteProperty(obj, prop);
}

const user_1 = {
  name: "Rohit",
  age: 22
};

console.log(safeDelete(user_1, "age"));
console.log(user_1);

console.log(safeDelete(user_1, "salary"));



// Q7: Proxy that blocks access to private (_) properties

const user_x = {
  name: "Rohit",
  _password: "secret123"
};

const secureUser = new Proxy(user_x, {
  get(target, prop, receiver) {
    if (String(prop).startsWith("_")) {
      return "Access denied";
    }
    return Reflect.get(target, prop, receiver);
  }
});

console.log(secureUser.name);
console.log(secureUser._password);



// Q8: Proxy chaining – logger + validator

const user_a = {
  name: "Rohit",
  age: 22
};

// Logger Proxy
const loggerProxy = new Proxy(user_a, {
  get(target, prop, receiver) {
    console.log(`Accessing property: ${prop}`);
    return Reflect.get(target, prop, receiver);
  },
  set(target, prop, value, receiver) {
    console.log(`Setting ${prop} = ${value}`);
    return Reflect.set(target, prop, value, receiver);
  }
});

// Validation Proxy
const validatedProxy = new Proxy(loggerProxy, {
  set(target, prop, value, receiver) {
    if (prop === "age" && typeof value !== "number") {
      console.log("Age must be a number");
      return false;
    }
    return Reflect.set(target, prop, value, receiver);
  }
});

console.log(validatedProxy.name);
validatedProxy.age = 25;
validatedProxy.age = "twenty";

console.log(user_a);
