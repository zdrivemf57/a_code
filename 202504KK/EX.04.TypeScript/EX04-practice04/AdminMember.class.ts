// 抽象クラス
export abstract class Member {
  constructor(protected name: string, protected age: number) {}

  showInfo() {
    console.log(`${this.name} (${this.age}才)`);
  }
  
  // 抽象メソッド(具体的な処理は記述しない)
  abstract login(pass: string): boolean;
}

// 抽象クラスを継承し、抽象メソッドを実装を定義するクラス
export class AdminMember extends Member {
  login(pass: string): boolean {
    return pass === this.name + this.age;
  }
}
