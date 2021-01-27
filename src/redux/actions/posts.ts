import axios from 'axios';
import type { Post } from '../../components/AddPostForm';

export const fetchPosts = () => (dispatch) => {
  try {
    axios
      .get('https://jsonplaceholder.typicode.com/posts?limit=10')
      .then(({ data }) => {
        dispatch({
          type: 'SET_POSTS',
          posts: data,
        });
      });
  } catch (error) {
    console.log(error);
  }
};

export const createPost = (createdPost: Post) => (dispatch) => {
  try {
    axios
      .post('https://jsonplaceholder.typicode.com/posts', {
        title: createdPost.title,
        body: createdPost.body,
        userId: createdPost.userId,
      })
      .then(({ data }) => {
        dispatch({
          type: 'CREATE_POST',
          createdPost: data,
        });
      });
  } catch (error) {
    console.log(error);
  }
};


export const fetchPost = (postId: number) => (dispatch) => {
  try {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then(({ data }) => {
        dispatch({
          type: 'SET_SELECTED_POST',
          selectedPost: data,
        });
      });
  } catch (error) {
    console.log(error);
  }
};

export const fetchPostComments = (postId: number) => (dispatch) => {
  try {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
      .then(({ data }) => {
        dispatch({
          type: 'SET_SELECTED_POST_COMMENTS',
          selectedPostComments: data,
        });
      });
  } catch (error) {
    console.log(error);
  }
};
