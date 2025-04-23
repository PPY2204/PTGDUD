import { useEffect, useState } from 'react';
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

  useEffect(() => {
    console.log("Books trước khi lưu:", books);
    try {
      localStorage.setItem("books", JSON.stringify(books));
      console.log("Lưu thành công!");
    } catch (error) {
      console.error("Lỗi khi lưu vào localStorage:", error);
    }
  }, [books]);

  useEffect(() => {
    try {
      const storedBooks = JSON.parse(localStorage.getItem("books") || "[]");
      console.log("Dữ liệu từ localStorage:", storedBooks);
      setBooks(storedBooks);
    } catch (error) {
      console.error("Lỗi khi tải từ localStorage:", error);
    }
  }, []);
  return (
    <div className='p-4'>
      <AddBookForm onAdd={addBook} />
      <div className='flex gap-10'>
        <input
          type="text"
          placeholder="Tìm sách..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border p-2 rounded w-50 mb-2"
        />
        <select value={genreFilter} onChange={(e) => setGenreFilter(e.target.value)} className="border p-2 rounded w-50 mb-2">
          <option value="">Tất cả</option>
          <option value="Văn học">Văn học</option>
          <option value="Khoa học">Khoa học</option>
          <option value="Công nghệ">Công nghệ</option>
          <option value="Tâm lý">Tâm lý</option>
        </select>
      </div>
      <p className="text-sm text-gray-500">
        Tổng trong state: {books.length} | Đang hiển thị sau lọc: {filteredBooks.length}
      </p>
      <BookList books={filteredBooks} onDelete={deleteBook} />
    </div>
  )
}

export default App
