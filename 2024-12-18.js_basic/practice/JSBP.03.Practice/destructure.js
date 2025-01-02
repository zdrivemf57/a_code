/**
 * 配列の分割代入
 */
const array = ['りんご', 100, '青森県'];
const [itemName, price, place] = array; // 分割代入
console.log(itemName);
console.log(price);
console.log(place);

console.log(array);

console.log('-----------');

/**
 * オブジェクトの分割代入
 */
const user = {
    lastName: '山田',
    firstName: '太郎',
    age: 25
};
const {lastName, firstName, age} = user;
console.log(lastName);
console.log(firstName);
console.log(age);

console.log(user);