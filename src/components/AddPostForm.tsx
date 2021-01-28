import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createPost } from '../redux/actions/posts';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Button, TextField, Typography } from '@material-ui/core';

export interface Post {
  title: string;
  body: string;
  userId: number;
}

interface Props {
  newPost: Post;
  createPost: (createdPost: Post) => void;
}

const useStyles = makeStyles({
  root: {},
  form: {
    display: 'flex',
    justifyContent: 'space-around',
    width: '70%',
    margin: '0 auto',
  },
});

const AddPostForm: React.FC<Props> = ({ createPost, newPost }) => {
  const classes = useStyles();

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  // TODO add input validation checks before submit
  return (
    <Container maxWidth="md" className={classes.root}>
      <Typography variant="h2" component="h1" color="primary">
        Ajouter un post
      </Typography>

      {newPost && <p>Le post est bien enregistré !</p>}
      <div className={classes.form}>
        <TextField
          variant="outlined"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="titre du post"
        />
        <TextField
          variant="outlined"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          placeholder="contenu du post"
        />
        <Button
          variant="contained"
          color="primary"
          onClick={() => createPost({ title, body, userId: 1 })}
        >
          ajouter un post
        </Button>
      </div>
    </Container>
  );
};

const mapStateToProps = (state: { postsReducer: { createdPost: Post } }) => ({
  newPost: state.postsReducer.createdPost,
});

const mapDispatchToProps = {
  createPost: (createdPost: Post) => createPost(createdPost),
};

export default connect(mapStateToProps, mapDispatchToProps)(AddPostForm);
