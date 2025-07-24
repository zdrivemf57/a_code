const expectedName = 'Tanaka';

const inputName = 'tanaka';

// if文
if(expectedName===inputName){
   console.log('正しい名前が入力されました。');
} else {
   console.log('名前が一致しません。');
}

// 三項演算子
const message = expectedName === inputName ? '一致しています': '一致していません';
console.log(message);
