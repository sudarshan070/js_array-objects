var gunter = {
  name: "Gunter",
  origin: "Adventure Time",
  canFly: false,
  sayHello: function() {
    console.log("QUACK!!!");
  }
};

var ramon = {
  name: "Ramón",
  origin: "Happy Feet",
  canFly: true,
  sayHello: function() {
    console.log("Estoy encantado de conocerle.");
  }
};

var fred = {
  name: "Fred",
  origin: "Sitting Ducks",
  canFly: false,
  sayHello: function() {
    console.log("Hi there!");
  }
};

var penguins = [gunter, ramon, fred];

console.log(penguins[0]);

let secondPenguin = penguins[1];
secondPenguin;

var last = penguins.length - 1;
console.log(penguins[last]);

var myPenguin;
penguins.push(myPenguin);

console.log(penguins.length);

penguins[0].canFly = true;

penguins[0].sayHello();

for (let i = 0; i <= penguins.length - 1; i++) {
  console.log(penguins[i].name);
}

for (let i = 0; i <= penguins.length - 1; i++) {
  penguins[i].sayHello();
}

for (let i = 0; i <= penguins.length - 1; i++) {
  console.log(penguins[i].name);
  penguins[i].sayHello();
  penguins[i].numberOfFeet = 2;
  console.log(penguins[i].numberOfFeet);
}

for (let i = 0; i <= penguins.length - 1; i++) {
  if (penguins[i].canFly == true) {
    console.log(`${penguins[i].name} can fly!`);
  }
}
