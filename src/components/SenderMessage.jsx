import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'

const SenderMessage = ({ message = "test message", name = "user 1" }) => {
  return (
    <Row style={{ padding: "5px 10px 20px" }}>
      <Col style={{ float: "right", padding: "8px" }} xs={3}>
        <Image
          src=
          "https://cdn-icons-png.flaticon.com/512/80/80889.png"
          rounded
          style={{ width: "65px", height: "65px" }}
        />
      </Col>
      <Col style={{ color: "white", marginTop: "20px" }}>
        <div style={{ color: "black" }}>{name}</div>
        <div style={{ background: "blue", padding: "15px", borderRadius: "5px" }}> {message}</div>
      </Col>
    </Row>
  );
}

export default SenderMessage;