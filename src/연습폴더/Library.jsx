import React from 'react'
import Book from './Book'

function Library() {
    return (
        <div>
            <Book name={'리액트'} price={30000} />
            <Book name={'스벨트'} price={25000} />
        </div>
    )
}

export default Library
