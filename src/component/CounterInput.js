import React from 'react';
import { useDispatch } from 'react-redux';
import './Button.css'
export default function CounterInput() {
    const dispatch = useDispatch();


    return <div >

        <button className="Button" onClick={() => dispatch({
            type: 'INCREMENT'
        })}>+</button>

        <br />


        <button className="Button" onClick={() => dispatch({
            type: 'DECREMENT'
        })}>-</button>

        <br /> <br />

        <button className="Button" onClick={() => dispatch({
            type: 'RESET'
        })}>RESET</button>

    </div>
}