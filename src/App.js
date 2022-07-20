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
            updateChatList()
            clearInterval(interval);
        };
    });

    const updateChatList = () => {
        if (storeChatList.length > chatList.length) {
            setChatList(storeChatList);
        }
    }

    return (
        <Container style={{ paddingTop: "40px", border: "1px #ddd solid", width: "350px" }} className="my-auto">
            {
                !!name ?
                    <>
                        <div style={{ overflowY: "scroll", height: "350px", overflowX: "hidden" }} onScroll={handleScroll}>
                            <ChatList chatList={chatList.slice(-1 * chatLimit)} name={name} />
                        </div>
                        <ChatForm customStyle={{ padding: "10px", background: "#ddd" }} name={name} setChatList={setChatList} storeChatList={storeChatList} />
                    </>
                    : (<NameForm />)
            }
        </Container>
    );
};

export default App;