import * as React from 'react';
import { render } from 'react-dom';

import Hello from '../components/Hello';

render(
  <Hello compiler="TypeScript" framework="React" />,
  document.getElementById('example')
);

window.addEventListener('DOMContentLoaded', async (): Promise<void> => {
  const waited: string = await wait(3000, 'aaaaaa');
  console.log(waited);
});

function wait(msec: number = 1000, val: string): Promise<string> {
  return new Promise((resolve: (str: string) => void) => {
    setTimeout(resolve, msec, val);
  });
}

function* counter(): IterableIterator<number> {
  let count: number = 0;
  while (true) {
    count += 1;
    yield count;
  }
}

class TestClass {
  run(): void {
    console.log('------------------------------');
    (async (): Promise<void> => {
      const waited: string = await wait(1500, '151515');
      console.log(waited);
    })();
    console.log('==============================');

    const gen: IterableIterator<number> = counter();
    setInterval((): void => {
      console.log(gen.next().value);
    }, 1000);
  }
}

const test: TestClass = new TestClass();
test.run();
