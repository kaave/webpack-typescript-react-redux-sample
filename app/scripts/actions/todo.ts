import { createAction } from 'redux-actions';

export const INPUT_TEXT = 'TODO_UPDATE_TEXT';
export const ON_LIST_CLICK = 'TODO_ON_LIST_CLICK';
export const EXEC_ADD = 'TODO_EXEC_ADD';
export const EXEC_REMOVE = 'TODO_EXEC_REMOVE';

export const inputText = createAction<string>(
  INPUT_TEXT,
  (text: string) => text
);

export const onListClick = createAction<number>(
  ON_LIST_CLICK,
  (index: number) => index
);

export const execAdd = createAction<string>(
  EXEC_ADD,
  (text: string) => text
);

export const execRemove = createAction<void>(
  EXEC_REMOVE,
  () => {}
);
