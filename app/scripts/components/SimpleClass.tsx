import * as React from 'react';

export interface SimpleClassProps {
  message: string;
}

export interface SimpleClassState {
  random: number;
}

export default class SimpleClass extends React.Component<SimpleClassProps, SimpleClassState> {
  state: SimpleClassState;

  constructor(props: SimpleClassProps) {
    super(props);
    this.state = {
      random: Math.random()
    };
  }

  render(): JSX.Element {
    return (
      <div>
        Random: {this.state.random}
        <h1>{this.props.message}</h1>
        <h2>{this.props.message}</h2>
        <h3>{this.props.message}</h3>
        <h4>{this.props.message}</h4>
        <h5>{this.props.message}</h5>
        <h6>{this.props.message}</h6>
      </div>
    );
  }
}
