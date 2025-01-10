/**
 * 繰り返したい関数: 
* あいさつを表示する関数 (引数なし、戻り値なし)
 */
function sayHi() {
  console.log('こんにちは!');
  console.log('元気ですか?');
}

/**
 * あるタスクをx回繰り返す関数
 * @param x 繰り返しの回数
 * @param task 繰り返すタスク(関数として定義)
 */
function repeat(x, task) {
  for(let i = 1; i <= x; i++) {
    task();
  }
}

// repeat()関数の利用: あいさつを3回繰り返す
repeat(3, sayHi);

// repeat()関数の利用: ランダムな果物名表示を3回繰り返す
repeat(3, function(){
  const fruits = ['リンゴ', 'ミカン', 'バナナ', 'ブドウ', 'メロン', 'スイカ'];
  const randNum = Math.floor(Math.random() * fruits.length);
  console.log(fruits[randNum]);
});

// repeat()関数の利用: ランダムな果物名表示を3回繰り返す(アロー関数)
)
repeat(3, () => {
  const fruits = ['リンゴ', 'ミカン', 'バナナ', 'ブドウ', 'メロン', 'スイカ'];
  const randNum = Math.floor(Math.random() * fruits.length);
  console.log(fruits[randNum]);
});

