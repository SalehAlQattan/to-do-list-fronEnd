import todosStore from '../stores/todosStore';
// hook
import { useState } from 'react';

const TodoItem = ({ todo }) => {
  // done state
  const [isDone, setIsDone] = useState(false);
  // handling done state
  const handleClick = () => {
    setIsDone((prevState) => !prevState);
  };
  // handle delete
  const handleDelete = () => {
    console.log(todo.id);
    todosStore.deleteTodo(todo.id);
  };

  return (
    <div>
      <h2 style={{ textDecoration: isDone ? 'line-through' : 'none' }}>
        {todo.name}
      </h2>
      <button onClick={handleClick}>{isDone ? 'Not Done' : 'Done'}</button>
      <button onClick={handleDelete}>delete</button>
    </div>
  );
};

export default TodoItem;
