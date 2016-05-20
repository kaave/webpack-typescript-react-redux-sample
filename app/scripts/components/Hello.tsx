import * as React from 'react';

export interface IProps {
  compiler: string;
  framework: string;
}

const Hello = ({ compiler, framework }: IProps) => (
  <h1 className="hello__header">
    Hello from {compiler} and {framework}!
  </h1>
);
export default Hello;
