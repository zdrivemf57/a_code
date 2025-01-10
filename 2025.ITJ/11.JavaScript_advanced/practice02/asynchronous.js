// 非同期関数
// Promiseを返す関数は非同期関数と呼ばれる
// 非同期関数は同期的に実行できる ⇒ then()を使用する
function printMessage(message, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(message);
      resolve();
    }, delay);
  });
}

// 以下は前の処理が終わってからthen以降が出力される。
printMessage("メッセージ01", 2000)
  .then(() => printMessage("メッセージ02", 1000))
  .then(() => printMessage("メッセージ03", 1500));
