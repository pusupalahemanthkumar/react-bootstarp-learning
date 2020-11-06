// Importing Required Files And Packages Here.
import React from "react";
import { Card, Button, Container } from "react-bootstrap";

// Defining Functional Component Here.
const CardDemo = () => {
  return (
    <Container className="ma">
      <Card style={{ width: "20rem", margin: " 1rem auto" }}>
        <Card.Img
          variant="top"
          src="https://bs-uploads.toptal.io/blackfish-uploads/blog/article/content/cover_image_file/cover_image/163149/0120-Stale-while-revalidate_Data_Fetching_with_React_Hooks-Waldek_Newsletter-5222468607946967fa1b0a4525326739.png"
        />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: "20rem", margin: " 1rem auto" }}>
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Card Subtitle
          </Card.Subtitle>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default CardDemo;
