import { useState } from 'react';
import './App.css'
import AddBookForm from './components/AddBookForm';
import BookList from './components/BookList'

function App() {

  const [books, setBooks] = useState([]);

  const addBook = (book) => setBooks([...books, book]);
  const deleteBook = (id) => setBooks(books.filter((book) => book.id !== id));
  return (
    <>
      <AddBookForm onAdd={addBook} />
      <BookList books={books} onDelete={deleteBook} />
    </>
  )
}

export default App
