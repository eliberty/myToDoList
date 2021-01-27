import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../redux/actions/posts';
import PostItem from './PostItem/PostItem';

const ListOfItems = ({ posts = [], ...funcs }) => {
  useEffect(() => {
    funcs.fetchPosts();
  }, []);

  if (!posts.length) {
    return <>Pas de posts</>;
  }

  return (
    <div className="list">
      {posts.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  posts: state.postsReducer.posts,
});

const mapDispatchToProps = {
  fetchPosts: (id) => fetchPosts(id),
};

export default connect(mapStateToProps, mapDispatchToProps)(ListOfItems);
