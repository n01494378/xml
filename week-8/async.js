const timeout = (ms) => new Promise((resolve) => {
  setTimeout(() => {
    resolve('err');
  }, ms);
});

async function inc(a) {
  timeout(3000)
  .then(() => a + 1);
}


const sum = async (a, b) => 
  timeout(3000)
  .then(() =>  (a + b))



const max = async (a, b) =>   
  timeout(3000)
  .then(() => (a > b ? a : b))

const avg = async (a, b) => 
  timeout(3000)
  .then(() => sum (a,b))
  .then((s) => s / 2)

const obj = {
  name: "Marcus Aurelius",
  async split(sep = " ") {
    await timeout(3000);
    return this.name.split(sep);
  },
};

class Person {
  constructor(name) {
    this.name = name;
  }

  static of(name) {
    return new Person(name);
  }

  split(sep = " ") {
    return this.name.split(sep);
  }
}

const person = Person.of("Marcus Aurelius");

console.log("inc(5) =", inc(5));
console.log("sum(1, 3) =", sum(1, 3));
console.log("max(8, 6) =", max(8, 6));
console.log("avg(8, 6) =", avg(8, 6));
console.log("obj.split() =", obj.split());
console.log("person.split() =", person.split());