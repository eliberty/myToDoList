import ListOfTodos from './components/ListOfTodos';
import AddTodoForm from './components/AddTodoForm.tsx';
import './styles/index.css';
import React from 'react';

const App = () => {

    return (
      <div>
        <h1>Liste des posts</h1>
      <ListOfTodos />
        <h1>Ajouter un post</h1>
      <AddTodoForm />
      </div>
    );

};

export default App;