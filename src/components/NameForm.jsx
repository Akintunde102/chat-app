import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const NameForm = () => {
  const [formName, setFormName] = React.useState("");

  const handleNameChange = (e) => {
    e.preventDefault();
    setFormName(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.replace("?name=" + formName);
  }

  return (
    <Row>
      <div className="name-form"> Please Enter Your Name </div>
      <Form onSubmit={handleSubmit}>
        <Col>
          <Form.Group className="mb-3" controlId="sendChat">
            <Form.Control type="text" placeholder="Enter Name" onChange={handleNameChange} />
          </Form.Group>
        </Col>
        <Col className="centralize">
          <Button variant="primary" type="submit">
            Start Chatting
          </Button>
        </Col>
      </Form>
    </Row >
  );
}

export default NameForm;