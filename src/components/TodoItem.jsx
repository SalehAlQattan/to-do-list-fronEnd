// hook
import { useState } from 'react';

const TodoItem = ({ todo }) => {
  // done state
  const [isDone, setIsDone] = useState(false);
  // handling done state
  const handleClick = () => {
    setIsDone((prevState) => !prevState);
  };
  return (
    <div>
      <h2 style={{ textDecoration: isDone ? 'line-through' : 'none' }}>
        {todo.name}
      </h2>
      <button onClick={handleClick}>{isDone ? 'Not Done' : 'Done'}</button>
      <button>delete</button>
    </div>
  );
};

export default TodoItem;
