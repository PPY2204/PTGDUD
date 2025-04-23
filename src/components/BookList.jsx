import BookItem from "./BookItem";

export default function BookList({ books, onDelete }) {

    return (
        <ul className="space-y-2 ">
            {books.map((book) => (
                <BookItem key={book.id} book={book} onDelete={onDelete} />
            ))}
        </ul>
    );
}
