const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
  
readline.question('10文字以内でメッセージを入力してください: ', (answer) => {
    if(!answer) {
        console.log('メッセージを入力してください。');
    } else if(answer.length > 10) {
        console.log('10字以内でお願いします。');
    } else {
        console.log(`メッセージ「${answer}」を承りました。`);
    }
    readline.close();
});