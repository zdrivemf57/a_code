module.exports = {
  mode: 'development',
  // エントリーポイント
  entry: "./src/app.js",
  // 出力設定
  output: {
    path: __dirname + "/js",
    filename: "bundle.js",
  },
};
