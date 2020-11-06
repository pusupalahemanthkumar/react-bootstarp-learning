// Importing Required Files And Packages Here.
import React from "react";

import { Container, Row, Col, Image } from "react-bootstrap";
/*
Link : https://react-bootstrap.github.io/layout/grid/

*/

// Defining Functional Component Here.
const Grid = () => {
  return (
    <Container className="p-3">
      <Row>
        <Col md={6} sm={12} lg={4} className="text-center p-2">
          <Image
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRJDablGa_xaGvUTE9ihIjQ0Yo-jCMFKdqnoQ&usqp=CAU"
            rounded
            fluid
          />
          <h3>Lorem ipsum</h3>
        </Col>
        <Col md={6} sm={12} lg={4} className="text-center p-2">
          <Image
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRJDablGa_xaGvUTE9ihIjQ0Yo-jCMFKdqnoQ&usqp=CAU"
            rounded
            fluid
          />
          <h3>Lorem ipsum</h3>
        </Col>
        <Col md={6} sm={12} lg={4} className="text-center p-2">
          <Image
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRJDablGa_xaGvUTE9ihIjQ0Yo-jCMFKdqnoQ&usqp=CAU"
            rounded
            fluid
          />
          <h3>Lorem ipsum</h3>
        </Col>
        <Col md={6} sm={12} lg={4} className="text-center p-2">
          <Image
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRJDablGa_xaGvUTE9ihIjQ0Yo-jCMFKdqnoQ&usqp=CAU"
            rounded
            fluid
          />
          <h3>Lorem ipsum</h3>
        </Col>
        <Col md={6} sm={12} lg={4} className="text-center p-2">
          <Image
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRJDablGa_xaGvUTE9ihIjQ0Yo-jCMFKdqnoQ&usqp=CAU"
            rounded
            fluid
          />
          <h3>Lorem ipsum</h3>
        </Col>
      </Row>
    </Container>
  );
};

export default Grid;
