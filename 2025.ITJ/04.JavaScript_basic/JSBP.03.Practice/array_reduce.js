// ベースとなる配列
const array = [100, 200, 300];

// 配列の要素を一つにまとめた結果を返す
const elm = array.reduce((accum, num) => {
  // accumは、最終的な結果を蓄積していくための変数。aでもなんでもよい。
  return accum + num; // accumに格納するデータをリターン
}, 0); // accumの初期値
console.log(elm);
