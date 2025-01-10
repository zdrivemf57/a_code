// ベースとなる配列
const array = [400, 200, 300, 100];

const sameArray = array.sort((num1, num2) => {
    return num1 - num2;
});

console.log(...array);
console.log(...sameArray);

// アロー関数を省略して記述する場合
const sameArray2 = array.sort((num1, num2) => num2 - num1);

console.log(...sameArray2);

// 元の配列を変更したくない場合は、スプレッド構文を利用する

const newArray3 = [...sameArray2].sort((num1, num2) => {
  return num1 - num2;
});

console.log(...newArray3);