// 明示的な型の宣言
let userName: string;
userName = "山田太郎";
// userName = 123; /* 型が異なるのでコンパイルエラー */

// 宣言と同時に代入する
let age: number = 25;
age = 30;
// age = "40";  /* 型が異なるのでコンパイルエラー */

// 型推論の利用
// 整数の末尾にnを付けることで、bigintになる
let largeNumber = 10000000000000000n; /* bigint型と推論される */
largeNumber = 20000000000000000n;
// largeNumber = 100; /* 型が異なるのでコンパイルエラー */

// any型の利用
let info: any = "東京都";
info = true;
info = 1000;

// 変数の出力
console.table({ userName, age, largeNumber, info });
