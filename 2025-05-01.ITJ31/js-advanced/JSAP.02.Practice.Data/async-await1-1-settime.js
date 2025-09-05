// setTimeout を含む関数
// 引数 1: 表示するメッセージ, 引数 2: 表示までにかかるミリ秒数
function printMessage(message, delay) {
  setTimeout(() => console.log(message), delay);
}

printMessage("メッセージ 01", 2000);
printMessage("メッセージ 02", 1000);
printMessage("メッセージ 03", 1500);
