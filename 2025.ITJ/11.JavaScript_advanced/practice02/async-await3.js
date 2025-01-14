// setTimeoutを含む関数
// 引数1: 名前, 引数2: 処理にかかるミリ秒数
function getMessage(name, delay) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(name + "さん、こんにちは"), delay);
    });
}

getMessage("青木", 2000).then((msg) => {
    console.log(msg);
    getMessage("井上", 1000).then((msg) => {
        console.log(msg);
        getMessage("上田", 1500).then((msg) => console.log(msg));
    });
});
