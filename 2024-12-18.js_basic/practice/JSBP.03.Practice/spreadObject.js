/**
 * オブジェクトとスプレッド構文
 */
const baseObject = {
    name: 'りんご',
    price: 100,
    place: '山形'
};

const notCopied = baseObject;  // baseObjectとnotCopiedは同一
const copied = {...baseObject}; // coipedとbaseObjectは別もの

baseObject.name = 'メロン';
console.log(notCopied.name); // メロン
console.log(copied.name); // りんご

// baseObjectを元に、新しいオブジェクトを作成
// ⇒ price(既存プロパティ）を修正、descriptionを追加
const item = {...baseObject, price: 1000, description: '水耕栽培で育てました！'};
 console.table(item);