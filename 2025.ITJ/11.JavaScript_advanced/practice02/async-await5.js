// setTimeoutを含む関数
// 引数1: 名前, 引数2: 処理にかかるミリ秒数
function getMessage(name, delay) {
    return new Promise((resolve, reject) => {
        if(delay >= 0) {
            setTimeout(() => resolve(name + "さん、こんにちは"), delay);
        } else {
            reject("秒数設定が不正です");
        }
    });
}

async function printMessages() {
    try {
        const m1 = await getMessage("青木", 2000);
        console.log(m1);
        const m2 = await getMessage("井上", -1000);
        console.log(m2);
        const m3 = await getMessage("上田", 1500);
        console.log(m3);
    } catch(error) {
        console.log(error);
    }
}

printMessages();
