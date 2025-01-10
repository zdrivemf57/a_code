const array = [100, 200, 300];


array.forEach((num) => {
    console.log(num);
});

array.forEach(num => console.log(num));

const newArray = array.map((num) => {
    return num * 2;
});

console.log(...newArray);

const newArray2 = array.map(num => num * 2);

console.log(...newArray2);

const newArray3 = array.filter((num) => {
    return num >= 150;
});

console.log(...newArray3);

const newArray4 = array.filter(num => num >= 150);

console.log(...newArray4);

const elm = array.find((num) => {
    return num >= 150;
});

console.log(elm);
console.log(array);

const elm2 = array.find(num => num >= 150);

console.log(elm2);
console.log(array);

const newArray5 = array.sort((num2, num1) => {
    return num1 - num2;
});

console.log(...newArray5);

console.log(newArray5);
console.log(array);

const newArray6 = array.sort((num1, num2) => num1 - num2);

console.log(newArray6);
console.log(array);

const elm3 = array.reduce((sum, num) => {
    return sum + num;
}, 0);

console.log(elm3);
console.log(array);

const items = [
    {name: 'テレビ', price: 78000},
    {name: '洗濯機', price: 32000},
    {name: '冷蔵庫', price: 99000},
    {name: '掃除機', price: 24000}
];

console.log(items);

const newItems = items.filter(item => item.price >= 30000)
.sort((item1, item2) => item1.price - item2.price)
.map(item => {
    const newPrice = Math.floor(item.price * 1.1);
    return {...item, price: newPrice, type: '家電'}
});

console.log(newItems);
console.log(items);
