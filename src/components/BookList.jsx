// src/components/BookList.jsx
const books = [
    { id: 1, title: "Dế Mèn Phiêu Lưu Ký", author: "Tô Hoài", genre: "Văn học", year: 1941 },
    { id: 2, title: "Sapiens", author: "Yuval Harari", genre: "Khoa học", year: 2011 },
];

export default function BookList({ books, onDelete }) {
    return (
        <div>
            <h2>Danh sách sách</h2>
            <ul>
                {books.map((book) => (
                    <li key={book.id}>
                        {book.title} - {book.author} - {book.genre} - {book.year}
                        <button onClick={() => onDelete(book.id)}>Xoá</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
