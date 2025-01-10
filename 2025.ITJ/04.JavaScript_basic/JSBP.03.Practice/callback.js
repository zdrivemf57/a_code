// 高階関数の定義(第二引数がコールバック関数)
function repeat(num, callback) {
    for(let i = 1; i <= num; i++) {
        // このコールバック関数は引数を一つとるものとする
        callback(i);
    }
  }

  // 関数の利用(第二引数は無名関数として指定)
  repeat(3, function(count) {
      console.log(count + ":Hello");
  });
