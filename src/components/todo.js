import '../style.css';

const Todo = ({ todoItem: { id, name }, todolist, setTodolist }) => {
  const handleDelete = () => {
    setTodolist(todolist.filter(item => item.id !== id));
  };

  return (
    <div>
      <div className='todoitem'>
        <h3 className='todoname'>{name}</h3>
        <button className='deletebtn' onClick={handleDelete}>DONE</button>
      </div>
    </div>
  );
}

export default Todo;