// 型宣言をしないでみる
let undefined_variable;
console.log(undefined_variable);

// const scores: number[] = [75, 80, "60"];

const scores1: number[] = [];
scores1.push(75);
scores1.push(80);
// scores1.push("60");

let scores2: number[];
// scores2 = [75, 80, "60"];

function getTotal1(x: number, y: number): string {
  return `合計: ${x + y}`;
}
console.log(getTotal1(10, 20));

// 関数自体の型はFunction型になる
const sayHello1: Function = (name: string): void => {
  console.log(`こんにちは、${name}さん`);
};
sayHello1("山田");

// コールバック関数もFunction型にする 未使用
function repeat1(num: number, callback: Function) {
  for (let i = 1; i <= num; i++) {
    callback();
  }
}

// コールバック関数の引数と戻り値を明記する
function repeat2(num: number, callback: (count: number) => void) {
  for (let i = 1; i <= num; i++) {
    callback(i); // `i` を引数として渡す
  }
}

// アロー関数の書き方
const sayNumber = (count: number): void => {
  console.log(`sayNumber ${count}回目です`);
};
repeat2(2, sayNumber);

// 通常の関数の書き方
function sayNumber2(count: number): void {
  console.log(`sayNumber2 ${count}回目です`);
}
repeat2(2, sayNumber2);

// 2つの数値型の引数を受けとり、文字列を返す関数の型を定義
type MyCallbackType = (num1: number, num2: number) => string;
function showOneTwoResult(callback: MyCallbackType) {
  console.log("結果: " + callback(1, 2));
}

showOneTwoResult((x, y) => {
  const val = x * y;
  return val.toFixed(1);
});

// 2つの数値型の引数を受けとり、文字列を返す関数の型を定義 type無し
function showOneTwoResult2(callback: (num1: number, num2: number) => number) {
  console.log("結果: " + callback(2, 2));
}

showOneTwoResult2((x, y) => {
  const val = x * y;
  return val;
});

// オブジェクトの型指定
const user: { name: string; age: number } = { name: "山田太郎", age: 25 };
// user.name = 123; // nameプロパティは文字列型なのでエラー
// user.address = "東京都"; // addressプロパティは存在しないのでエラー

// 実際には、型推論で対応できるので、明示的に型を指定する必要はない
const user2 = { name: "山田太郎", age: 25 };
// user2.name = 123; //nameプロパティは文字列型なのでエラー
// user2.address = "東京都"; //addressプロパティは存在しないのでエラー

// データの型変換 (文字列/数値)
// 文字列 ⇒ 数値 – Number(文字列) で変換
const str: string = "123.45";
const num: number = Number(str);
// 数値 ⇒ 文字列
// – String(数値) で変換する方法以外にも、数値.toFixed(小数点以下の桁数) や
//  数値.toString(N進数)といった方法もある
const num2: number = 123.45;
const str1: string = String(num2); // '123.45'
const str2: string = num.toFixed(1); // '123.5' 四捨五入される
const str3: string = num.toString(10); // '123.45' 10進数表記

// Tupleは要素数やデータ型について固定した配列
// 文字列, 数値, 文字列 で構成される配列の型を定義
let info: [string, number, string];
info = ["山田太郎", 25, "東京都"]; // 問題なし
// info = ["鈴木花子", 30]; // 要素の数や型の順番が違う
// info = ["鈴木花子", "埼玉県", 30]; // 要素の数や型の順番が違う

// pushを使うことでデータが追加できてしまうので注意
info = ["山田太郎", 25, "東京都"];
info.push("デザイナー");
console.table(info);

// Enum型 (列挙型)の定義 複数の定数をグループ化して扱える型
enum CustomerType {
  NORMAL,
  SPECIAL,
}
console.log(CustomerType.NORMAL); // 0
console.log(CustomerType.SPECIAL); // 1

// Enum型のメリット
// 例：Enum型を使わないコード
// 通常の定数定義
const JAPANESE = 0,
  ITALIAN = 1,
  ENGLISH = 2;
function greet(lang: number) {
  switch (lang) {
    case JAPANESE:
      console.log("こんにちは");
      break;
    case ITALIAN:
      console.log("Ciao");
      break;
    case ENGLISH:
      console.log("Hello");
  }
}
greet(25.5);

// 例：Enum型を使用したコード
// Enum型の定数定義
enum Lang {
  JAPANESE,
  ITALIAN,
  ENGLISH,
}
function greet2(lang: Lang) {
  switch (lang) {
    case Lang.JAPANESE:
      console.log("こんにちは");
      break;
    case Lang.ITALIAN:
      console.log("Ciao");
      break;
    case Lang.ENGLISH:
      console.log("Hello");
  }
}
greet2(Lang.JAPANESE); // JAPANESEはエディタから適切な入力補助を得ることができ
// greet2(3); 0～2の範囲外なので、コンパイルエラーになる

// Union型 パイプ記号 ( | )を使い、型の候補を表現する構文
// 変数での使用例
//文字列、または数値型の変数
let info1: string | number;
info1 = "東京都"; // 問題なし
info1 = 25; // 問題なし
// info1 = true; // 真偽値なのでコンパイルエラー

// 関数での使用例
// 引数として文字列、数値、真偽値いずれかの配列を受け取る関数
function logAll(args: string[] | number[] | boolean[]) {
  args.forEach((arg) => console.log(arg));
}
const data: number[] = [1, 2, 3];
logAll(data);
// logAll(info);
// logAll(info1);

// Literal型
// 特定の数値や文字列などを型として指定できる構文
// 関数での使用例
// 引数として、Japanese, English いずれかの文字列を受け取る
function greet3(lang: "Japanese" | "English") {
  switch (lang) {
    case "Japanese":
      console.log("こんにちは");
      break;
    case "English":
      console.log("Hello");
  }
}
greet3("Japanese"); // 問題なし
greet3("English"); // 問題なし
// greet3("Italian"); // コンパイルエラー

// 型エイリアス
// 型に名前をつけられる構文 (エイリアス = 別名)
// – 型の再利用がしやすくなる
// – 型に名前を付けることで、意味が推測しやすくなる
type LivingPlace = "国内" | "海外"; // 国内・国外のいずれかの型
type StringOrNumber = string | number; // 文字列または数値型
const user3: {
  name: string;
  address: LivingPlace;
  extraInfo: StringOrNumber;
} = {
  name: "山田太郎",
  address: "国内",
  extraInfo: 25,
};
console.log(user3);

// オブジェクトのもつ「プロパティ名と型」の組み合わせの型エイリアスを作ることもできる
// User型は、文字列型のnameプロパティと数値型のageプロパティをもつ
type User = { name: string; age: number };
function showUserInfo(info: User) {
  console.log(`ユーザ名: ${info.name}`);
  console.log(`年齢: ${info.age}才`);
}
const userInfo: User = { name: "山田太郎", age: 25 };
showUserInfo(userInfo);

// 交差型 &キーワードを使い、共通部分の型を作り出す構文
type StringOrNumber2 = string | number;
type StringOrBoolean = string | Boolean;

// StringOrNumber2とStringOrBooleanの共通の型 ⇒ string型
type CrossType = StringOrNumber2 & StringOrBoolean;

const info4: CrossType = "山田太郎"; // string型なので問題なし
// const info5: CrossType = 25; // コンパイルエラー
// const info6: CrossType = true; // コンパイルエラ

// オブジェクトの型の場合、２つの型が結合する形になる
type LoginInfo = { name: string; email: string; password: string };
type PersonalInfo = { name: string; age: number };
// LoginInfoとPersonalInfoを結合
// ⇒ name, email, password, ageの4つのプロパティをもつ型
type User4 = LoginInfo & PersonalInfo;
const user5: User4 = {
  name: "山田太郎",
  email: "taro@example.com",
  password: "abcd1234",
  age: 25,
};
console.table(user5);

// 型ガード Union型などの曖昧な型を利用する場面で、型をチェックし、型の種類に応じて処理を切り分けること
// • 型ガードには、以下のような演算子を利用する
// – typeof: ある型か否かを調べる
// – instanceof: あるクラスのインスタンスか否かを調べる
// – in: オブジェクトに特定のプロパティがあるか調べる
// 例: typeofを使い、引数がstring型かnumber型か調べる
function roundNumbers(num: number | string) {
  console.log(typeof num);
  if (typeof num === "string") {
    return Math.round(Number(num));
  } else {
    return Math.round(num);
  }
}
roundNumbers(101);
roundNumbers(-201);
roundNumbers("a");

// unknown型
// any型ににているが、型をチェックしないany型に対し、unknown型は型ガードを強制される
let info6: unknown;
let age: number;
// anyと同様に、様々な型の値を入れられる
info6 = 25;
info6 = "山田太郎";
// age = info6; コンパイルエラー
// infoがany型の場合、このif文がなくてもコンパイルエラーにならない
if (typeof info === "number") {
  age = info;
}

// 型アサーション
// • 型推論の結果を上書きするための構文
// – これによって、コンパイルエラーを抑制したり、適切なコード
// ヒントを得ることができる
// – 値の型自体は変更しない(キャストではない)
// 例: <input type="text" id="area"> に入力された値を表示する

export {};
