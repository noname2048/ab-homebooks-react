import React, { useEffect, useState } from "react";

import Axios from "axios";

const BookshelfList = () => {
  const [bookshelfList, setBookshelfList] = useState([]);

  useEffect(() => {
    // "http://localhost:8000/bookshelves/api/bookshelves/"
    // "http://localhost:8010/instagram/api/posts/"
    Axios.get("http://localhost:8000/bookshelves/api/bookshelves/")
      .then((response) => {
        console.log(response.data);
        setBookshelfList(response.data);
      })
      .catch((error) => {
        console.log(error);
        console.log("왜안대");
      });
  }, []);

  return (
    <div>
      {/* {bookshelfList.map((bookshelf) => {
        return <div>{bookshelf}</div>;
      })} */}
      {bookshelfList.map(
        (bookshelf: { user: { username: string }; name: string }) => (
          <p key={bookshelf.name}>{bookshelf.user.username}님의 책장</p>
        )
      )}
    </div>
  );
};

export default BookshelfList;
