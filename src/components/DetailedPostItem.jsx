import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchPost, fetchPostComments } from '../redux/actions/posts';
import Loader from '../components/Loader';
import {
  Grid,
  Typography,
  Container,
  Box,
  Card,
  Paper,
  CardContent,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {},
  post: {
    marginBottom: '1.5em',
  },
  subtitle: {
    marginBottom: '0.4em',
  },
  list: {
    display: 'flex',
    backgroundColor: 'lightgrey',
    borderRadius: '5px',
    margin: '20px 5px',
    padding: '10px',
  },
});

const DetailedPostItem = ({
  selectedPost = {},
  selectedPostComments = [],
  fetchPost,
  fetchPostComments,
  fetching,
}) => {
  const { id } = useParams();
  const classes = useStyles();
  const { title, body } = selectedPost;

  useEffect(() => {
    fetchPost(id);
    fetchPostComments(id);
  }, []);

  if (!selectedPost) {
    return <p>Nous n'avons pas trouvé ce post :'(</p>;
  }

  console.log(fetching);
  // TODO separate post details & post comments in two components
  if (fetching) {
    return <Loader />;
  }
  return (
    <Container maxWidth="md" className={classes.root}>
      <Box className={classes.post}>
        <Typography variant="h2" component="h1" color="primary">
          Détails du post
        </Typography>
        <Typography
          variant="subtitle1"
          component="h2"
          className={classes.subtitle}
        >
          {title}
        </Typography>
        <Typography variant="body2" component="span">
          {body}
        </Typography>
      </Box>

      <Typography
        variant="h2"
        component="h2"
        color="primary"
        className={classes.subtitle}
      >
        Commentaires du post
      </Typography>
      <Grid container spacing={3} className={classes.item}>
        {selectedPostComments.length ? (
          selectedPostComments.map((item) => {
            return (
              <Grid item xs={6} key={item.id}>
                <Paper elevation={1}>
                  <Card variant="outlined">
                    <CardContent>
                      <Typography variant="h5" component="h3" color="primary">
                        {item.name}
                      </Typography>
                      <Typography variant="subtitle1" component="h4">
                        Comment from :<br />
                        {item.email}
                      </Typography>
                      <p>{item.body}</p>
                    </CardContent>
                  </Card>
                </Paper>
              </Grid>
            );
          })
        ) : (
          <p>Il n'y a pas de commentaires pour ce post</p>
        )}
      </Grid>
    </Container>
  );
};
const mapStateToProps = (state) => ({
  selectedPost: state.postsReducer.selectedPost,
  selectedPostComments: state.postsReducer.selectedPostComments,
  fetching: state.postsReducer.fetching,
});

const mapDispatchToProps = {
  fetchPost: (id) => fetchPost(id),
  fetchPostComments: (id) => fetchPostComments(id),
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailedPostItem);
