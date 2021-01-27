const initialState = {
  posts: [],
  selectedPost: {},
  selectedPostComments: [],
  fetching: false,
  error: null,
};

export default function postsReducer(state = initialState, action) {
  switch (action.type) {
    // get all posts
    case 'SET_POSTS':
      return {
        ...state,
        fetching: true,
      };

    case 'SET_POSTS_SUCCEED':
      return {
        ...state,
        fetching: false,
        posts: action.posts,
      };

    case 'SET_POSTS_FAILED':
      return {
        ...state,
        fetching: false,
        error: true,
      };

    // create new post
    case 'CREATE_POST':
      return {
        ...state,
        fetching: true,
      };

    case 'CREATE_POST_SUCCEED':
      return {
        ...state,
        fetching: false,
        createdPost: action.createdPost,
      };

    case 'CREATE_POST_FAILED':
      return {
        ...state,
        fetching: false,
        error: true,
      };

    // set selected post with post id
    case 'SET_SELECTED_POST':
      return {
        ...state,
        fetching: true,
      };

    case 'SET_SELECTED_POST_SUCCEED':
      return {
        ...state,
        fetching: false,
        selectedPost: action.selectedPost,
      };

    case 'SET_SELECTED_POST_FAILED':
      return {
        ...state,
        fetching: false,
        error: true,
      };

    // get comment for a post with post id
    case 'SET_SELECTED_POST_COMMENTS':
      return {
        ...state,
        fetching: true,
      };

    case 'SET_SELECTED_POST_COMMENTS_SUCCEED':
      return {
        ...state,
        fetching: false,
        selectedPostComments: action.selectedPostComments,
      };

    case 'SET_SELECTED_POST_COMMENTS_FAILED':
      return {
        ...state,
        fetching: false,
        error: true,
      };

    default:
      return state;
  }
}
