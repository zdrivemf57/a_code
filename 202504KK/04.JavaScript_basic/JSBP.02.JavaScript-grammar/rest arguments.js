/* 残余引数 */
function sum(...params) { /* 引数名の前に...を付ける */
  let result = 0;
  for (const param of params) { /* 配列として扱うことができる */
    result += param;
  }
  return result;
}
console.log(sum(10, 20, 30)); /* 引数の数は不定 */
console.log(sum(10, 20, 30, 40, 50, 60));