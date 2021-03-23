import axios from "axios";

export default {
    searchBooks: (query) => axios.get("https://www.googleapis.com/books/v1/volumes?q=" + query),

    getBooks: () => axios.get("/api/books"),

    saveBook: (bookResult) => axios.post("/api/books", bookResult),

    deleteBook: (id) => axios.delete("api/books/" + id)
};