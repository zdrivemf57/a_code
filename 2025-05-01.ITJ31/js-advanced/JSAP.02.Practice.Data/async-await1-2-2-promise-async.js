// setTimeout を含む関数
// 引数 1: 表示するメッセージ, 引数 2: 表示までにかかるミリ秒数
function printMessage(message, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(message);
      resolve();
    }, delay);
  });
}

async function printMessages() {
  await printMessage("メッセージ01", 2000);
  await printMessage("メッセージ02", 1000);
  await printMessage("メッセージ03", 1500);
}

// printMessages(); ← これだけだと呼び出しが完了する前に次の行に進んでしまう

// IIFE (即時関数) を使った呼び出し
(async () => {
  await printMessages(); // まずこちらを完了させる
  await printMessage("メッセージ04", 2000);
  await printMessage("メッセージ05", 1000);
  await printMessage("メッセージ06", 1500);
})();