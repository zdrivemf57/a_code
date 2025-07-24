/**
 * 繰り返したい関数:
 * あいさつを表示する関数 (引数なし、戻り値なし)
 */
function sayHi(i) {
  console.log(i + ":こんにちは!");
  console.log(i + ":元気ですか?");
}
/**
 * あるタスクを x 回繰り返す関数
 * @param x 繰り返しの回数
 * @param task 繰り返すタスク(関数として定義)
 */
function repeat(x, task) {
  for (let i = 1; i <= x; i++) {
    task(i);
  }
}
// repeat()関数の利用: あいさつを 3 回繰り返す
repeat(3, sayHi);
