import React from 'react'
import { useState } from 'react'

function BB(props) {

    

    const handlerWord = (e) => {
        props.setWord(e.target.value)
    }

    return <input value={props.word} onChange={handlerWord} />
}

function AA() {

    const [word, setWord] = useState('');

    return (
        <div>
            <BB word={word} setWord={setWord}/>
            <br></br>
            <BB word={word} setWord={setWord}/>
        </div>
    )
}



export default AA
