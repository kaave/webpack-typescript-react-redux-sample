import * as React from 'react';

import ToDoModel from '../../models/ToDo';
import ToDoRow from './ToDoRow.tsx';

export interface Props {
  todos: Array<ToDoModel>;
  handleClick: (e: Event) => void;
}

const ToDoList: React.SFC<Props> = ({ todos, handleClick }) => {
  return (
    todos.length > 0 ? (
      <ul>
      {todos.map(({ desc, isDel }, i) => (
        <ToDoRow key={i} handleClick={handleClick} index={i} isDel={isDel} desc={desc} />
      ))}
      </ul>
    ) : null
  );
};

export default ToDoList;
