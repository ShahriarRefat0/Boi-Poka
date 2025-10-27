import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredBook } from "../../Utility/addToDB";
import Book from "../Book/Book"; // Make sure this is your Book component

const ReadList = () => {
  const [sort, setSort] = useState("");
  const [activeTab, setActiveTab] = useState(0);
  const [readList, setReadList] = useState([]);
  const [wishList, setWishList] = useState([]);
  const data = useLoaderData();

  useEffect(() => {
    const storedBookData = getStoredBook();
    const convertedIds = storedBookData.map((id) => parseInt(id));

    const myReadList = data.filter((book) =>
      convertedIds.includes(book.bookId)
    );
    const myWishList = data.filter(
      (book) => !convertedIds.includes(book.bookId)
    );

    setReadList(myReadList);
    setWishList(myWishList);
  }, [data]);

  const handleSort = (sortType) => {
    setSort(sortType);

    if (activeTab === 0) {
      // Sort Read List
      const sorted = [...readList].sort((a, b) =>
        sortType === "pages" ? a.totalPages - b.totalPages : a.rating - b.rating
      );
      setReadList(sorted);
    } else {
      // Sort Wish List
      const sorted = [...wishList].sort((a, b) =>
        sortType === "pages" ? a.totalPages - b.totalPages : a.rating - b.rating
      );
      setWishList(sorted);
    }
  };

  return (
    <div>
      <div className="dropdown dropdown-bottom dropdown-center">
        <div tabIndex={0} role="button" className="btn m-1">
          Sort by {sort ? sort : ""}
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

      <Tabs selectedIndex={activeTab} onSelect={(index) => setActiveTab(index)}>
        <TabList>
          <Tab>Read Book List</Tab>
          <Tab>My Wish List</Tab>
        </TabList>

        <TabPanel>
          <h2>Total Books: {readList.length}</h2>
          {readList.map((book) => (
            <Book key={book.bookId} book={book} />
          ))}
        </TabPanel>

        <TabPanel>
          <h2>Total Books: {wishList.length}</h2>
          {wishList.map((book) => (
            <Book key={book.bookId} book={book} />
          ))}
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ReadList;
