import TodoFilter from "./components/TodoFilter";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import TodoStats from "./components/TodoStats";

export default function App() {
  return (
    <div className="container">
      <h1 className="my-4 display-4">My Todo List</h1>
      <hr />
      <TodoStats />
      <TodoFilter />
      <TodoForm />
      <TodoList />
    </div>
  );
}
