let info: unknown;
let age: number = 25;

// any と同様に、様々な型の値を入れられる
info = "山田太郎";
info = 25;

// info が any 型の場合、この if 文がなくてもコンパイルエラーにならない
if (typeof info === "number") {
  age = info;
  console.log(`年齢を${age}に変更`);
}

export {};
