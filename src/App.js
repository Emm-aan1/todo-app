import Header from "./components/header";
import Form from "./components/form";
import { useState } from "react";
import TodoList from "./components/todoList";

function App() {
  const [todo, setTodo] = useState('');
  const [todolist, setTodolist] = useState([]);

  return (
    <div className="App">
      <Header />
      <Form todo={todo} setTodo={setTodo} todolist={todolist} setTodolist={setTodolist} />
      <TodoList todolist={todolist} setTodolist={setTodolist} />
    </div>
  );
}

export default App;
