// userオブジェクトの作成
const user = {
    name: '山田太郎',
    age: 32,
    job: {
        name: 'デザイナー',
        company: 'ABCデザイン事務所',
        showInfo: function () {
            console.log(`${this.company}で${this.name}をしています`);
        }
    },
    sayHi: function () {
        console.log(`こんにちは${this.name}です`);
    },
    sayAge: function () {
        console.log(`私は${this.age}才です`);
    }
};

// プロパティ・メソッドの追加
user.address = '東京';
user.introduce = function () {
    this.sayHi();
    this.sayAge();
    console.log(`${this.address}に住んでいます`);
    this.job.showInfo();
};

// userオブジェクトの利用
user.introduce();

// 変数を使ったオブジェクトの定義
// オブジェクトのプロパティ値を変数で定義する場面で、
// プロパティ名と変数名が一致する場合は、省略して記述
// できる

const zipcode= '1560043';
const user2 = {zipcode};
console.log(user2);

const price= 1000;
const user3 = {price};
console.log(user3);