import { observer } from 'mobx-react';
import todosStore from '../stores/todosStore';

const Todos = () => {
  const todosList = todosStore.todos.map((todo) => {
    return <h1>{todo.name}</h1>;
  });
  return <div>{todosList}</div>;
};

export default observer(Todos);
