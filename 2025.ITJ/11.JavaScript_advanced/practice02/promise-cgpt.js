const promise = new Promise((resolve, reject) => {
  // let success = true; // 成功する場合の例
  let success = false; // 成功する場合の例
  if (success) {
    resolve('成功しました！');
  } else {
    reject('失敗しました…');
  }
});

promise
  .then((message) => {
    console.log('成功: ', message); // resolveで渡された値を受け取る
  })
  .catch((error) => {
    console.log('失敗: ', error); // rejectで渡された値を受け取る
  });
