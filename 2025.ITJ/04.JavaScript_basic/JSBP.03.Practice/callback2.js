// 高階関数の定義(第二引数がコールバック関数)
function repeat(num, callback) {
  for (let i = 1; i <= num; i++) {
    callback(i);
  }
}

// 上記関数のコールバックとして使用する関数の定義
function countHello(count) {
  console.log(count + ":Hello");
}

// コールバックを無名関数にしない場合、関数名のみを記す
repeat(3, countHello);
