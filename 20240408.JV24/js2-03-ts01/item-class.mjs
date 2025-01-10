export default class Item {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  showInfo() {
    console.log(`${this.name} (${this.price}円)`);
  }
}
