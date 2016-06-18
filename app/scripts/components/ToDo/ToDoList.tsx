import * as React from 'react';

import ToDoRow from './ToDoRow.tsx';

export interface Props {
  todos: Array<ToDoProps>;
  handleClick: (e: Event) => void;
}

export interface ToDoProps {
  desc: string;
  isDel: boolean;
};

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
