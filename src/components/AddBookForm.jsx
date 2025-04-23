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
        <form onSubmit={handleSubmit}>
            <input name="title" placeholder="Tên sách" value={book.title} onChange={handleChange} />
            <input name="author" placeholder="Tác giả" value={book.author} onChange={handleChange} />
            <input name="genre" placeholder="Thể loại" value={book.genre} onChange={handleChange} />
            <input name="year" placeholder="Năm" value={book.year} onChange={handleChange} />
            <button type="submit">Thêm sách</button>
        </form>
    );
}
