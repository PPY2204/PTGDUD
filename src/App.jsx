import { useState } from 'react';
import './App.css'
import AddBookForm from './components/AddBookForm';
import BookList from './components/BookList'

function App() {
  const [books, setBooks] = useState([]);
  const addBook = (book) => setBooks([...books, book]);
  const deleteBook = (id) => setBooks(books.filter((book) => book.id !== id));
  const [searchTerm, setSearchTerm] = useState("");

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <>
      <AddBookForm onAdd={addBook} />
      <input
        type="text"
        placeholder="Tìm kiếm theo tên"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <BookList books={filteredBooks} onDelete={deleteBook} />
    </>
  )
}

export default App
