import React, { useEffect, useState } from "react";

import Axios from "axios";

const BookshelfList = () => {
  const [bookshelfList, setBookshelfList] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:8000/")
      .then((response) => {
        setBookshelfList(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      {bookshelfList.map((bookshelf) => {
        return <div>{bookshelf}</div>;
      })}
    </div>
  );
};

export default BookshelfList;
