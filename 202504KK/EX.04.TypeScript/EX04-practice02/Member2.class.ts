export class Member2 { 
  constructor(protected name: string, protected age: number) {} 
  showInfo(this: Member2) { 
  console.log(`${this.name} (${this.age}才)`); 
  } 
 } 
 export class PremiumMember extends Member2 { 
  constructor(name: string, age: number, private point: number) { 
  super(name, age); 
  } 
  showInfo(this: PremiumMember) { 
  super.showInfo(); 
  console.log(`所有ポイント: ${this.point}`); 
  } 
 }