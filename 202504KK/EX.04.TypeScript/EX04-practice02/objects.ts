// 明示的なオブジェクトの型指定
let info: { name: string; age: number }; 

// 型と同じプロパティをもたせる必要がある
info = { name: "山田太郎", age: 25 }; 
console.log(info); 

// 型にない address プロパティがあるのでコンパイルエラーになる
// user = { name: "山田太郎", age: 25, address: "東京都" }; 

// 型の変換
const info1 = 123; 
const info2 = "123"; 

info.name = String(info1); // number ⇒ string 
info.age = Number(info2); // string ⇒ number 

console.log(info); 

export {}; // info 変数を宣言する際のエラーを抑制