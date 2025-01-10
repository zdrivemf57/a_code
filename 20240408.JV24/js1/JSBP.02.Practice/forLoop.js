const fruits = ['りんご', 'バナナ', 'ぶどう'];

// 通常のfor文による記述
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
console.log('---------独自に追加');
for(const item of fruits) {
    console.log(item);
}
