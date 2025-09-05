// setTimeout を含む関数
// 引数 1: 名前, 引数 2: 処理にかかるミリ秒数
function getMessage(name, delay) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(name + "さん、こんにちは"), delay);
  });
}

async function printMessages() {
 const m1 = await getMessage("青木", 2000);
 console.log(m1);
 const m2 = await getMessage("井上", 1000);
 console.log(m2);
 const m3 = await getMessage("上田", 1500);
 console.log(m3);
}
printMessages();
