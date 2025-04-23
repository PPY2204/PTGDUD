export default function BookItem({ book, onDelete }) {
    return (
        <li className="flex justify-between items-center border p-2 rounded">
            <div>
                <p className="font-bold">{book.title}</p>
                <p>{book.author} - {book.genre} - {book.year}</p>
            </div>
            <button onClick={() => onDelete(book.id)} className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600">
                Xoá
            </button>
        </li>
    );
}
