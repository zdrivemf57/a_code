export class Todo {
  constructor(text) {
    this.id = crypto.randomUUID(); // ID
    this.text = text; // 内容
    this.isComplete = false; // 完了ステータス
  }
}
