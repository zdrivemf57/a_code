const info = ['りんご', 300, '青森県', '低農薬', '9月下旬'];

// 分割代入
const [name, price, ...others] = info;

console.log(price, others);
