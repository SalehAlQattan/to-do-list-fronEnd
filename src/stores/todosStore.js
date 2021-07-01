import { makeAutoObservable } from 'mobx';
import axios from 'axios';

class TodosStore {
  todos = [];
  constructor() {
    makeAutoObservable(this);
  }
  // fetch all todos
  fetchTodos = async () => {
    try {
      const response = await axios.get('http://localhost:8000/todos');
      this.todos = response.data;
    } catch (error) {
      console.error(error);
    }
  };
  // create todo
  createTodo = async (newTodo) => {
    try {
      const response = await axios.post('http://localhost:8000/todos', newTodo);
      this.todos.push(response.data);
    } catch (error) {
      console.error(error);
    }
  };
}

const todosStore = new TodosStore();
todosStore.fetchTodos();
export default todosStore;
