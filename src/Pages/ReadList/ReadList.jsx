import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredBook } from '../../Utility/addToDB';
import { Book } from 'lucide-react';


const ReadList = () => {
  const [sort, setSort] = useState("");
  const [readList, setReadList] = useState([])
  const data = useLoaderData();


  useEffect(() => {
    const storedBookData = getStoredBook()
    const ConvertedStoredBooks = storedBookData.map(id => parseInt(id))
    const myReadList = data.filter(book => ConvertedStoredBooks.includes(book.bookId))
  setReadList(myReadList);
  }, [])


  const handleSort = (sortType) => {
    setSort(sortType);
    if (sortType === "pages") {
      const sortedByPages = [...readList].sort((a, b) => a.totalPages - b.totalPages)
      setReadList(sortedByPages);
    }
    if (sortType === 'ratings') {
      const sortedByRating = [...readList].sort((a, b) => a.rating - b.rating);
      setReadList(sortedByRating);
    }
  }
  return (
    <div>
      <div className="dropdown dropdown-bottom dropdown-center">
        <div tabIndex={0} role="button" className="btn m-1">
          Sort by {sort? sort: ''}
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
        >
          <li>
            <a onClick={() => handleSort("pages")}>Pages</a>
          </li>
          <li>
            <a onClick={() => handleSort("ratings")}>Ratings</a>
          </li>
        </ul>
      </div>
      <Tabs>
        <TabList>
          <Tab>Read Book List</Tab>
          <Tab>My Wish List</Tab>
        </TabList>

        <TabPanel>
          <h2>{readList.length}</h2>
          {readList.map((book) => (
            <Book key={book.bookId} singleBook={book}></Book>
          ))}
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ReadList;