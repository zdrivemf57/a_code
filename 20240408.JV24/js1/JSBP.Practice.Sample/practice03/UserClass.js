/*
  クラスの定義
*/
class Job {
  constructor(name, company) {
    this.name = name;
    this.company = company;
  }

  showInfo() {
    console.log(`${this.company} [${this.name}]`);
  }
}

class User {
  constructor(name, age, address, job) {
    this.name = name;
    this.age = age;
    this.address = address;
    this.job = job;
  }

  showInfo() {
    console.log(`${this.name}です。${this.age}才です。`);
    console.log(`${this.address}に住んでいます。`);
  }
}

/*
  クラスの利用
*/
const job = new Job("デザイナー", "ABCデザイン事務所");
const user = new User("山田太郎", 25, "東京都", job);
user.showInfo();
user.job.showInfo();