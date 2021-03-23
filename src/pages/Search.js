import React, { Component } from "react";
import { Container } from "../components/Grid";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import {SearchInput, SearchBtn} from "../components/SearchInput";
import axios from "axios";


class Search extends Component {

    state = {
        books: [],
        search: "",
        results: []
    };

    handleInputChange = event => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        });
    };


    displayRes = data => {
        this.setState({ books: data.items });
        console.log(data)
    };
    

   
    searchBook = () => {
    let url = `https://www.googleapis.com/books/v1/volumes?q=${this.state.query}`;
    axios
    .get(url)
    .then(res => {
        this.displayRes(res.data);
      })
      .catch(err => console.log(err));
    }

    

    render() {
        return (
            <div>
                <Navbar />
                <Container>
                <Header />
                <form>
                    <SearchInput 
                        value={this.state.search}
                        onChange={this.handleInputChange}
                        name="search"
                    />
                    <SearchBtn onClick={this.handleFormSubmit}/>
                </form> 
                </Container>
            </div>
        )
    }
}

export default Search