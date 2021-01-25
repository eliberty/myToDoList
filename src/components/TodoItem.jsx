import React from 'react';


const TodoItem = (props) => {
  return (
    <div className="item">
      <span>{props.todo.title}</span>
      <span>{props.todo.body}</span>
    </div>
  );

};

export default TodoItem;