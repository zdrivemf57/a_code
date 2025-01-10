// ベースとなる配列
const info1  = [300, '青森県'];

// 要素を追加
info1.unshift('りんご'); // 先頭に追加
info1.push('低農薬');     // 末尾に追加

// 要素の確認
console.log(`要素数: ${info1.length}`);
console.table(info1);
console.log(info1);
