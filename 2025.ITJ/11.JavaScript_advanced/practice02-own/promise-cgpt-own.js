const promise = new Promise((resolve, reject) => {
  let success = true; // 成功する場合の例
  // let success = false; // 成功する場合の例
  if (success) {
    resolve('成功しました！'); // resolveの引数は成功した時の戻り値となる
  } else {
    reject('失敗しました…'); // rejectの引数は失敗した時の戻り値となる
  }
});

promise
  .then((resolveResult) => { // promiseの評価をresolveResultで受け取る
    console.log('成功: ', resolveResult); // resolveで渡された値を受け取る
  })
  .catch((rejectResult) => {
    console.log('失敗: ', rejectResult); // rejectで渡された値を受け取る
  });
