import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../redux/actions/posts';
import PostItem from './PostItem';
import { Grid, Typography, Container } from '@material-ui/core';

const ListOfItems = ({ posts = [], ...funcs }) => {
  useEffect(() => {
    funcs.fetchPosts();
  }, []);

  // TODO implement loader while fetching
  if (!posts.length) {
    return <p>Pas de posts</p>;
  }

  return (
    <Container maxWidth="md">
      <Typography variant="h2" component="h1" color="primary">
        Liste des posts
      </Typography>
      <Grid container spacing={3} className="list">
        {posts.map((post) => (
          <Grid item xs={6} key={post.id}>
            <PostItem post={post} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  posts: state.postsReducer.posts,
});

const mapDispatchToProps = {
  fetchPosts: (id) => fetchPosts(id),
};

export default connect(mapStateToProps, mapDispatchToProps)(ListOfItems);
