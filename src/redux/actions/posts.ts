import axios from 'axios';
import type { Post } from '../../components/AddPostForm/AddPostForm';

// get all posts
export const fetchPosts = () => (dispatch) => {
    dispatch({
      type: 'SET_POSTS',
    });
 
    axios
      .get('https://jsonplaceholder.typicode.com/posts?limit=10')
      .then(({ data }) => {
        dispatch({
          type: 'SET_POSTS_SUCCEED',
          posts: data,
        });
      })
      .catch(({ error }) => {
        console.log(error);
        dispatch({
          type: 'SET_POSTS_FAILED',
        });
      })
};

// create new post
export const createPost = (createdPost: Post) => (dispatch) => {
	dispatch({
		type: 'CREATE_POSTS',
	});

    axios
	.post('https://jsonplaceholder.typicode.com/posts', {
		title: createdPost.title,
		body: createdPost.body,
		userId: createdPost.userId,
		})
	.then(({ data }) => {
		dispatch({
			type: 'CREATE_POST_SUCCEED',
			createdPost: data,
		});
		})
	.catch(({ error }) => {
		console.log(error);
		dispatch({
			type: 'CREATE_POST_FAILED',
		});
		});
};

// set selected post with post id
export const fetchPost = (postId: number) => (dispatch) => {
	dispatch({
		type: 'SET_SELECTED_POST',
	});

	axios
	.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
	.then(({ data }) => {
		dispatch({
			type: 'SET_SELECTED_POST_SUCCEED',
			selectedPost: data,
		});
		})
	.catch(({ error }) => {
		console.log(error);
		dispatch({
			type: 'SET_SELECTED_POST_FAILED',
		});
	}); 
};

// get comment for a post with post id
export const fetchPostComments = (postId: number) => (dispatch) => {
	dispatch({
		type: 'SET_SELECTED_POST_COMMENTS',
	});
  
	axios
	.get(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
	.then(({ data }) => {
		dispatch({
		type: 'SET_SELECTED_POST_COMMENTS_SUCCEED',
		selectedPostComments: data,
		});
	})
	.catch(({ error }) => {
		console.log(error);
		dispatch({
		type: 'SET_SELECTED_POST_COMMENTS_FAILED',
		});
	}); 

};
