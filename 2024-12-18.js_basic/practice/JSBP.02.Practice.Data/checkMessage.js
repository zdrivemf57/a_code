const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('10文字以内でメッセージを入力してください: ', (answer) => {
    // 入力値answerの分岐処理
    if (!answer) {
        console.log('メッセージを入力してください。');
    } else if (answer.length > 10) {
        console.log('10 字以内でお願いします。');
    }
    else {
        console.log(`メッセージ「${answer}」を承りました。`);
    }
    readline.close();
});