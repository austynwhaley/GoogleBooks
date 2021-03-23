import axios from "axios";

const queryURL = "https://www.googleapis.com/books/v1/volumes?q="

export default {
    searchBooks: (query) => axios.get(queryURL + query),
    getBooks: () => axios.get("/api/books"),
    saveBook: (bookResult) => axios.post("/api/books", bookResult),
    deleteBook: (id) => axios.delete("api/books/" + id)
};