// クラスの基本構成
class Item {
  name: string;
  price: number;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }

  showInfo(this: Item) {
    console.log(`${this.name} (${this.price}円)`);
  }
}

// クラスの利用
// インスタンスの生成(コンストラクタの実行)
const item: Item = new Item("りんご", 100);

// プロパティ・メソッドの利用
console.log(item.name); // りんご
item.price = 200;
item.showInfo(); // りんご (200円)

// アクセス修飾子
// フィールド、コンストラクタ、メソッドには、アクセス修飾子として、publicまたはprivateを設定できる
// – アクセス修飾子を省略した場合は、publicになる
class Item2 {
  private name: string;
  private price: number;
  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
  showInfo(this: Item2) {
    console.log(`${this.name} (${this.price}円)`);
  }
}
const item2: Item2 = new Item2("りんご", 100);
item2.showInfo(); // りんご (100円)

// readonly修飾子
// readonly修飾子を付けたプロパティは、読み込み専用になる
// クラスの定義
class Item3 {
  readonly name: string;
  private price: number;
  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
}
//クラスの利用
const item3: Item3 = new Item3("りんご", 100);
console.log(item3.name); // りんご
// item3.name = "みかん"; // コンパイルエラー

// フィールドの省略
// コンストラクタの引数にアクセス修飾子を付けることで、フィールドの定義やその初期化処理を省略することができる
class Item4 {
  name: string;
  private price: number;
  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
}
// Item4の定義と同じ定期となる
class Item5 {
  constructor(public name: string, private price: number) {}
}
const item5: Item5 = new Item5("みかん", 100);
console.log(item5.name); // みかん

// thisと型アノテーション
// thisに対しても、型アノテーションを付けることができる
class Item6 {
  constructor(public name: string, public price: number) {}
  showInfo(this: Item) {
    console.log(`${this.name} (${this.price}円)`);
  }
}
const item6: Item6 = new Item6("りんご", 100);
const x = { name: "みかん", price: 300, showInfo: item.showInfo };
x.showInfo(); // みかん (300円) // xのプロパティ構成がItemと同じなので、コンパイルエラーにならない
const y = { name: "ぶどう", showInfo: item.showInfo };
// y.showInfo(); // yのプロパティ構成がItemと異なる(priceがない)のでコンパイルエラーになる
// 「this: Item」の記述がない場合は、コンパイルエラーにならない

// 構造的部分型
// Javaなどの言語とは異なり、TypeScriptではオブジェクトのシグネチャ(メンバー)が同じであれば型の互換性があるとみなされる
// – ただし、クラスに1つでも非パブリックなプロパティがあると、そのクラスだけ構造的部分型ではなく公称型になる
// ⇒ 型の互換性はなくなる
class Member {
  constructor(public name: string, public age: number) {}
}
class User {
  constructor(public name: string, public age: number) {}
}
// MemberとUserのシグネチャは同じなので、互換性がある
const person: Member = new User("山田太郎", 25);

// 継承の記述例
// 例: Member2クラスを継承するPremiumMemberクラスの定義
class Member2 {
  constructor(protected name: string, protected age: number) {}
  public showInfo(this: Member2) {
    console.log(`${this.name} (${this.age}才)`);
  }
}

class PremiumMember extends Member2 {
  constructor(name: string, age: number, private point: number) {
    super(name, age);
  }
  showInfo() {
    super.showInfo();
    console.log(`利用可能ポイント: ${this.point * this.age}`);
  }
}
const member1: PremiumMember = new PremiumMember("山田太郎", 25, 100);
member1.showInfo(); // 山田太郎 (25才) 利用可能ポイント: 2500
const member2: Member2 = new PremiumMember("鈴木次郎", 30, 200);
member2.showInfo(); // 鈴木次郎 (30才) 利用可能ポイント: 6000

// nstanceof演算子
// インスタンスの元になっているクラスを検証するための演算子
// 例: Member2を継承するPremiumMember, SeniorMemberが存在する場合の挙動
class SeniorMember extends Member2 {}
// PremiumMemberクラスを元にインスタンスを作成
const member = new PremiumMember("山田太郎", 25, 100);
console.log(member instanceof PremiumMember); // true
console.log(member instanceof SeniorMember); // false
console.log(member instanceof Member2); // true

// 関数内での利用例
class Member3 {
  constructor(public name: string, public age: number) {}
}
class PremiumMember3 extends Member3 {}
class SeniorMember3 extends Member3 {}
function showInfo(member: Member3) {
  console.log(`${member.name} (${member.age}才)`);
  if (member instanceof PremiumMember) {
    console.log("種別: プレミアム会員");
  } else if (member instanceof SeniorMember) {
    console.log("種別: シニア会員");
  } else {
    console.log("種別: 通常会員");
  }
}

export {};
