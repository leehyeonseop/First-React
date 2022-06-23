import React from 'react'
import { useState } from 'react'
import Toolbar from './Toolbar'

function LandingPage() {
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const onClickLogin = () => {
        setIsLoggedIn(true);
    }

    const onClickLogout = () => {
        setIsLoggedIn(false);
    }

    return (

        <div>
            <Toolbar
                isLoggedIn = {isLoggedIn}
                onClickLogin = {onClickLogin}
                onClickLogout = {onClickLogout}
            />
            <div style={{padding : 16}}>함께하는 리액트 공부~!</div>
        </div>
    )
}

export default LandingPage
