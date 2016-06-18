import * as React from 'react';

import ToDoForm from './ToDo/ToDoForm.tsx';
import ToDoList, { ToDoProps } from './ToDo/ToDoList.tsx';

export interface Props {};
export interface State {
  todos: Array<ToDoProps>;
  inputValue: string;
};


export default class ToDo extends React.Component<Props, State> {
  state: State;

  constructor(props: Props) {
    super(props);
    this.state = {
      todos: [],
      inputValue: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleAddClick = this.handleAddClick.bind(this);
    this.handleRemoveClick = this.handleRemoveClick.bind(this);
    this.handleListClick = this.handleListClick.bind(this);
  }

  handleInputChange({ target }: Event): void {
    const node = target as HTMLInputElement;
    this.setState(Object.assign({}, this.state, { inputValue: node.value }));
  }

  handleListClick({ target }: Event): void {
    const node = getListNode(target as HTMLElement);
    const index = parseInt(node.getAttribute('data-index'), 10);

    this.setState(Object.assign({}, this.state, {
      todos: this.state.todos.map((todo, i) => {
        return i !== index ? todo : {
          desc: todo.desc,
          isDel: !todo.isDel
        };
      })
    }));
  }

  handleAddClick(): void {
    if (this.state.inputValue.length === 0) {
      return;
    }

    this.setState({
      inputValue: '',
      todos: [
        ...this.state.todos,
        {
          desc: this.state.inputValue,
          isDel: false
        }
      ]
    });
  }

  handleRemoveClick(): void {
    this.setState(Object.assign({}, this.state, {
      todos: this.state.todos.filter(todo => !todo.isDel)
    }));
  }

  render(): JSX.Element {
    const {
      handleInputChange,
      handleAddClick,
      handleListClick,
      handleRemoveClick,
      state: { todos, inputValue }
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
