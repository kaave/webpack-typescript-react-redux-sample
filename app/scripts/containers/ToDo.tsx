import * as React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import * as Actions from '../actions/todo';

import ToDoForm from '../components/ToDo/ToDoForm.tsx';
import ToDoList from '../components/ToDo/ToDoList.tsx';
import ToDoModel from '../models/ToDo';

export interface Props {
  dispatch: Dispatch;
  inputValue: string;
  todos: Array<ToDoModel>;
};
export interface State {};

class ToDo extends React.Component<Props, State> {
  state: State;

  constructor(props: Props) {
    super(props);

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleAddClick = this.handleAddClick.bind(this);
    this.handleRemoveClick = this.handleRemoveClick.bind(this);
    this.handleListClick = this.handleListClick.bind(this);
  }

  handleInputChange({ target }: Event): void {
    const node = target as HTMLInputElement;
    this.props.dispatch(Actions.inputText(node.value));
  }

  handleListClick({ target }: Event): void {
    const node = getListNode(target as HTMLElement);
    const index = parseInt(node.getAttribute('data-index'), 10);
    this.props.dispatch(Actions.onListClick(index));
  }

  handleAddClick(): void {
    if (this.props.inputValue.length === 0) {
      return;
    }

    this.props.dispatch(Actions.execAdd(this.props.inputValue));
  }

  handleRemoveClick(): void {
    this.props.dispatch(Actions.execRemove());
  }

  render(): JSX.Element {
    const {
      handleInputChange,
      handleAddClick,
      handleListClick,
      handleRemoveClick,
      props: { todos, inputValue }
    }: ToDo = this;

    return (
      <div>
        <ToDoForm onChange={handleInputChange} onAddClick={handleAddClick} onRemoveClick={handleRemoveClick} value={inputValue} canAddClick={inputValue.length > 0} />
        <ToDoList todos={todos} handleClick={handleListClick} />
      </div>
    );
  }
}

function getListNode(node: HTMLElement): HTMLElement {
  return ['LI', 'BODY'].indexOf(node.nodeName) >= 0 ? node : getListNode(node.parentNode as HTMLElement);
}

const mapStateToProps = (state: Object) => (state);

export default connect(mapStateToProps)(ToDo);
