import React, { Component } from 'react'

export default class App extends Component {

  constructor(props) {
    super(props);

    this.state ={
      buttonText: 'Click me please!'
    }

    this.handleClick = this.handleClick.bind(this);

  }

  handleClick(){
    this.setState(() => {
      return {buttonText:'Thanks, been clicked!'}
    });
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>{this.state.buttonText}</button>
      </div>
    )
  }
}

