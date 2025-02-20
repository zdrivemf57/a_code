// 引数が数値で、戻り値が文字列の関数
function getTotal(x: number, y: number): string { 
  return `合計: ${x + y}`; 
 } 

 // 関数自体の型は、Function 型になる
 // 戻り値がないことを明示的に示す場合は、void 型にする
 const sayHello: Function = (name: string): void => { 
  console.log(`こんにちは、${name}さん`); 
 }; 

 // コールバック関数を受け取る高階関数の定義
 // 戻り値の型は明示しない
 function repeat(num: number, callback: Function, arg: string) { 
  for (let i = 1; i <= num; i++) { 
  callback(arg); 
  } 
 } 
 
 // 関数の利用
 const x: string = getTotal(10, 20); 
 console.log(x); 
 // const y: string = getTotal("10", "20"); /* 引数の型が違うのでエラー */ 
 // const z: number = getTotal(10, 20); /* 戻り値の型と変数の型が違うのでエラー */
 repeat(3, sayHello, "山田太郎");