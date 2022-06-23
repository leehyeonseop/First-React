import React, { Component } from 'react'

const styles = {
    wrapper : {
        margin : 8,
        padding : 8,
        display : "flex",
        flexDirection : "row",
        border : "1px solid grey",
        borderRadius : 16,
    },
    messageText : {
        color : "black",
        fontSize : 16,
    }
}

export default class Notification extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }
    
    componentDidMount () {
        console.log(`${this.props.id}가 마운트됨`)
    }

    componentDidUpdate() {
        console.log(`${this.props.id}가 업데이트됨`)
    }

    componentWillUnmount() {
        console.log(`${this.props.id}가 죽음`)
    }

    render() {
        return (
        <div style={styles.wrapper}>
            <span style={styles.messageText}>{this.props.message}</span>
        </div>
        )
    }
}


