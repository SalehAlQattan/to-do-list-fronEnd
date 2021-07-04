// mobx handle change without loading
import { observer } from 'mobx-react';
// importing the store
import todosStore from '../stores/todosStore';
// hook
import { useState } from 'react';
// components
import AddButton from './buttons/AddButton';
import AddInput from './AddInput';

const AddToDo = () => {
  // todo state
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
    <div style={{ marginTop: '5rem' }}>
      <form onSubmit={handleSubmit}>
        <h1 style={{ display: 'inline' }}>Enter a Todo</h1>
        <AddInput handleChange={handleChange} />
        <AddButton />
      </form>
    </div>
  );
};

export default observer(AddToDo);
