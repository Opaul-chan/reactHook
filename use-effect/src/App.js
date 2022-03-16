 import React, { Component, useState ,useEffect} from 'react';


export default function App() {

  const [buttonText, setButtonText] = useState("Click me,please");
  const [increment, setIncrement] = useState(0);
  const [data, setData] = useState([])

  useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/users')
      .then((response => response.json()))
      .then(data => setData(data))
      console.log(data)
      }, [])

  return (
    <div>
  <button onClick={() => setButtonText("Thanks, been clicked!")}>{buttonText}</button>

  <h1>{increment}</h1>
  <button onClick={() => setIncrement(increment +1)}>Click to increment</button>
  <button onClick={() => setIncrement(increment -1)}>Click to decrement</button>

  <hr />
  <ul>
    {data.map(el => (
      <li key={el.id}>{el.name}</li>
    ))}
  </ul>
      
    </div>
  )
}
