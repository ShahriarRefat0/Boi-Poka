import { Star } from "lucide-react";
import { Link } from "react-router";


const Book = ({ book }) => {
  console.log(book)
  
  const { image, author, tags, bookName, rating, category, bookId} = book;
  return (
    <Link to={`/bookDetails/${bookId}`}>
      <div className="card bg-base-100 shadow-sm border-gray-100 border-1 p-5 rounded-2xl">
        <figure className="p-9 bg-[#F8F7F3] w-full rounded-2xl">
          <img className=" h-[190px]" src={image} alt="Shoes" />
        </figure>
        <div className="mt-10 flex flex-col gap-y-4">
          <div className="flex gap-10">
            <div className="badge bg-green-50 text-green-500 font-semibold rounded-3xl px-3 py-4">
              <p>{tags[0] }</p>
            </div>

            <div className="badge bg-green-50 text-green-500 font-semibold rounded-3xl px-3 py-4">
              <p>{tags[1]}</p>
            </div>
          </div>
          <h2 className="card-title title-font text-xl">{bookName}</h2>
          <p className="text-base font-semibold text-gray-600">{author}</p>
          <div className="flex justify-between border-gray-300 border-t-1 mt-3 pt-3 border-dashed text-base font-semibold text-gray-600">
            <div>
              <p>{category}</p>
            </div>
            <div>
              <p className="flex gap-2 items-center ">
                {rating}
                <span>
                  <Star />
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;