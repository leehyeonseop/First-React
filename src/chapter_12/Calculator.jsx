import React from 'react'
import { useState } from 'react';
import TemperatureInput from './TemperatureInput'

function BoilingVerdict(props) {
    if (props.celsius >= 100) {
        return <p>물이 끓습니다.</p>
    }
    return <p>물이 끓지 않습니다.</p>
}

function toCelsius(fahrenheit) {
    return ((fahrenheit-32) * 5 ) / 9;
}

function toFahrenheit(celsius) {
    return (celsius * 9) / 5 + 32;
}

function tryConvent(temperature, convert) {
    const input = parseFloat(temperature);
    if(Number.isNaN(input)) {
        return "";
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString()
}


function Calculator() {
    


    const [temperature, setTemperature] = useState("");
    const [scale, setScale] = useState("c");

    const handleCelciusChange = (temperature) => {
        
        setTemperature(temperature);
        setScale("c");
    }

    const handleFahrenheitChange = (temperature) => {
        
        setTemperature(temperature);
        setScale("f");
    }

    const celsius =
        scale === "f" ? tryConvent(temperature, toCelsius) : temperature;

    const fahrenheit =
        scale === "c" ? tryConvent(temperature, toFahrenheit) : temperature;


    return (
        <div>
            <TemperatureInput
                scale="c"
                temperature={celsius}
                onTemperatureChange={handleCelciusChange}
            />
            <TemperatureInput 
                scale="f"
                temperature={fahrenheit}
                onTemperatureChange={handleFahrenheitChange}
            />
            <BoilingVerdict celsius={parseFloat(celsius)} />
        </div>
    )
}

export default Calculator
