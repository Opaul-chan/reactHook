import React, { Component, useState, useEffect } from 'react';
import useFetch from './useFetch';

export default function App(){

    const [buttonText, setButtonText] = useState('Click me, please')
    const [increment, setIncrement] = useState(0)

    const data = useFetch('https://jsonplaceholder.typicode.com/users')

    return(
        <div>
            <button onClick={() => setButtonText("Thanks, been clicked!")}>{buttonText}</button>
            <h1>{increment}</h1>
            <button onClick={() => setIncrement(increment+1)}>Click to increment</button>
            <button onClick={() => setIncrement(increment-1)}>Click to increment</button>
            <hr />
            <ul>
                {data.map(el => (
                    <li key={el.id}>{el.name}</li>
                ))}
            </ul>
        </div>
    )
}