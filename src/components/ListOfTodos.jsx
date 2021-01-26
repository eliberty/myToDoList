import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchTodos } from '../redux/actions/todos';
import TodoItem from '../components/TodoItem';

const ListOfTodos = ({ todos = [], ...funcs }) => {
  useEffect(() => {
    funcs.fetchTodos();
  }, []);

  if (!todos.length) {
    return <>Pas de todos</>;
  }

  return (
    <div className="list">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  todos: state.todosReducer.todos,
});

const mapDispatchToProps = {
  fetchTodos: fetchTodos,
};

export default connect(mapStateToProps, mapDispatchToProps)(ListOfTodos);
