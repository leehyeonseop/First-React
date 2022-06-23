import React from 'react'
import Card from './Card'

function ProfileCard(props) {
    return (
        <div>
            <Card title="hyeon seop" backgroundColor="lightgreen">
                <p>안녕하세요, 이현섭입니다</p>
                <p>저는 리액트를 배우고 있습니다~!</p>
            </Card>
        </div>
    )
}

export default ProfileCard
