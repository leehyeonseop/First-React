import React from "react";
import Notification from './Notification';

const reservedNotifications = [
    {
        id : 1,
        message : "안녕하세요 오늘 일정 알려드릴게요"
    },
    {
        id : 2,
        message : "예비군 연기해야 해요"
    },
    {
        id : 3,
        message : "오늘하루도 화이팅~!"
    }
]

let timer;

class NotificationList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            notifications : []
        };
    }

    componentDidMount() {
        const {notifications} = this.state
        timer = setInterval(() => {
            if(notifications.length < reservedNotifications.length) {
                const index = notifications.length;
                notifications.push(reservedNotifications[index])
                this.setState({
                    notifications : notifications,
                });
            } else {
                this.setState({
                    notifications : []
                })
                clearInterval(timer)
            }
        }, 1000)
    }

    render() {
        return (
            <div>
                {this.state.notifications.map((notification) => {
                    return <Notification message={notification.message} key={notification.id} id={notification.id}/>
                })}
            </div>
        )
    }
}

export default NotificationList;