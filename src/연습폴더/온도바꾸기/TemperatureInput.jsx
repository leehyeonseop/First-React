import React from 'react'
import { useState } from 'react';

const scaleNames = {
    c : '섭씨',
    f : '화씨'
};

function TemperatureInput(props) {
    // 더이상 사용 x
    // const [temperature, setTemperature] = useState('');

    const handleChange = (e) => {
        // setTemperature(e.target.value)
        props.onTemperatureChange(e.target.value)

    }


    return (
        <fieldset>
            <legend>
                온도를 입력해 주세요(단위:{scaleNames[props.scale]})
            </legend>
            {/* 변경 전 */}
            {/* <input value={temperature} onChange={handleChange} /> */}
            {/* 변경 후 */}
            <input value={props.temperature} onChange={handleChange} />
        </fieldset>
    )
}

export default TemperatureInput
