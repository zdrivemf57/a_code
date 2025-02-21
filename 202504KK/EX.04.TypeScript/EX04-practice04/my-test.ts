// インターフェース
// • インターフェースは、クラスが実装すべきフィールドやメソッドを定義した型– クラスと違い、new演算子でインスタンスを生成できない
// ⇒ インターフェースを実装(implements)するクラスを作成する
// – フィールドやメソッドに、アクセス修飾子は付けられない
// ⇒ 全てpublicなフィールドやメソッドになる
interface User {
  // フィールド
  // フィールド名と型のみを定義(値は代入できない)
  name: string;
  age: number;

  // メソッド
  // メソッド名、引数、戻り値の指定のみ ⇒ 具体的な処理内容は記述しない
  showInfo(): void;
  login(pass: string): boolean;
}

// インターフェースの実装
// • クラスはインターフェースを実装(implements)することで、インターフェースが求めるメソッド名や引数の型に則っているかをチェックされる
// – 則っていない場合は、コンパイルエラーになる
class AdminUser implements User {
  // フィールドの初期化が必要
  constructor(public name: string, public age: number) {}

  // メソッドはオーバーライドして、処理内容を記述する必要がある
  showInfo(): void {
    console.log(`${this.name} (${this.age}才)`);
  }

  login(pass: string): boolean {
    return pass === "abcd1234";
  }
}

// インターフェースの利用
// • インターフェースからインスタンスを生成することはできないので、インターフェースを実装するクラスを元にインスタンスを生成する
// インターフェースの型の変数に代入することができる
const user: User = new AdminUser("山田太郎", 25);

user.showInfo();

const password = "abcd123";
if (user.login(password)) {
  console.log("ログイン成功");
} else {
  console.log("ログイン失敗");
}

// インターフェースと構造的部分型
// • インターフェースは、そのインターフェースと実装関係がないオブジェクトの型注釈としても利用できる
interface Item {
  name: string;
  price: number;
}

// プロパティ名と型がItemインターフェースで定義されたものと同じなので、問題なし
const item1: Item = {
  name: "りんご",
  price: 100,
};

// priceの型が文字列になっている。
// また、Itemインターフェースには存在しないplaceプロパティがあるので、コンパイルエラーになる
// const item2: Item = {
//   name: "りんご",
//   price: "100",
//   place: "青森",
// };

// • インターフェースの型注釈は、関数でも利用可能
interface Item2 {
  name: string;
  price: number;
}

// 引数としてItem2型を受け取る関数: 引数にはname, priceプロパティが必要
function showInfo(item: Item2) {
  console.log(`${item.name} (${item.price}円)`);
}

// 余計なplaceプロパティがあるが、エラーにならない
const obj = { name: "みかん", price: 200, place: "和歌山" };
showInfo(obj);

// この記述方法の場合はコンパイルエラーになる
// showInfo({ name: "みかん", price: 200, place: "和歌山" });

// 足りないプロパティがあるが、エラーにならない
const obj2 = { name: "みかん" };
// 引数に足りないプロパティがあるので、エラーになる
// showInfo(obj2);

// 抽象クラス
// • TypeScriptでは、インターフェースと似たものとして、具体的な処理内容をもたないメソッドをもつことのできる「抽象クラス」という特別なクラスが存在する
// – インターフェースと異なり、通常のフィールドやメソッドをもつことができる
abstract class User2 {
  constructor(protected name: string, protected age: number) {}

  showInfo() {
    console.log(`${this.name} (${this.age}才)`);
  }

  // 抽象メソッド(具体的な処理は記述しない)
  abstract login(password: string): boolean;
}

// 抽象クラスの利用
// • 抽象クラスからインスタンスを生成することはできないので、抽象クラスを継承するクラスを元にインスタンスを生成する
class AdminUser2 extends User2 {
  // 抽象メソッドは、オーバーライドして、処理内容を記す必要がある
  login(password: string): boolean {
    return password === "abcd1234";
  }
}

// 抽象クラスの型の変数に代入することができる
const user2: User2 = new AdminUser2("山田太郎", 25);

user2.showInfo();

const password2 = "abcd1234";
if (user2.login(password2)) {
  console.log("ログイン成功");
}

export {};
