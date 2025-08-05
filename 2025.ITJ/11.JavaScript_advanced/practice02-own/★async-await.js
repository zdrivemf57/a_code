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

// async/await構文
// asyncキーワードのついた関数内では、awaitを使い、非同期関数を同期的に実行できる
async function printMessages() {
  await printMessage("メッセージ01", 2000);
  await printMessage("メッセージ02", 1000);
  await printMessage("メッセージ03", 1500);
}

printMessages();
