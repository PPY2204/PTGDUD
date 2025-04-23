import { useState } from 'react';
import './App.css'
import AddBookForm from './components/AddBookForm';
import BookList from './components/BookList'

function App() {
  const [books, setBooks] = useState([]);
  const addBook = (book) => setBooks([...books, book]);
  const deleteBook = (id) => setBooks(books.filter((book) => book.id !== id));
  const [searchTerm, setSearchTerm] = useState("");
  const [genreFilter, setGenreFilter] = useState("");

  const filteredBooks = books
    .filter((book) => book.title.toLowerCase().includes(searchTerm.toLowerCase()))
    .filter((book) => !genreFilter || book.genre === genreFilter);
  return (
    <>
      <AddBookForm onAdd={addBook} />
      <input
        type="text"
        placeholder="Tìm kiếm theo tên"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <select value={genreFilter} onChange={(e) => setGenreFilter(e.target.value)}>
        <option value="">Tất cả</option>
        <option value="Văn học">Văn học</option>
        <option value="Khoa học">Khoa học</option>
        <option value="Công nghệ">Công nghệ</option>
        <option value="Tâm lý">Tâm lý</option>
      </select>

      <BookList books={filteredBooks} onDelete={deleteBook} />
    </>
  )
}

export default App
