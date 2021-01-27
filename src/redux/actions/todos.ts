import axios from 'axios';
import type { Todo } from '../../components/AddTodoForm';

export const fetchTodos = () => (dispatch) => {
  try {
    axios
      .get('https://jsonplaceholder.typicode.com/posts?limit=10')
      .then(({ data }) => {
        dispatch({
          type: 'SET_TODOS',
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
          type: 'CREATE_TODO',
          createdTodo: data,
        });
      });
  } catch (error) {
    console.log(error);
  }
};


export const fetchTodo = (todoId: number) => (dispatch) => {
  try {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${todoId}`)
      .then(({ data }) => {
        dispatch({
          type: 'SET_DETAILED_TODO',
          detailedTodo: data,
        });
      });
  } catch (error) {
    console.log(error);
  }
};

export const fetchTodoComments = (todoId: number) => (dispatch) => {
  try {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${todoId}/comments`)
      .then(({ data }) => {
        dispatch({
          type: 'SET_DETAILED_TODO_COMMENTS',
          detailedTodoComments: data,
        });
      });
  } catch (error) {
    console.log(error);
  }
};
