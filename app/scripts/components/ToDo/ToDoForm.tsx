import * as React from 'react';

export interface Props {
  onAddClick: (e: Event) => void;
  onRemoveClick: (e: Event) => void;
  onChange: (e: Event) => void;
  value: string;
  canAddClick: boolean;
}

const ToDoForm: React.SFC<Props> = ({ value, canAddClick, onAddClick, onRemoveClick, onChange }) => (
  <div>
    <input type="text" value={value} onChange={onChange} />
    <button onClick={canAddClick && onAddClick}>ADD</button>
    <button onClick={onRemoveClick}>REMOVE</button>
  </div>
);
export default ToDoForm;
