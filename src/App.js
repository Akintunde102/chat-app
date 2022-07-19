import React from "react";
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import ChatForm from "./components/ChatForm.jsx";
import NameForm from "./components/NameForm.jsx";
import ChatList from "./components/ChatList.jsx";
import { store } from "./store";

const App = () => {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());
    const name = params.name;
    const storeChatList = store.getState().chatList;

    const [chatLimit, setChatLimit] = React.useState(5);

    const [chatList, setChatList] = React.useState(storeChatList);

    const handleScroll = (e) => {
        if (e.currentTarget.scrollTop === 0) {
            setTimeout(() => setChatLimit(chatLimit + 5), 1000);
        }
    }

    const [time, setTime] = React.useState(Date.now());

    React.useEffect(() => {
        const interval = setInterval(() => setTime(Date.now()), 1000);
        return () => {
            updateChatList()
            clearInterval(interval);
        };
    });

    const updateChatList = () => {

        console.log("Updating chat list", { a: store.getState().chatList.length, b: chatList.length })
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