import React from 'react'
import Comment from './Comment'

const comments = [
    {
        name : '이현섭',
        comment : '안녕하세요~~'
    },
    {
        name : '홍길동',
        comment : '시작합니다 리액트!'
    },
    {
        name : '강민경',
        comment : '저도 리액트 배우고 싶어요~!'
    }
]

function CommentList(props) {
    return (
        <div>
            {comments.map(comment => {
                return (
                    <Comment name={comment.name} comment={comment.comment} />
                )
            })}
        </div>
    )
}

export default CommentList
