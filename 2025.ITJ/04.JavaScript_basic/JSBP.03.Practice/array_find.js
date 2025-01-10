// ベースとなる配列
const array = [100, 200, 300];

// 条件にマッチする最初の要素を返す
const elm = array.find((num) => {
  return num >= 150;
});

console.log(elm);

// アロー関数を省略して記述する場合
const elm2 = array.find(num => num >= 150);

console.log(elm2);
