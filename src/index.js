import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import css from './index.scss';

const docRoot = document.getElementById('root');

class Hello extends Component {
  render() {
    return (
      <h1>Hello world!</h1>
    );
  }
}

ReactDOM.render(
  <Hello />,
  docRoot
);
