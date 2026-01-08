

// simple get 

let obj = { a: 10 };

let p = new Proxy(obj, {
  get(target, prop) {
    return target[prop] * 2;
  }
});

console.log(p.a);



// using set

let obj_1 = {};

let p2 = new Proxy(obj, {
  set(target, prop, value) {
    if (value < 0) return false;
    target[prop] = value;
    return true;
  }
});

p2.score = 10;
p2.score = -5; // cannot print 

console.log(p2.score);



// validation using both - tutorial ref

const p1 = {
    fname: "rohit",
    lname: "chaudhari",
    age: 35
};

p1.age = -10;
console.log(p1);

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

p1Proxy.age = -10;
console.log(p1Proxy);


// using Reflect 