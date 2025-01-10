// ベースとなる配列
const array = [100, 200, 300];

// 配列の要素を加工し、新しい配列を作成する
const newArray = array.map((num) => {
  return num * 2;
});

console.log(...newArray);

// アロー関数を省略して記述する場合
const newArray2 = array.map(num => num * 2);

console.log(...newArray2);
