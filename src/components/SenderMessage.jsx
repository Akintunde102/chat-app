import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'

const SenderMessage = ({ message, name }) => {

  return (
    <Row className="sender-message">
      <Col className="message-column">
        <div className="black-color">{name}</div>
        <div className="message"> {message}</div>
      </Col>
      <Col className="image-column" xs={3}>
        <Image
          src=
          "https://cdn-icons-png.flaticon.com/512/80/80889.png"
          rounded
          className="image"
        />
      </Col>
    </Row>
  );
}

export default SenderMessage;