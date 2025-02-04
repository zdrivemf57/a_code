import { useSetAtom } from "jotai";
import { useRef } from "react";
import { todoListAtom } from "../atoms/todoListAtom";
import { Todo } from "../model/Todo.class";

export default function TodoForm() {
  // ステートのセッター関数の読み込み
  const setTodoList = useSetAtom(todoListAtom);

  // フォーム値の取得用
  const inputRef = useRef();

  const addTodo = () => {
    // 入力値の取得
    const input = inputRef.current.value;
    
    // 未入力でなければ、Todo を追加
    if (input.trim() !== "") {
      setTodoList((prev) => [...prev, new Todo(input)]);
    }
    // フォームをリセット
    inputRef.current.value = "";
  };

  return (
    <div className="my-4">
      <input className="me-2" type="text" ref={inputRef} />
      <button className="btn btn-primary" onClick={addTodo}>
        TODO を追加
      </button>
    </div>
  );
}
