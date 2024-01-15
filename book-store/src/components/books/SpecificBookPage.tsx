import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getOneBook } from "@/api/books/getOneBook";
import Review from "./Review";
import { noScroll } from "../../features/layout/isScrollSlice";
import { useDispatch } from "react-redux";
import { thereUser } from "@/features/user/isUserSlice";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";

const SpecificBookPage = () => {
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

  const dispatch = useDispatch();
  const navigate = useNavigate()

  const { book_id } = useParams();
  const [book, setBook] = useState<Book>();
  const [author, setAuthor] = useState("");

  useEffect(() => {
    getBookFromDb();
    dispatch(noScroll()); // Dispatch the scroll action
    dispatch(thereUser());
  }, []);

  const getBookFromDb = async () => {
    if (book_id) {
      const bookUidAsNumber = parseInt(book_id, 10);

      try {
        console.log("sending to getOneBook", bookUidAsNumber);
        const bookData: Book = await getOneBook(bookUidAsNumber);
        setBook(bookData);
        setAuthor(bookData.author);
      } catch (error) {
        console.error("Error fetching book:", error);
      }
    } else {
      console.log("no book");
    }
  };

  return (
    <div className=" w-screen h-screen bg-gradient-to-r from-sky-200 to-teal-100  flex flex-col justify-start items-center overflow-hidden">
      <div className="  flex flex-col justify-start items-center w-fit bg-gradient-to-r from-teal-100 to-sky-200 mt-8 rounded-lg shadow-xl">
        <div className=" mt-8 flex flex-col justify-center items-center gap-4">
          <h1 className=" text-6xl font-sans font-extrabold">{book?.title}</h1>
          <h2 onClick={() => navigate(`/authorPage/${book?.author}`)} className="  text-64xl font-sans font-bold hover:bg-sky-400 rounded-lg shadow-xl cursor-pointer transition-all">{book?.author}</h2>
        </div>
        <div>
          <img
            className=" w-40 h-56 mt-4 rounded-sm shadow-md"
            src={book?.image}
            alt=""
          />
        </div>
        <div>
          <p className="mt-6 text-lg max-w-prose text-muted-foreground mx-2 text-center">
            {book?.description}
          </p>
        </div>
        <div className=" flex flex-row w-fit gap-4 mt-4 mb-4">
          <Badge>likes : {book?.likes}</Badge>
          <Badge variant="third">pages: {book?.pageNum}</Badge>
          <Badge variant="secondary">publisher: {book?.publisher}</Badge>
        </div>
      </div>
    </div>
  );
};

export default SpecificBookPage;
