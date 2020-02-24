import React, { useState } from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';

const CounterPage = () => {
    // countRed added, because the reducers are combined in index.js
    const counter = useSelector(state => state.countRed.counter, shallowEqual);
    let text = useSelector(state => state.textRed.text);
    const results = useSelector(state => state.resRed.results);
    const dispatch = useDispatch();
    const [inputText, setInputText] = useState('');

    console.log(results, counter)

    return (
        <div>
            <h1>{counter} {text}</h1>
            <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
            <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
            <button onClick={() => dispatch({ type: 'ADD', val: 10 })}>Add 10</button>
            <button onClick={() => dispatch({ type: 'SUBTRACT', val: 5 })}>Subtract 5</button>
            <input value={inputText} onChange={(e) => setInputText(e.target.value)} />
            <button onClick={() => dispatch({ type: 'SUBMIT_TEXT', data: inputText })}>Add text</button>
            <br />
            <br />
            <button onClick={() => dispatch({ type: 'STORE_RESULT', countResult: counter, textResult: text })}>STORE COUNT</button>
            <ul>
                {results.map(res => (
                    <li key={res.id}>{res.value}</li>
                ))}
            </ul>
        </div>
    )
}

export default CounterPage;