// ベースとなる配列
const array = [100, 200, 300];

// 配列から要素を絞り込み、新しい配列を作成する
const newArray = array.filter((num) => {
  return num >= 150;
});

console.log(...newArray);

// アロー関数を省略して記述する場合
const newArray2 = array.filter(num => num >= 150);

console.log(...newArray2);
