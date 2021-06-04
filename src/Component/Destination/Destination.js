import React from 'react';
import { Card, Col, Container, Image, Row } from 'react-bootstrap';

const Destination = () => {
  
    return (
      <Container className="mt-5">
        <Row>
          <Col md="4">
            <Card className="m-5 shadow border-0" style={{ width: "15rem" }}>
              <Card.Body>
                <from action="">
                  <h5>Pick From</h5>
                  <input type="text" name="text" className="form-control mb-2" required/>
                  <h5>Pick To</h5>
                  <input type="text" name="text" className="form-control mb-2" required/>
                  <input type="button" value="Search" className="btn btn-danger btn-block"/>
                </from>
              </Card.Body>
            </Card>
          </Col>
          <Col md="8">
            <Image
              className="shadow rounded img-fluid"
              src={`https://image.freepik.com/free-vector/road-map-with-pointers-flat-style_23-2147789377.jpg`}
              alt="google maps"
            />
          </Col>
        </Row>
      </Container>
    );
};

export default Destination;