class Person {
  name: string = "123";
  eating() {}
}

const p = new Person();

function printPerson(p: Person) {
  console.log(p.name);
}

printPerson(new Person());
printPerson({ name: "kobe", eating: function () {} });

export {};
