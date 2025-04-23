import { useState } from "react";

export default function AddBookForm({ onAdd }) {
    const [book, setBook] = useState({ title: "", author: "", genre: "", year: "" });

    const handleChange = (e) => {
        setBook({ ...book, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onAdd({ ...book, id: Date.now() });
        setBook({ title: "", author: "", genre: "", year: "" });
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-2 mb-4">
            <input name="title" placeholder="Tên sách" value={book.title} onChange={handleChange} className="border p-2 w-full rounded" />
            <input name="author" placeholder="Tác giả" value={book.author} onChange={handleChange} className="border p-2 w-full rounded" />
            <input name="genre" placeholder="Thể loại" value={book.genre} onChange={handleChange} className="border p-2 w-full rounded" />
            <input name="year" placeholder="Năm" value={book.year} onChange={handleChange} className="border p-2 w-full rounded" />
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Thêm sách</button>
        </form>

    );
}
