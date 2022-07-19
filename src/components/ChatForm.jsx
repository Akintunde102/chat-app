import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ChatForm = () => {
  return (
      <Row>
        <Col>
          <Form.Group className="mb-3" controlId="sendChat">
            <Form.Control type="text" placeholder="Send Message" />
          </Form.Group>
        </Col>
        <Col>
          <Button variant="primary" type="submit">
            Send
          </Button>
        </Col>
      </Row>
  );
}

export default ChatForm;