// 参考 : https://zenn.dev/ak/articles/dc23436b241a84

const promise1 = new Promise((resolve, reject) => resolve("配達された！")).then((text) =>
  console.log(text + "美味しかった！")
);

const promise2 = new Promise((resolve, reject) => reject("キャンセルされた！")).catch((text) =>
  console.log(text + "返金してほしい！")
);

promise2
  .then((v) => console.log(v + "美味しかったのだ!"))
  .catch((v) => console.log(v + "返金してほしいのだ!"))