function myPromise() {
  return new Promise(function (resolve, reject) {
    reject(new Error('エラーが発生しました！'));
  })
}

myPromise()
  .then(function (data) {

    console.log(data);

  }, function (error) {

    console.log(error.message);

  })