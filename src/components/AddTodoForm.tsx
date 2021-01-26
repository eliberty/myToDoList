import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createTodo } from '../redux/actions/todos';

export interface Todo {
  title: string;
  body: string;
  userId: number;
}

interface Props {
  newTodo: Todo;
  createTodo: (createdTodo: Todo) => void;
}

const AddTodoForm: React.FC<Props> = ({ createTodo, newTodo }) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  return (
    <div>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="titre du post"
      />
      <input
        type="text"
        value={body}
        onChange={(e) => setBody(e.target.value)}
        placeholder="contenu du post"
      />
      <button onClick={() => createTodo({ title, body, userId: 1 })}>
        ajouter un post
      </button>
      {newTodo && <p>Le post est bien enregistré !</p>}
    </div>
  );
};

const mapStateToProps = (state: { todosReducer: { createdTodo: Todo } }) => ({
  newTodo: state.todosReducer.createdTodo,
});

const mapDispatchToProps = {
  createTodo: (createdTodo: Todo) => createTodo(createdTodo),
};

export default connect(mapStateToProps, mapDispatchToProps)(AddTodoForm);
