import React, { Component } from 'react';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  updateState(key, value) {
    this.state({
      [key]: value,
    });
  }
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div>
        { this.props.children && React.cloneElement(this.props.children, {
           updateOverallState: (k, v) => {
             return this.updateState(k, v);
           }
        })}
      </div>
    );
  }
}
