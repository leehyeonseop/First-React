import React from 'react'
import styled from 'styled-components'


const Button = styled.button`
    color: blue;
    background-color: pink;
    font-size: 20px;
`

const LargeButton = styled(Button)`
    width: 100px;
    height: 200px;
`

const NormalButton = (props) => {
    console.log(props)
    return <button className={props.className}>{props.children}</button>
}

const StyledNormalButton = styled(NormalButton)`
    background-color: lightsalmon;
    font-size: 40px;
`



function StyledComponent2() {
    return (
        <div>
            <Button>안녕하세요</Button>
            <LargeButton>큰버튼</LargeButton>
            <NormalButton>노말버튼</NormalButton>
            <StyledNormalButton>스타일된버튼</StyledNormalButton>
        </div>
    )
}

export default StyledComponent2
