import React, { Component } from "react";
import API from "../utils/API";
import { Container, Row, Col } from "../components/Grid";
import { Results, ResultItemDelete } from "../components/List";
import Navbar from "../components/Navbar";

class Save extends Component {

    state = {
        savedBooks: []
    };

    componentDidMount() {
        this.loadBooks();
    };

    loadBooks = event => {

        API.getBooks()
            .then(res => {
                this.setState({ savedBooks: res.data }, function () {
                    console.log(this.state.savedBooks);
                })
            })
            .catch(err => console.log(err))
    };

    render() {
        return (
            <div>
                <Navbar/>
                <Container>
                <div className="container text-center"><h1 className="mt-5 text-white font-weight-light">Saved Books</h1></div>
                    <Row>
                        <Col size="xs-12">
                            <Results>
                                {this.state.savedBooks.map(book => {
                                    return (
                                        <ResultItemDelete
                                            key={book._id}
                                            id={book._id}
                                            title={book.title}
                                            authors={book.authors}
                                            link={book.link}
                                            description={book.description}
                                            image={book.image}
                                            loadBooks={this.loadBooks}
                                        />
                                        
                                    );
                                })}
                            </Results>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    };

};

export default Save;