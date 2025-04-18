// 継承元になるクラス
class Item {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  showInfo() {
    console.log(`${this.name}(${this.price}円)`);
  }
}

// Itemクラスを継承するクラス
class BargainItem extends Item {
  constructor(name, price, discountRate) {
    super(name, price);
    this.discountRate = discountRate;
  }

  showInfo() {
    const bargainPrice = this.price * ((100 - this.discountRate) / 100);
    super.showInfo();
    console.log(`特別価格: ${bargainPrice.toFixed(0)}円`);
  }
}

// BargainItemの利用
const item = new BargainItem("セーター", 3000, 20);
item.showInfo();
  