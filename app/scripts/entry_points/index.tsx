import * as React from 'react';
import { render } from 'react-dom';
import { forEach } from 'lodash';

import Hello from '../components/Hello';
import SimpleClassComponent from '../components/SimpleClass';

window.addEventListener('DOMContentLoaded', async (): Promise<void> => {
  forEach({
    hello: <Hello compiler="TypeScript" framework="React" />,
    'simple-class': <SimpleClassComponent message="1,2,3 3,4,5" />
  }, (component: JSX.Element, id: string) => {
    render(
      component,
      document.getElementById(id)
    );
  });

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
      const { value }: IteratorResult<number> = gen.next();
      console.log(value);

      if (value >= 10) {
        gen.return();
      }
    }, 1000);
  }
}

const test: TestClass = new TestClass();
test.run();
