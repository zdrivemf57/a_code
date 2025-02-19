// 型宣言をしないでみる
let undefined_variable;
console.log(undefined_variable);

// const scores: number[] = [75, 80, "60"];

const scores: number[] = [];
scores.push(75);
scores.push(80);
// scores.push("60");

let scores2: number[];
// scores2 = [75, 80, "60"];

function getTotal(x: number, y: number): string {
  return `合計: ${x + y}`;
}
console.log(getTotal(10, 20));

function sayHello(name: string): void {
  console.log(`こんにちは、${name}さん`);
}
sayHello("山田");

const sayHello2: Function = (name: string): void => {
  console.log(`こんにちは、${name}さん`);
};
sayHello2("鈴木");

function repeat(num: number, callback: (count: number) => void) {
  for (let i = 1; i <= num; i++) {
    callback(i);  // `i` を引数として渡す
  }
}
const sayNumber: Function = (num: number): void => {
  console.log(`これは、${num}回目です`);
};
repeat(2, sayNumber);
function sayNumber2(num: number): void {
  console.log(`これは、${num}回目です`);
}
repeat(2, sayNumber2);

// 2つの数値型の引数を受けとり、文字列を返す関数の型を定義
type MyCallbackType = (num1: number, num2: number) => string;
function showOneTwoResult(callback: MyCallbackType) {
  console.log("結果: " + callback(1, 2));
}

showOneTwoResult((x, y) => {
  const val = x * y;
  return val.toFixed(1);
});
