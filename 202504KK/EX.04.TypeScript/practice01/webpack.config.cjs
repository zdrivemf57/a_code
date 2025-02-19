module.exports = {
  // エントリーポイント
  entry: "./src/app.ts",
  // 出力設定
  output: {
    path: __dirname + "/dist",
    filename: "bundle.js",
  },
  // ローダー
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  // インポート時の拡張子
  resolve: {
    extensions: [".ts", ".js"],
  },
};
