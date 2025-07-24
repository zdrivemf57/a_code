const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
  
readline.question('10文字以内でメッセージを入力してください: ', (answer) => {
    // 入力値answerの分岐処理
    
    readline.close();
});