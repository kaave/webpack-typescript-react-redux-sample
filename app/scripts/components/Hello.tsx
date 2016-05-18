import * as React from 'react';

export interface IProps {
  compiler: string;
  framework: string;
}

// export default class Hello extends React.Component<IProps, {}> {
//   render() {
//     const { compiler, framework } = this.props;
//
//     return (
//       <h1 className="hello__header">
//         Hello from {compiler} and {framework}!
//       </h1>
//     );
//   }
// }

const Hello = ({ compiler, framework }: IProps) => (
  <h1 className="hello__header">
    Hello from {compiler} and {framework}!
  </h1>
);
export default Hello;
