// user オブジェクトの作成
const user = {
  name: "山田太郎",
  age: 32,
  job: {
    name: "デザイナー",
    company: "ABC デザイン事務所",
    showInfo: function () {
      console.log(`${this.company}で${this.name}をしています`);
    },
  },
  sayHi: function () {
    console.log(`こんにちは${this.name}です`);
  },
  sayAge: function () {
    console.log(`私は${this.age}才です`);
  },
};
// プロパティ・メソッドの追加
user.address = "東京";
user.introduce = function () {
  this.sayHi();
  this.sayAge();
  console.log(`${this.address}に住んでいます`);
  this.job.showInfo();
};
// user オブジェクトの利用
user.introduce();
