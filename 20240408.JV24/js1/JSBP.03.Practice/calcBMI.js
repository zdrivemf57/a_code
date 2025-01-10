// 関数の定義
const calcBMI = function(height, weight) {
  return weight / (height * height);
};

// 関数の定義(アロー関数)
const calcBMI2 = (height, weight) => {
  return weight / (height * height);
};

// 関数の定義(アロー関数さらに省略)
const calcBMI3 = (height, weight) => weight / (height * height);

// 関数の利用
const bmi = calcBMI(1.71, 65.4);
console.log(bmi.toFixed(2))

const bmi2 = calcBMI2(1.71, 65.4);
console.log(bmi2.toFixed(2))

const bmi3 = calcBMI3(1.71, 65.4);
console.log(bmi3.toFixed(2))

