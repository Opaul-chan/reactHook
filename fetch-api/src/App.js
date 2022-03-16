//fetch API by  componentDidMount()
import React, { Component} from 'react';
export default class App extends Component {

  constructor(props) {
    super(props);

    this.state ={
      buttonText: 'Click me please!',
      data: []
    }

    this.handleClick = () => {
      this.setState({
        buttonText: 'Thanks, been clicked!'
      });
    }
  }
  
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => this.setState(() => {
      console.log(data)
      return { data }
    }))
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>{this.state.buttonText}</button>

        <hr />
        <ul>
          {this.state.data.map(el => (
            <li key={el.id}>{el.name}</li>
          ))}
        </ul>

      </div>
    )
  }
}

