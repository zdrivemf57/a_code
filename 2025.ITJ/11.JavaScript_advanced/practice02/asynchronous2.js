// 非同期関数
function getMessage(message, delay) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(message), delay);
  });
}

const msg = getMessage("Hello", 1000);
console.log(msg);

getMessage("こんにちは", 3000)
  .then((result) => console.log(result + "山田さん"));
