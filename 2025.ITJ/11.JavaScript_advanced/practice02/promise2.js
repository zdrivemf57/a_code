function myPromise1() {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve('Hello Promise1');
    }, 3000)
  })
}

function myPromise2() {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve('Hello Promise2');
    }, 1000)
  })
}

function myPromise3() {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve('Hello Promise3');
    }, 5000)
  })
}

Promise.all([
  myPromise1(),
  myPromise2(),
  myPromise3()
])
  .then(function (data) {

    console.log(data);

  })

  Promise.race([
    myPromise1(),
    myPromise2(),
    myPromise3()
  ])
  .then(function(data) {
    console.log(data);
  })