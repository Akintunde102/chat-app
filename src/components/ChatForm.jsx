import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { store } from "../store";

const ChatForm = ({ name, customStyle }) => {
  const [message, setMessage] = React.useState("");

  const handleMessageChange = (e) => {
    e.preventDefault();
    setMessage(e.target.value)
  }

  const handleMessageSubmit = (e) => {
    e.preventDefault();
    store.dispatch({
      type: 'UPDATE_CHAT_LIST',
      payload: { message, name, date: new Date().getTime() }
    });
  }



  return (
    <Form onSubmit={handleMessageSubmit} style={{ ...customStyle}}>
      <Row>
        <Col>
          <Form.Group className="mb-3" controlId="sendChat">
            <Form.Control type="text" placeholder="Send Message" onChange={handleMessageChange} />
          </Form.Group>
        </Col>
        <Col>
          <Button variant="primary" type="submit">
            Send
          </Button>
        </Col>
      </Row>
    </Form>
  );
}

export default ChatForm;