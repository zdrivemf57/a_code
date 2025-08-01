// 身長と体重
const heightCm = 170.5;
const weightKg = 68.75;

// 身長をメートルに変換し、BMI 値を算出
const heightM = heightCm / 100;
const bmi = weightKg / (heightM * heightM);

// BMI 値を小数点第二位で四捨五入して表示
const fixedBmi = bmi.toFixed(1);
console.log(`BMI 値は${fixedBmi}です`);