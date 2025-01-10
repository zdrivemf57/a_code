/*
  クラスの定義
*/
class Item {
  #name;
  #price;
  static #count = 0;
  static #nameList = [];

  constructor(name, price) {
    this.#name = name;
    this.#price = price;
    Item.#count++;
    Item.#nameList.push(name);
  }

  static showTotalInfo() {
    console.log(`総数: ${Item.#count}個`);
    console.log(this.#nameList);
  }

  showInfo() {
    console.log(`${this.#name} (${this.#price})円`);
  }
}

/*
  クラスの利用
*/
const item1 = new Item("りんご", 100);
const item2 = new Item("みかん", 200);
const item3 = new Item("ぶどう", 300);

Item.showTotalInfo();
item1.showInfo();
item2.showInfo();
item3.showInfo();
  