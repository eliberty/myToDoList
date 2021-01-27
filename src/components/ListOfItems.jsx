import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../redux/actions/posts';
import PostItem from './PostItem/PostItem';

const ListOfItems = ({ posts = [], ...funcs }) => {
  useEffect(() => {
    funcs.fetchPosts();
  }, []);

  if (!posts.length) {
    return <p>Pas de posts</p>;
  }

  return (
    <section>
      <h1>Liste des posts</h1>
      <div className="list">
        {posts.map((post) => (
          <PostItem key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
};

const mapStateToProps = (state) => ({
  posts: state.postsReducer.posts,
});

const mapDispatchToProps = {
  fetchPosts: (id) => fetchPosts(id),
};

export default connect(mapStateToProps, mapDispatchToProps)(ListOfItems);
