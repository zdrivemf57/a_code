function printMessage(message, delay) {
    setTimeout(() => console.log(message), delay);
}

// 以下はほぼ同時に開始されるので、待ち時間が短い順（02→03→01）に出力される。
printMessage("メッセージ01", 2000);
printMessage("メッセージ02", 1000);
printMessage("メッセージ03", 1500);
