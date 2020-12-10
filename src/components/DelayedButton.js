import React, { Component } from "react";

export default class DelayedButton extends Component {
  handleClick = (event) => {
    const target = event.persist()
    setTimeout(() => this.props.onDelayedClick(event), this.props.delay);
  };
  render() {
    return <button onClick={this.handleClick}>DelayedButton</button>;
  }
}
