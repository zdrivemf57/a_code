// setTimeoutを含む関数
// 引数1: 表示するメッセージ, 引数2: 表示までにかかるミリ秒数
function printMessage(message, delay) {
    setTimeout(() => console.log(message), delay);
}

printMessage("メッセージ01", 2000);
printMessage("メッセージ02", 1000);
printMessage("メッセージ03", 1500);
