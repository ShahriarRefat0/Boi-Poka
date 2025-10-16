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
    <div className="grid grid-cols-2 gap-20 my-15">
      <div className="bg-gray-100 rounded-2xl">
        <div className="w-1/2 mx-auto  my-16">
          <img className="h-[564px]" src={image} alt="" />
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <div className="space-y-4">
          <h2 className="card-title title-font text-5xl">{bookName}</h2>
          <p className="text-lg font-semibold text-gray-600">{author}</p>
        </div>
        <div className="border-gray-300 border-y-1 py-3">
          <p className="text-lg font-semibold text-gray-600">{category}</p>
        </div>
        <div>
          <p className="font-bold">
            Review:
            <span className="text-base font-normal text-gray-500">
              {review}
            </span>
          </p>
        </div>
        <div className="flex gap-5 border-b-1 border-gray-600 pb-5">
          <p className="font-bold">Tag</p>
          <p className="badge bg-green-50 text-green-500 font-semibold rounded-3xl px-3 py-4">
            #{tags[0]}
          </p>
          <p className="badge bg-green-50 text-green-500 font-semibold rounded-3xl px-3 py-4">
            #{tags[1]}
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex gap-10">
            <p className="text-base font-normal text-gray-500">
              Number of Pages:
            </p>
            <p className="font-bold">{totalPages}</p>
          </div>

          <div className="flex gap-10">
            <p className="text-base font-normal text-gray-500">NPublisher:</p>
            <p className="font-bold">{publisher}</p>
          </div>

          <div className="flex gap-10">
            <p className="text-base font-normal text-gray-500">
              Year of Publishing:
            </p>
            <p className="font-bold">{yearOfPublishing}</p>
          </div>

          <div className="flex gap-10">
            <p className="text-base font-normal text-gray-500">Rating:</p>
            <p className="font-bold">{rating}</p>
          </div>
        </div>
        <div className="space-x-3">
          <button
            className="btn btn-neutral btn-outline font-bold p-6"
            onClick={() => handleMarkAsRead(bookId)}
          >
            Read
          </button>
          <button className="btn btn-active btn-info font-bold text-white p-6">
            Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;