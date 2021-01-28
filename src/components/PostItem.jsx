import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import {
  Card,
  CardContent,
  CardActionArea,
  Paper,
  Typography,
} from '@material-ui/core';

const useStyles = makeStyles({
  root: {},
  link: {
    textDecoration: 'none',
  },
});

const PostItem = (props) => {
  const { post } = props;
  const { title, id, body } = post;

  const classes = useStyles();

  return (
    <Paper elevation={1} className={classes.root}>
      <Link to={`/post/${props.post.id}`} className={classes.link}>
        <Card variant="outlined">
          <CardActionArea>
            <CardContent>
              <Typography variant="subtitle1" component="h2" color="primary">
                {title}
              </Typography>
              <Typography variant="body2" component="span">
                {body}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Link>
    </Paper>
  );
};

export default PostItem;
