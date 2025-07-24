// Job クラスの定義
class Job {
  // コンストラクタ
  constructor(company, name) {
    this.company = company;
    this.name = name;
  }

  showInfo() {
    console.log(`${this.company}で${this.name}をしています`);
  }
}

// User クラスの定義
class User {
  // コンストラクタ
  constructor(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
  }

  introduce() {
    console.log(`こんにちは${this.name}です`);
    console.log(`私は${this.age}才です`);
    this.job.showInfo();
  }
}

// User クラスの利用
const user1 = new User("山田太郎", 32, new Job("ABC 株式会社", "デザイナー"));
const user2 = new User("佐藤花子", 27, new Job("XYZ 株式会社", "エンジニア"));
user1.introduce();
user2.introduce();
