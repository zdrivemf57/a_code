// setTimeoutを含む関数
// 引数1: 表示するメッセージ, 引数2: 表示までにかかるミリ秒数
function printMessage(message, delay) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(message)
            resolve();
        }, delay);
    });
}

printMessage("メッセージ01", 2000)
.then(() => printMessage("メッセージ02", 1000))
.then(() => printMessage("メッセージ03", 1500));
