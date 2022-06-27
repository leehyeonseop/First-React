import styled from "styled-components"

import React from 'react'

const SimpleButton = styled.button`
    color: white;
    background-color: green;
`;

const LargeButton = styled(SimpleButton)`
    font-size: 50px;
`

const ReactButton = props => {
    // console.log('props', props)
    // console.log('children', props.children)
    return <button className={props.className}>{props.children}</button>
}

const ReactLargeButton = styled(ReactButton)`
    font-size: 50px;
`

const PrimaryButton = styled.button`
    color:${function(props) {
        console.log(props)
        if(props.primary) {
            return 'white';
        } else {
            return 'black';
        }
        return 'blue'
    }};
`

function StyledComponent() {

    return (
        <div>
            <SimpleButton>Simple</SimpleButton>
            <LargeButton>Large</LargeButton>
            <ReactButton>React</ReactButton>
            <ReactLargeButton>React Large</ReactLargeButton>
            <PrimaryButton>Normal</PrimaryButton>
            <PrimaryButton primary>Primary</PrimaryButton>
        </div>
    )
}

export default StyledComponent
