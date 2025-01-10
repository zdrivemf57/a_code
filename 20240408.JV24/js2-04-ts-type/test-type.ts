// 2つの数値型の引数を受けとり、文字列を返す関数の型を定義
type MyCallbackType = (num1: number, num2: number) => string;

function showOneTwoResult(callback: MyCallbackType) {
  console.log("結果: " + callback(1, 2));
}

showOneTwoResult((x, y) => {
  const val = x * y;
  return val.toFixed(1);
});
