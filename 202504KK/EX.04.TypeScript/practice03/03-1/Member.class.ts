export class Member {
  constructor(private name: string, private age: number) {}

  showInfo(this: Member) {
    console.log(`${this.name} (${this.age}才)`);
  }
}
