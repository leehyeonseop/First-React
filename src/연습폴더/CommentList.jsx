import React from 'react'
import Comment from './Comment'

const comments = [
    {
        name : '이현섭',
        comment : '하이용~!'
    },
    {
        name : '강호동',
        comment : '안녕~!'
    },
    {
        name : '유재석',
        comment : '안녕하세요~!'
    },
]

function CommentList() {
    return (
        <div>
            {comments.map(comment => {
                return (
                    <Comment name={comment.name} comment={comment.comment}/>
                )
            })}
        </div>
    )
}

export default CommentList
