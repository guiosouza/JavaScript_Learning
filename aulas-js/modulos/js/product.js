
export default class Product { // por default exporta somente essa classe

    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    total() {
        return this.price * this.quantity;
    }

    add(amount) {
        return this.quantity = this.quantity + amount; 
    }

    remove(amount) {
        if (this.quantity >= amount) {
            return this.quantity = this.quantity - amount;
        }
    }

    label() {
        return "Dados: " + this.name + ", " + this.price.toFixed(2);
    }
}
