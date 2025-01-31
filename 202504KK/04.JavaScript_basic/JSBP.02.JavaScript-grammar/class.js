class User {
  // フィールドの定義(省略可)⇒ コンストラクタ内で定義すればよい
  // name;
  // age;

  //   コンストラクタ:
  // インスタンス生成時に実行される特
  // 別な関数。フィールド(プロパティ)
  // はコンストラクタ内で定義する。
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // メソッドの定義
  showInfo() {
    // プロパティやメソッドにアクセスする際は、thisが必須
    console.log(this.name + '(' + this.age + ')');
  }
}

// コンストラクタ関数からインスタンス(オブジェクト)を生成
const u1 = new User('山田太郎', 32);
const u2 = new User('本田一郎', 28);
u1.showInfo();
u2.showInfo();