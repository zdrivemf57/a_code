// 非同期関数
// Promiseを返す関数は非同期関数と呼ばれる
// 非同期関数は同期的に実行できる ⇒ then()を使用する
function getMessage(message, delay) {
  return new Promise((resolve) => {
      setTimeout(() => resolve(message), delay);
  });
}

// async/await構文
// asyncキーワードのついた関数内では、awaitを使い、非同期関数を同期的に実行できる
// awaitがないとPromiseが入る
async function printMessages() {
  const m1 = await getMessage("メッセージ01", 2000);
  const m2 = await getMessage("メッセージ02", 1000);
  console.log(m1, m2);
  console.log(await getMessage("メッセージ03", 1500));
}

printMessages();