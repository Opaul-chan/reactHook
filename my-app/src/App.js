import React, { Component, useState } from 'react';


export default function App() {

  const [buttonText, setButtonText] = useState("Click me,please");
  const [increment, setIncrement] = useState(0);

  return (
    <div>
  <button onClick={() => setButtonText("Thanks, been clicked!")}>{buttonText}</button>

  <h1>{increment}</h1>
  <button onClick={() => setIncrement(increment +1)}>Click to increment</button>
  <button onClick={() => setIncrement(increment -1)}>Click to decrement</button>  
      
    </div>
  )
}


// export default class App extends Component {

//   constructor(props) {
//     super(props);

//     this.state ={
//       buttonText: 'Click me please!'
//     }

//     this.handleClick = this.handleClick.bind(this);

//   }

//   handleClick(){
//     this.setState(() => {
//       return {buttonText:'Thanks, been clicked!'}
//     });
//   }
//   render() {
//     return (
//       <div>
//         <button onClick={this.handleClick}>{this.state.buttonText}</button>
//       </div>
//     )
//   }
// }

