// src/components/BookList.jsx
const books = [
    { id: 1, title: "Dế Mèn Phiêu Lưu Ký", author: "Tô Hoài", genre: "Văn học", year: 1941 },
    { id: 2, title: "Sapiens", author: "Yuval Harari", genre: "Khoa học", year: 2011 },
];

export default function BookList({ books, onDelete }) {
    return (
        <div>
            <h2>Danh sách sách</h2>
            <ul className="space-y-2">
                {books.map((book) => (
                    <li key={book.id} className="flex justify-between items-center border p-2 rounded">
                        <div>
                            <p className="font-bold">{book.title}</p>
                            <p>{book.author} - {book.genre} - {book.year}</p>
                        </div>
                        <button onClick={() => onDelete(book.id)} className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600">Xoá</button>
                    </li>
                ))}
            </ul>

        </div>
    );
}
