let info: unknown;
let age: number = 25;

// anyと同様に、様々な型の値を入れられる
info = "山田太郎";
info = 25;

// infoがany型の場合、このif文がなくてもコンパイルエラーにならない
if (typeof info === "number") {
  age = info;
  console.log(`年齢を${age}に変更`);
}

export {}; // info変数を宣言する際のエラーを抑制
