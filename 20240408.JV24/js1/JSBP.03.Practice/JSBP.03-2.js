class Item {
  #name;
  name; // 上のnameフィールドと同じオブジェクトとなる

  constructor(name, name2) {
    this.#name = name;
    this.name = name2;
  }

  showInfo() {
    console.log(this.#name);
    console.log(this.name);
  }
}
const fruit = new Item("りんご", 'パイナップル');
console.log(fruit.name);
console.log(fruit);
fruit.name = "みかん";
fruit.showInfo();
console.log(fruit.name);
// fruit.#name = "オレンジ"; 文法エラーになる