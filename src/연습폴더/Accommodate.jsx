import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import useCounter from './useCounter';



const MAX_NUM = 10;

function Accommodate() {
    const [count, increaseCount, decreaseCount] = useCounter(0)
    const [isFull, setIsFull] = useState(false)

    useEffect(() => {
        setIsFull(count >= MAX_NUM)
        console.log(`Current count value : ${count}`);
    },[count])

    return (
        <div>
            <button onClick={increaseCount} disabled={isFull}>
                입장
            </button>
            <button onClick={decreaseCount}>퇴장</button>
            <h3>현재 인원은 {count} 명 입니다.</h3>
            {isFull && <p style={{color : 'red'}}>더 못들어갑니당</p>}
        </div>
    )
}

export default Accommodate
