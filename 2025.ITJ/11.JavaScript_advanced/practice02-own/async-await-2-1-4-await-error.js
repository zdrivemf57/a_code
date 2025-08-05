// 非同期関数
// Promiseを返す関数は非同期関数と呼ばれる
// 非同期関数は同期的に実行できる ⇒ then()を使用する
function getMessage(message, delay) {
  return new Promise((resolve, reject) => {
      if(delay >= 0) {
          setTimeout(() => resolve(message), delay);
      } else {
          reject("時間指定が不正");
      }
  });
}

async function printMessages() {
  try {
      const m1 = await getMessage("メッセージ01", 2000);
      console.log(m1);
      const m2 = await getMessage("メッセージ02", -1000);
      console.log(m2);
      const m3 = await getMessage("メッセージ03", 1500);
      console.log(m3);
  } catch (error) {
      console.log(error);
  }
}

printMessages();
