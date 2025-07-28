import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
import AllTheBooks from "./components/AllTheBooks";
import { Container, Row, Col } from "react-bootstrap";
// import BookList from "./components/BookList";
// import fantasy from "./data/fantasy.json";
import CommentArea from "./components/CommentArea";
import { Component } from "react";

class App extends Component {
  state = {
    selectedBook: null,
  };
  changeState = (book) => {
    this.setState({ selectedBook: book });
  };
  render() {
    return (
      <>
        <MyNav />
        <Container>
          <Welcome />
          <Row>
            <Col>
              {/*<BookList books={fantasy}  />*/}
              <AllTheBooks
                onBookSelect={this.changeState}
                selectedBook={this.state.selectedBook}
              />
            </Col>
            <Col>
              <CommentArea asin={this.state.selectedBook?.asin} />
            </Col>
          </Row>
        </Container>
        <MyFooter />
      </>
    );
  }
}

export default App;
