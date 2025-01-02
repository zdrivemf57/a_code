// 関数の定義
const calcBMI = function (height, weight) {
    return weight / (height * height);
};
// 関数の利用
const bmi = calcBMI(1.71, 65.4);
console.log(bmi.toFixed(2));