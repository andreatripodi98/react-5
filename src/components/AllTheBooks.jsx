import { Card, Col, Row } from "react-bootstrap";
import fantasy from "../data/fantasy.json";

const AllTheBooks = ({ onBookSelect, selectedBook }) => {
  return (
    <Row className="g-2">
      {fantasy.map((book) => {
        return (
          <Col xs={12} md={4} key={book.asin}>
            <Card
              className="book-cover d-flex flex-column"
              onClick={() => onBookSelect(book)}
              style={{
                border:
                  selectedBook?.asin === book.asin ? "3px solid red" : "none",
              }}
            >
              <Card.Img variant="top" src={book.img} />
              <Card.Body>
                <Card.Title>{book.title}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        );
      })}
    </Row>
  );
};

export default AllTheBooks;
