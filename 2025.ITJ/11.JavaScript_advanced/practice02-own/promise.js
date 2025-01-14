function myPromise() {
  return new Promise(function (resolve) {
    resolve('Hello Promise');
  })
}

myPromise()
  .then(function (data) { console.log(data); console.log("---"); });

myPromise()
  .then(function (data1) {

    console.log(data1);
    return myPromise();


  })
  .then(function (data2) {

    console.log(data2);
    return myPromise();

  })
  .then(function (data3) {

    console.log(data3);

  })