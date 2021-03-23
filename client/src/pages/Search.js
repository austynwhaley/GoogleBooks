import React, { Component } from "react";
import Navbar from "../components/Navbar";
import {SearchInput, SearchBtn} from "../components/SearchInput";
import API from "../utils/API";
import { Container, Row, Col } from "../components/Grid";
import { Results, ResultItemSave } from "../components/List";


class Search extends Component {

    state = {
        books: [],
        userSearch: ""
    };


    handleInputChange = event => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        });
    };


    handleFormSubmit = event => {
        
        event.preventDefault();

        
        API.searchBooks(this.state.userSearch)
            .then(res => {
                this.setState({ books: res.data.items }, function () {
                    
                })
            })
            .catch(err => console.log(err))
    };

    

    render() {
        return (
            <div>
                <Navbar/>
                <Container>
                <div className="container text-center"><h1 className="mt-5 text-white font-weight-light">React Google Books</h1></div>
                    <Row>
                        <Container>
                            <Row>
                                <Col size="xs-12 sm-12">
                                    <SearchInput
                                        name="userSearch"
                                        value={this.state.userSearch}
                                        onChange={this.handleInputChange}
                                        placeholder="Search for a Book"
                                    />
                                </Col>
                            </Row>
                            <Row>
                                <Col size="xs-12 sm-12">
                                    <SearchBtn
                                        onClick={this.handleFormSubmit}
                                        type="success"
                                        className="input-lg"
                                    >
                                        Search
                                    </SearchBtn>
                                </Col>
                            </Row>
                        </Container>
                    </Row>
                    <Row>
                        <Col size="xs-12">
                            <Results>
                                {this.state.books.map(book => {
                                    return (
                                        <ResultItemSave
                                            key={book.id}
                                            title={book.volumeInfo.title}
                                            authors={book.volumeInfo.authors}
                                            link={book.volumeInfo.infoLink}
                                            description={book.volumeInfo.description}
                                            image={book.volumeInfo.imageLinks.thumbnail}
                                        />);
                                })}
                            </Results>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    };
}

export default Search