
// ベースとなる配列
const item = [300, '青森県'];
// 要素を追加
item.unshift('りんご'); // 先頭に追加
item.push('低農薬'); // 末尾に追加
// 要素の確認
console.log(`要素数: ${item.length}`);
console.table(item);