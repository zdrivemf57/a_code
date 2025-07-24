// Jobクラスの定義
class Job {
  // コンストラクタ
  constructor(name, company) {
    this.name = name;
    this.company = company;
  }

  showInfo() {
    console.log(`${this.company}で${this.name}をしています`);
  }
}

// Userクラスの定義
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


// Userクラスの利用
const user1 = new User("山田太郎", 32, new Job("ABC株式会社", "デザイナー"));
const user2 = new User("佐藤花子", 27, new Job("XYZ株式会社", "エンジニア"));

user1.introduce();
user2.introduce();