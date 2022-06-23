import React from 'react'

const students = [
    {
        name : '강호동'
    },
    {
        name : '이수근'
    },
    {
        name : '이현섭'
    },
    {
        name : '홍길동'
    },
    {
        name : '강길동'
    },
]

function AttendanceBook() {
    return (
        <ul>
            {students.map((student, index) => {
                return <li key={index}>{student.name}</li>
            })}
        </ul>
    )
}

export default AttendanceBook
