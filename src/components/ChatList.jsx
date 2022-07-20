import React from "react";
import SenderMessage from "./SenderMessage.jsx";
import ReceiverMessage from "./ReceiverMessage.jsx";

const ChatList = ({ chatList, name: loggedName }) => {
    return <React.Fragment>{chatList.map(({ name, message }, id) => {
        if (loggedName === name) {
            return <ReceiverMessage key={id} message={message} name={name} />
        }
        return <SenderMessage name={name} key={id} message={message} />

    })}</React.Fragment>
};

export default ChatList;