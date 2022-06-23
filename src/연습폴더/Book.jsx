import React from 'react'

function Book(props) {
    return (
        <div>
            <h1>이책의 이름은 {props.name}입니다</h1>
            <h2>이책의 가격은 {props.price}입니다.</h2>
        </div>
    )
}

export default Book
