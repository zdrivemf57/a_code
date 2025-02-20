// 型を明示する
const scores: number[] = [80, 75, 90];
scores.push(85);
// scores.push("100"); /* 型が異なるのでエラー */

// 型推論を利用する ⇒ string[] と推論される
const items = ["りんご", "みかん", "バナナ"];
items.push("ぶどう");
// items.push(100); /* 型が異なるのでエラー */

// any 型の配列なので、様々な型の値を格納できる
const information: any[] = ["山田太郎", 25, true];

// 配列の出力
scores.forEach((score) => console.log(`${score}点`));
items.forEach((item) => console.log(item));
information.forEach((info) => console.log(info));
