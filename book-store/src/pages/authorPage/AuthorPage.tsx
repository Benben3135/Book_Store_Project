import { getAuthorBooks } from "@/api/books/getAuthorBooks";
import { Badge } from "@/components/ui/badge";
import { BookOpenText, ThumbsUp } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

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
  const navigate = useNavigate()

  const { authorName } = useParams();
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    //@ts-ignore
    getAllAuthorBooks(authorName);
  }, [authorName]);

  const getAllAuthorBooks = async (authorName: string) => {
    if (authorName) {
      const allAuthorBooks = await getAuthorBooks(authorName);
      console.log("all author books: ", allAuthorBooks);
      setBooks(allAuthorBooks);
    }
  };

  useEffect(() => {
    console.log("im the authorPage baby", books);
  }, [books]);

  return (
    <div className=" w-screen h-screen bg-gradient-to-r from-cyan-100 to-teal-100 flex flex-col justify-start items-center">
      <h1 className=" font-extrabold text-5xl text-gray-800 mt-14">
        {authorName}
      </h1>
      <div className=" flex flex-col justify-between items-center w-1/3 gap-1 mt-4">
        {books.map((book) => (
          <div
          onClick={() => navigate(`/bookPage/${book.book_id}`)}
          className="flex flex-row items-center justify-between gap-2 w-full h-20 bg-slate-300 shadow-lg rounded-md hover:scale-105 hover:bg-slate-400 transition-all cursor-pointer">
            <div className=" h-full flex flex-row items-center justify-start gap-2">
            <img className=" w-20 h-20 rounded-md" src={book.image} alt="" />
            <h1 className=" font-bold text-2xl text-slate-700">{book.title}</h1>
            </div>
            <div className=" flex flex-row justify-between items-center h-full w-fit gap-1 pr-2">
              <Badge>{book.likes} <ThumbsUp color="red" className=" scale-50"/></Badge>
              <Badge>{book.pageNum} <BookOpenText color="yellow" className=" scale-50"/></Badge>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AuthorPage;
