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

getMessage("こんにちは", -1000)
.then((result) => console.log(result + "山田さん"))
.catch((error) => console.log(error));
