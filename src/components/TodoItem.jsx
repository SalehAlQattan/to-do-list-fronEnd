import todosStore from '../stores/todosStore';
// hook
import { useState } from 'react';
// styled-components
import DoneButton from './buttons/DoneButton';
import DeleteButton from './buttons/DeleteButton';

const TodoItem = ({ todo }) => {
  // done state
  const [isDone, setIsDone] = useState(false);
  // handling done state
  const handleClick = () => {
    setIsDone((prevState) => !prevState);
  };
  // handle delete
  const handleDelete = () => {
    todosStore.deleteTodo(todo.id);
  };

  return (
    <div>
      <h1 style={{ textDecoration: isDone ? 'line-through' : 'none' }}>
        {todo.name}
      </h1>
      <div style={{ width: '100%', display: 'flex', gap: '2rem' }}>
        <DoneButton handleClick={handleClick} isDone={isDone} />
        <DeleteButton handleDelete={handleDelete} />
      </div>
    </div>
  );
};

export default TodoItem;
