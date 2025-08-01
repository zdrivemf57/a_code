/**
 * BMI 値から診断結果を返す関数
 * @param 言語(初期値 ja)
 * @return BMI 値に応じたメッセージ
 */
function judgeBmi(bmi, lang = "ja") {
  const results = [
    ["痩せ気味", "Underweight"],
    ["健康的", "Healthy Weight"],
    ["太り気味", "Overweight"],
  ];

  // 三項演算子の利用:
  // ja の場合は 0 を langNum に代入、それ以外の場合は 1 を代入
  const langNum = lang === "ja" ? 0 : 1;

  // 診断結果
  let result;
  if (bmi < 18.5) {
    result = 0;
  } else if (bmi < 25) {
    result = 1;
  } else {
    result = 2;
  }

  // if (bmi < 18.5) {
  //   result = results[0][langNum];
  // } else if (bmi < 25) {
  //   result = results[1][langNum];
  // } else {
  //   result = results[2][langNum];
  // }

  // BMI 値を四捨五入
  const fixedBmi = bmi.toFixed(1);

  // 診断メッセージを返す
  if (langNum === 0) {
    return `${results[result][0]}: あなたの BMI 値は${fixedBmi}です`;
  } else {
    return `${results[result][1]}: Your BMI is ${fixedBmi}`;
  }
}

/**
 * 身長と体重から BMI を算出し、診断結果を表示する関数
 * @param 身長(cm)
 * @param 体重(kg)
 * @param 言語(初期値 ja)
 */
function showBmiMessage(heightCm, weightKg, lang = "ja") {
  // 身長をメートルに変換し、BMI 値を算出
  const heightM = heightCm / 100;
  const bmi = weightKg / (heightM * heightM);
  // 診断結果を表示
  console.log(judgeBmi(bmi, lang));
}

/**
 * 作成した関数の利用
 */
showBmiMessage(170.5, 68.75); // 日本語
showBmiMessage(158.5, 64.2, "en"); // 英語
