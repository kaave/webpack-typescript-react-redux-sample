import * as React from 'react';
import { render } from 'react-dom';

import { applyMiddleware, createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import createLogger = require('redux-logger');

import todoReducers from '../reducers/todo';

import ToDo from '../containers/ToDo.tsx';

window.addEventListener('DOMContentLoaded', () => {
  const store = createStore(
    combineReducers(todoReducers),
    applyMiddleware(
      createLogger()
    )
  );

  render(
    (
      <Provider store={store}>
        <ToDo />
      </Provider>
    ),
    document.getElementById('mount-point')
  );
});

// Generator check
// function wait(msec: number = 1000, val: string): Promise<string> {
//   return new Promise((resolve: (str: string) => void) => {
//     setTimeout(resolve, msec, val);
//   });
// }
//
// function* counter(): IterableIterator<number> {
//   let count: number = 0;
//   while (true) {
//     count += 1;
//     yield count;
//   }
// }
//
// class TestClass {
//   run(): void {
//     console.log('------------------------------');
//     (async (): Promise<void> => {
//       const waited: string = await wait(1500, '151515');
//       console.log(waited);
//     })();
//     console.log('==============================');
//
//     const gen: IterableIterator<number> = counter();
//     setInterval((): void => {
//       const { value }: IteratorResult<number> = gen.next();
//       console.log(value);
//
//       if (value >= 10) {
//         gen.return();
//       }
//     }, 1000);
//   }
// }
//
// const test: TestClass = new TestClass();
// test.run();
