// setTimeout を含む関数
// 引数 1: 表示するメッセージ, 引数 2: 表示までにかかるミリ秒数
function printMessage(message, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(message)
      resolve();
    }, delay);
  });
}
printMessage("メッセージ 01", 2000)
  .then(() => printMessage("メッセージ 02", 1000))
  .then(() => printMessage("メッセージ 03", 1500));
