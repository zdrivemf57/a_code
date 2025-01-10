// ベースとなる配列
const array = [100, 200, 300];

// 配列の各要素を、コールバック関数を使い、順番に処理する
array.forEach((num) => {
  console.log(num);
});

// アロー関数を省略して記述する場合
array.forEach(num => console.log(num));
