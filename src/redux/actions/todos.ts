import axios from 'axios';
import { SET_TODOS, CREATE_TODO } from '../types/todos';
import type { Todo } from '../../components/AddTodoForm';

export const fetchTodos = () => (dispatch) => {
  try {
    axios
      .get('https://jsonplaceholder.typicode.com/posts?limit=10')
      .then(({ data }) => {
        dispatch({
          type: SET_TODOS,
          todos: data,
        });
      });
  } catch (error) {
    console.log(error);
  }
};

export const createTodo = (createdTodo: Todo) => (dispatch) => {
  try {
    axios
      .post('https://jsonplaceholder.typicode.com/posts', {
        title: createdTodo.title,
        body: createdTodo.body,
        userId: createdTodo.userId,
      })
      .then(({ data }) => {
        dispatch({
          type: CREATE_TODO,
          createdTodo: data,
        });
      });
  } catch (error) {
    console.log(error);
  }
};
