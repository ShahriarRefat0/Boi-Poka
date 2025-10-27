import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { addToStoredDB } from '../../Utility/addToDB';


const BookDetails = () => {
  const {id} = useParams()
  const bookId = parseInt(id);
  const data = useLoaderData()
  
  const singleBook = data.find(book => book.bookId === bookId)
  console.log(singleBook)
  const {
    bookName,
    image,
    author,
    review,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing
  } = singleBook || { };
  



  const handleMarkAsRead = (bookId) => {
    console.log(bookId)
    addToStoredDB(bookId);
  };



  return (
    <div className="max-w-6xl mx-auto my-20 px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
      {/* Left Side - Image */}
      <div className="bg-gray-100 rounded-2xl flex justify-center items-center p-8">
        <img
          className="max-h-[500px] object-contain rounded-lg"
          src={image}
          alt={bookName}
        />
      </div>

      {/* Right Side - Book Info */}
      <div className="flex flex-col gap-6">
        {/* Title & Author */}
        <div>
          <h2
            className="text-4xl md:text-5xl font-bold mb-2"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {bookName}
          </h2>
          <p className="text-lg font-medium text-gray-600">by {author}</p>
        </div>

        {/* Category */}
        <div className="border-y border-gray-300 py-3">
          <p className="text-lg font-semibold text-gray-700">{category}</p>
        </div>

        {/* Review */}
        <div>
          <p className="font-bold text-gray-800">
            Review:
            <span className="text-base font-normal text-gray-600 ml-2">
              {review}
            </span>
          </p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap items-center gap-3 border-b border-gray-300 pb-4">
          <p className="font-bold text-gray-700">Tags:</p>
          {tags?.map((tag, index) => (
            <span
              key={index}
              className="badge bg-green-100 text-green-600 font-medium rounded-full px-3 py-1"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Info Table */}
        <div className="space-y-2 text-gray-700">
          <div className="flex justify-between">
            <p>Number of Pages:</p>
            <p className="font-semibold">{totalPages}</p>
          </div>
          <div className="flex justify-between">
            <p>Publisher:</p>
            <p className="font-semibold">{publisher}</p>
          </div>
          <div className="flex justify-between">
            <p>Year of Publishing:</p>
            <p className="font-semibold">{yearOfPublishing}</p>
          </div>
          <div className="flex justify-between">
            <p>Rating:</p>
            <p className="font-semibold">{rating}</p>
          </div>
        </div>

        {/* Buttons */}
        <div className="space-x-4 pt-4">
          <button
            className="btn btn-outline border-[#8B4513] text-[#8B4513] hover:bg-[#8B4513] hover:text-white font-bold px-8"
            onClick={() => handleMarkAsRead(bookId)}
          >
            Mark as Read
          </button>
          <button className="btn bg-[#3B2F2F] hover:bg-[#8B4513] text-white font-bold px-8">
            Add to Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;