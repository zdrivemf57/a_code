/** 
 * オブジェクトとスプレッド構文
 */
const baseObject = {
  name: 'りんご',
  price: 100,
  place: '山形'
};

const notCopied = baseObject; // baseObject と notCopied は同一
const copied = { ...baseObject }; // coiped と baseObject は別もの

baseObject.name = 'メロン';
console.log(notCopied.name); // メロン
console.log(copied.name); // りんご

// baseObject を元に、新しいオブジェクトを作成
// ⇒ price を修正、description を追加
const item = { ...baseObject, price: 1000, description: '水耕栽培で育てました！' };
console.table(item);