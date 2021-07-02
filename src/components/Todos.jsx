import { observer } from 'mobx-react';
import todosStore from '../stores/todosStore';
import TodoItem from './TodoItem';

const Todos = () => {
  const todosList = todosStore.todos.map((todo) => {
    return <TodoItem key={todo.id} todo={todo} />;
  });
  return <div>{todosList}</div>;
};

export default observer(Todos);
