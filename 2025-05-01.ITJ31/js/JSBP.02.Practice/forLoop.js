const fruits = ['りんご', 'バナナ', 'ぶどう'];

// 通常の for 文による記述
for(let i = 0; i < fruits.length; i++) {
 console.log(i, fruits[i]);
}
console.log('---------');

// for of による記述
let counter = 0;
for(const item of fruits) {
 console.log(counter, item);
 counter++;
}
