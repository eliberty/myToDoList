import React from 'react';
import { Link } from 'react-router-dom';
import './PostItem.css';

const PostItem = (props) => {
  return (
    <Link to={`/post/${props.post.id}`}>
      <div className="item">
        <span>{props.post.title}</span>
        <span>{props.post.body}</span>
      </div>
    </Link>
  );
};

export default PostItem;
