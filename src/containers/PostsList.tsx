import React from 'react';
import ListOfItems from '../components/ListOfItems';
import AddPostForm from '../components/AddPostForm';

const PostsList = () => {
  return (
    // TODO consider add condition on state.fetching : if true, display loader
    <>
      <ListOfItems />
      <AddPostForm />
    </>
  );
};

export default PostsList;
