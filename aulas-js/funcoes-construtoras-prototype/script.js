
const p1 = {
  name: "Computador",
  price: 3000.0,
  quantity: 2
};

console.log(p1);

const Product = function(name, price, quantity) {
  this.name = name,
  this.price = price,
  this.quantity = quantity;
}

Product.prototype.total = function() {
  return this.price * this.quantity;
}

Product.prototype.add = function(amount) {
  this.quantity = this.quantity + amount;
}

Product.prototype.remove = function(amount) {
  if (this.quantity >= amount) {
    this.quantity = this.quantity - amount;
  }
}

Product.prototype.label = function() {
  return "Dados: " + this.name + ", " + this.price;
}

const p2 = new Product("Playstation 5", 4799.0, 17);
console.log(p2);

const p3 = new Product("Mouse", 50.0, 4);
console.log(p3);

console.log(p2.total());
console.log(p3.total());

p2.add(3);
console.log(p2);
console.log(p2.label());