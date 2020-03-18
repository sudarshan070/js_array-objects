var outfit = {
  hat: "baseball cap",
  shirt: "Hawaiian shirt",
  pant: "cargo shorts",
  shose: "flip flop"
};

var penguinHatType = outfit.hat;
console.log(penguinHatType);

outfit.watch = "pocket watch";

outfit.hat = "top hat";

delete outfit.pant;

for (let key in outfit) {
  console.log(outfit[key]);
}
