import * as React from 'react';

export interface Props {
  index: number;
  desc: string;
  isDel: boolean;
  handleClick: (e: Event) => void;
}

const ToDoRow: React.SFC<Props> = ({ index, desc, isDel, handleClick }) => (
  <li style={{ cursor: 'pointer' }} onClick={handleClick} data-index={index}>
    {isDel ? <del>{desc}</del> : desc}
  </li>
);
export default ToDoRow;
