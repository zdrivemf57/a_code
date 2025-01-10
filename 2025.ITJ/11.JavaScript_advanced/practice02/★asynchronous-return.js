// 非同期関数
// Promiseを返す関数は非同期関数と呼ばれる
// 非同期関数は同期的に実行できる ⇒ then()を使用する
function getMessage(message, delay) {
  return new Promise((resolve) => {
      setTimeout(() => resolve(message), delay);
  });
}

const msg = getMessage("Hello", 1000);
console.log(msg);

// 最終的な戻り値はresolve()の引数として設定する
// この戻り値は、then()メソッド内で利用することができる
getMessage("こんにちは", 1000)
.then((result) => console.log(result + "山田さん"));

getMessage("Bye", 2000)
.then((result) => console.log(result + "鈴木さん"));
