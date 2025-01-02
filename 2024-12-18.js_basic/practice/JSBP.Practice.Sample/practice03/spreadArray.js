/**
 * 配列とスプレッド構文
 */
const baseArray = ['りんご', 'バナナ', 'ぶどう'];

const notCopied = baseArray;  // baseArrayとnotCopiedは同一
const copied = [...baseArray]; // coipedとbaseArrayは別もの

baseArray[0] = 'メロン';
console.log(notCopied[0]); // メロン
console.log(copied[0]); // りんご

// 末尾にbaseArrayの果物を追加
const items = ['いちご', 'パイナップル', ...baseArray];
// console.log(items[0], items[1], items[2], items[3], items[4]) と同じ
console.log(...items);
