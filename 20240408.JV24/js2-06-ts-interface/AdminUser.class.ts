// インターフェース
export interface User {
  // フィールド
  name: string;
  age: number;

  // メソッド
  showInfo(): void;
  login(pass: string): boolean;
}

// インターフェースを実装するクラス
export class AdminUser implements User {
  // フィールドの初期化が必要
  constructor(public name: string, public age: number) {}

  // メソッドはオーバーライドして、処理内容を記述する必要がある
  showInfo(): void {
    console.log(`${this.name} (${this.age}才)`);
  }

  login(pass: string): boolean {
    return pass === this.name + this.age;
  }
}
