import { useEffect, useState } from "react";
import { getAuthorBooks } from "@/api/books/getAuthorBooks";
import { useParams } from "react-router-dom";
import { stringify } from "querystring";

const AuthorPage = () => {
  interface Book {
    book_id: number;
    title: string;
    author: string;
    pageNum: number;
    publisher: string;
    description: string;
    image: string;
    likes: number;
  }

  const { authorName } = useParams();
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    //@ts-ignore
    getAllAuthorBooks(authorName);
  }, [authorName]);

  const getAllAuthorBooks = async (authorName:string) => {
    if (authorName) {
      const  allAuthorBooks = await getAuthorBooks(authorName);
    }
  };


  useEffect(() => {
    console.log("im the authorPage baby", books);
  }, [books]);

  return <div>{/* {books.map((book) => book.title)} */}</div>;
};

export default AuthorPage;
