function waitAndPrint(message, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(message);
      resolve();
    }, delay);
  });
}

waitAndPrint('メッセージ01', 2000) // 2秒後に「メッセージ01」を表示
  .then(() => waitAndPrint('メッセージ02', 1000)) // 1秒後に「メッセージ02」を表示
  .then(() => waitAndPrint('メッセージ03', 1500)); // 1.5秒後に「メッセージ03」を表示
