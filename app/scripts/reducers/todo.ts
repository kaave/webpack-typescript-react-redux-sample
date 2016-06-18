import { Action } from 'redux-actions';
import * as Actions from '../actions/todo';

import ToDoModel from '../models/ToDo';

export function inputValue(state: string = '', action: Action<string>): string {
  switch (action.type) {
  case Actions.INPUT_TEXT:
    return action.payload;
  case Actions.EXEC_ADD:
    return '';
  default:
    return state;
  }
}

export function todos(state: Array<ToDoModel> = [], action: Action<number|string>): Array<ToDoModel> {
  switch (action.type) {
  case Actions.ON_LIST_CLICK:
    return state.map((todo, i) => {
      return i !== action.payload ? todo : {
        desc: todo.desc as string,
        isDel: !todo.isDel
      };
    });
  case Actions.EXEC_ADD:
    return [
      ...state,
      {
        desc: action.payload as string,
        isDel: false
      }
    ];
  case Actions.EXEC_REMOVE:
    return state.filter(todo => !todo.isDel);
  default:
    return state;
  }
}

export default {
  inputValue,
  todos
};
