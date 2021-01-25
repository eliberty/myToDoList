import axios from 'axios';
import { SET_TODOS } from '../types/todos';

export const fetchTodos = () => (dispatch) => {
  axios.get('https://jsonplaceholder.typicode.com/posts?limit=10').then(({ data }) => {
    console.log(data);
    dispatch({
      type: SET_TODOS,
      todos: data
    });
  })
};
