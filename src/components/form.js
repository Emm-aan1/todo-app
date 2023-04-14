import '../style.css';
import shortid from 'shortid';

const Form = ({ todo, setTodo, todolist, setTodolist }) => {
  const handleChange = (event) => {
    setTodo(event.target.value)
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setTodolist([...todolist, { name: todo, id: shortid.generate() }]);
    setTodo('');
  };


  return (
    <div className='form'>
      <form onSubmit={handleSubmit}>
        <input placeholder='Add Todo Item' className='input' value={todo} onChange={handleChange} />
        <button className='btn' type='submit'>Add</button>
      </form>
    </div>
  );
}

export default Form;