import { observer } from 'mobx-react';
import todosStore from '../stores/todosStore';

import { useState } from 'react';

const AddToDo = () => {
  const [todo, setTodo] = useState('');
  const handleChange = (event) => {
    setTodo({ ...todo, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    todosStore.createTodo(todo);
    event.target.reset();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Enter a Todo</label>
        <input onChange={handleChange} required type="text" name="name" />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default observer(AddToDo);
