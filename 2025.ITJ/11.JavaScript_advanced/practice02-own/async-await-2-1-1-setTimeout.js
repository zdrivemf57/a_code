// setTimeout を含む関数
// 引数 1: 表示するメッセージ, 引数 2: 表示までにかかるミリ秒数
function printMessage(message, delay) {
    setTimeout(() => console.log(message), delay);
}

// 以下はほぼ同時に開始されるので、待ち時間が短い順（02→03→01）に出力される。
printMessage("メッセージ01", 2000);
printMessage("メッセージ02", 1000);
printMessage("メッセージ03", 1500);
