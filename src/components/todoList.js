
import Todo from "./todo";

const TodoList = ({ todolist, setTodolist }) => {
  return (
    <div >
      {todolist.map((todoItem) => (
        <Todo todoItem={todoItem} key={todoItem.id} todolist={todolist} setTodolist={setTodolist} />
      ))}
    </div>
  );
}

export default TodoList;