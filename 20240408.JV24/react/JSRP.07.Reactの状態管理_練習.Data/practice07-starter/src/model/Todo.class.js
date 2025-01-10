export class Todo {
  constructor(text) {
    this.id = getId(); // ID
    this.text = text; // 内容
    this.isComplete = false; // 完了ステータス
  }
}

// 連番IDを生成する
let number = 1;
function getId() {
  return number++;
}
