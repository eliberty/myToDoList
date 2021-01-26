import { SET_TODOS, CREATE_TODO } from '../types/todos';

const initialState = {
  todos: [],
};

export default function todosReducer(state = initialState, action) {
  switch (action.type) {
    case SET_TODOS:
      return {
        ...state,
        todos: action.todos,
      };
    case CREATE_TODO:
      return {
        ...state,
        createdTodo: action.createdTodo,
      };
    default:
      return state;
  }
}
