import React from 'react'
import BoilingVerdict from './BoilingVerdict';
import { useState } from 'react';
import TemperatureInput from './TemperatureInput';

function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if(Number.isNaN(input)) {
        return '';
    }

    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}

function Calculator() {
    const [temperature, setTemperature] = useState('');
    const [scale, setScale] = useState('c');

    const handleCelsiusChange = (temperature) => {
        setTemperature(temperature);
        setScale('c');
    }

    const handleFahrenheitChange = (temperature) => {
        setTemperature(temperature);
        setScale('f')
    }

    // const handleChange = (e) => {
    //     setTemperature(e.target.value)
    // }

    const celsius =
        scale === "f" ? tryConvert(temperature, toCelsius) : temperature;

    const fahrenheit =
        scale === "c" ? tryConvert(temperature, toFahrenheit) : temperature;



    return (
        // <fieldset>
        //     <legend>섭씨 온도를 입력하세요</legend>
        //     <input
        //         value={temperature}
        //         onChange={handleChange}
        //     />
        //     <BoilingVerdict celsius={parseFloat(temperature)} />
        // </fieldset>
        <div>
            <TemperatureInput 
                scale="c"
                temperature={celsius}
                onTemperatureChange={handleCelsiusChange}
                />
            <TemperatureInput 
                scale="f"
                temperature={fahrenheit}
                onTemperatureChange={handleFahrenheitChange} 
                />
        </div>
    )
}

export default Calculator
