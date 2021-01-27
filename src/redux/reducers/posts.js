const initialState = {
  posts: [],
  selectedPost: {},
  selectedPostComments: [],
};

export default function postsReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_POSTS':
      return {
        ...state,
        posts: action.posts,
      };

    case 'CREATE_POST':
      return {
        ...state,
        createdPost: action.createdPost,
      };

    case 'CREATE_POST':
      return {
        ...state,
        createdPost: action.createdPost,
      };

    case 'SET_SELECTED_POST':
      return {
        ...state,
        selectedPost: action.selectedPost,
      };

    case 'SET_SELECTED_POST_COMMENTS':
      return {
        ...state,
        selectedPostComments: action.selectedPostComments,
      };

    default:
      return state;
  }
}
