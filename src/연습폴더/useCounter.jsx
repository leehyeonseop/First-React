import React from 'react'
import { useState } from 'react'

function useCounter(initialValue) {

    const [count, setCount] = useState(initialValue)

    const increaseCount = () => {
        setCount((prevCount) => prevCount + 1)
    }

    const decreaseCount = () => {
        setCount((prevCount) => Math.max((prevCount - 1),0))
    }

    return [count, increaseCount, decreaseCount]
}

export default useCounter
