import React from 'react'
import Toolbar from './Toolbar'
import { useState } from 'react'

function LandingPage() {
    const [isLoggedin, setIsLoggedin] = useState(false)

    const onClickLogin = () => {
        setIsLoggedin(true)
    }

    const onClickLogout = () => {
        setIsLoggedin(false)
    }


    return (
        <div>
            <Toolbar
                isLoggedin={isLoggedin}
                onClickLogin={onClickLogin}
                onClickLogout={onClickLogout}
            />
            <div style={{padding : 16}}>함께하는 리액트 공부~!</div>

        </div>
    )
}

export default LandingPage
