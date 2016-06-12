import * as React from 'react';

export interface IPropTypes {
  compiler: string;
  framework: string;
}

const Hello: React.SFC<IPropTypes> = (props: IPropTypes) => (
  <h1 className="hello__header">
    Hello from {props.compiler} and {props.framework}!
  </h1>
);
export default Hello;
