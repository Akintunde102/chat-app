import React from "react";
import Container from 'react-bootstrap/Container';
import ChatForm from "./components/ChatForm.jsx";
import SenderMessage from "./components/SenderMessage.jsx";

const App = () => {
    return (
        <Container style={{ paddingTop: "40px", border: "1px #ddd solid", width: "350px" }} className="my-auto">
            <SenderMessage />
            <ChatForm />
        </Container>
    );
};

export default App;