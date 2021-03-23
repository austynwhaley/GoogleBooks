import React, { Component } from "react";
import { Container } from "../components/Grid";
import Navbar from "../components/Navbar";
import axios from "axios";


class Save extends Component {

    state = {
        savedBooks: [],
        initialized: true
    };

    componentDidMount() {
        this.getBooks();
      }

      getBooks = () => {
        axios.get("/api/books")
          .then(res => {
            this.setState({ savedBooks: res.data })
          })
          .catch((err => console.log(err)))
      }
    

   
      deleteFromDB = id => {
        console.log(id);
    
        axios.delete(`/api/books/${id}`)
          .then( () => {
            toast.error('Book Deleted');
            this.getBooks();
            
          })
          .catch(err => console.log(err))
      }
    

    render() {
        return (
            <div>
                <Navbar />
                <Container>
                <div className="container text-center"><h1 className="mt-5 text-white font-weight-light">Saved Books</h1></div>
                
                </Container>
            </div>
        )
    }
}

export default Save