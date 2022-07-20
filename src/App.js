import React from "react";
import Container from 'react-bootstrap/Container';
import ChatForm from "./components/ChatForm.jsx";
import NameForm from "./components/NameForm.jsx";
import ChatList from "./components/ChatList.jsx";
import { store } from "./store";
import { config } from "./config.js";

const App = () => {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());
    const name = params.name;
    const storeChatList = store.getState().chatList;

    const [chatLimit, setChatLimit] = React.useState(config.chatLimit);

    const [chatList, setChatList] = React.useState(storeChatList);

    const handleScroll = (e) => {
        if (e.currentTarget.scrollTop === 0) {
            setTimeout(() => setChatLimit(chatLimit + config.chatLimit), 1000);
        }
    }

    React.useEffect(() => {
        const interval = setInterval(() => updateChatList(), 1000);
        return () => {
            clearInterval(interval);
        };
    });

    const updateChatList = () => {
        const latestChatList = store.getState().chatList;
        if (latestChatList.length > chatList.length) {
            setChatList(latestChatList);
        }
    }

    return (
        <Container className="main-container">
            {
                !!name ?
                    <>
                        <div className="chats-container" onScroll={handleScroll}>
                            <ChatList chatList={chatList.slice(-1 * chatLimit)} name={name} />
                        </div>
                        <ChatForm className="chat-form-container" name={name} setChatList={setChatList} storeChatList={storeChatList} />
                    </>
                    : (<NameForm />)
            }
        </Container>
    );
};

export default App;