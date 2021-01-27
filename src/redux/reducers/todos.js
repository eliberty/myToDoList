const initialState = {
  todos: [],
};

export default function todosReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_TODOS':
      return {
        ...state,
        todos: action.todos,
      };

    case 'CREATE_TODO':
      return {
        ...state,
        createdTodo: action.createdTodo,
      };

    case 'CREATE_TODO':
      return {
        ...state,
        createdTodo: action.createdTodo,
      };

    case 'SET_DETAILED_TODO':
      return {
        ...state,
        detailedTodo: action.detailedTodo,
      };

    case 'SET_DETAILED_TODO_COMMENTS':
      return {
        ...state,
        detailedTodoComments: action.detailedTodoComments,
      };

    default:
      return state;
  }
}
