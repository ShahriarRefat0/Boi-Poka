import React, { Suspense, useState } from 'react';
import Book from '../Book/Book';

const Books = ({ data }) => {
  const [allBooks, setAllBooks] = useState([]);

  // useEffect(() => {
  //   fetch("/booksData.json")
  //     .then(res => res.json())
  //   .then(data => {setAllBooks(data)})
  // })

  // const bookPromise = fetch("/booksData.json").then((res) => res.json());
  return (
    <div className="w-11/12 mx-auto">
      <h2 className="title-font text-center text-4xl font-bold mb-4">Books</h2>
      <Suspense fallback={"loading"}>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 ">
          {data.map((book) => (
            <Book key={book.bookId} book={book}></Book>
          ))}
        </div>
      </Suspense>
    </div>
  );
};

export default Books;