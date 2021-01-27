import React from 'react';
import ListOfItems from '../components/ListOfItems';
import AddPostForm from '../components/AddPostForm';

const PostsList = () => {
  return (
    <div>
      <h1>Liste des posts</h1>
      <ListOfItems />
      <h1>Ajouter un post</h1>
      <AddPostForm />
    </div>
  );
};

export default PostsList;
