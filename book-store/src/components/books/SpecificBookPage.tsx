import { addCommentToDB, getAllComments } from "@/api/books/addComment";
import { getOneBook } from "@/api/books/getOneBook";
import { Badge } from "@/components/ui/badge";
import { thereUser } from "@/features/user/isUserSlice";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { noScroll } from "../../features/layout/isScrollSlice";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

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
  interface Comment {
    user_id: string;
    book_id: number;
    review: string;
    review_id: string;
    user_name: string;
  }

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { book_id } = useParams();
  const [book, setBook] = useState<Book>();
  const [comment, setComment] = useState<string>("");
  const [allComments, setAllComments] = useState<Comment[]>([]);
  useEffect(() => {
    console.log(comment);
  }, [comment]);

  const addComment = async () => {
    if (book_id) {
      const bookUidAsNumber = parseInt(book_id, 10);
      const response = await addCommentToDB(comment, bookUidAsNumber);
      console.log(response);
    }
  };

  useEffect(() => {
    getBookFromDb();
    dispatch(noScroll()); // Dispatch the scroll action
    dispatch(thereUser());
    getAllCommentsFromDB();
  }, []);

  useEffect(() => {
    getAllCommentsFromDB();
  },[allComments])

  const getBookFromDb = async () => {
    if (book_id) {
      const bookUidAsNumber = parseInt(book_id, 10);

      try {
        console.log("sending to getOneBook", bookUidAsNumber);
        const bookData: Book = await getOneBook(bookUidAsNumber);
        setBook(bookData);
      } catch (error) {
        console.error("Error fetching book:", error);
      }
    } else {
      console.log("no book");
    }
  };

  const getAllCommentsFromDB = async () => {
    if (book_id) {
      const bookUidAsNumber = parseInt(book_id, 10);
    const comments = await getAllComments(bookUidAsNumber);
    setAllComments(comments);
    }
  };

  return (
    <div className=" w-screen h-screen bg-gradient-to-r from-sky-200 to-teal-100  flex flex-col md:flex-row justify-center items-start overflow-hidden">
      <div className=" z-10 flex flex-col justify-start items-center w-fit bg-gradient-to-r from-teal-100 to-sky-200 mt-8 rounded-lg shadow-xl">
        <div className=" mt-8 flex flex-col justify-center items-center gap-4">
          <h1 className=" text-6xl font-sans font-extrabold">{book?.title}</h1>
          <h2
            onClick={() => navigate(`/authorPage/${book?.author}`)}
            className="  text-64xl font-sans font-bold hover:bg-sky-400 rounded-lg shadow-xl cursor-pointer transition-all"
          >
            {book?.author}
          </h2>
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
      <motion.div
        initial={{ x: -400, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        className=" w-full md:w-1/4 h-3/4 bg-slate-100 z-0 md:mt-14"
      >
        <div className=" flex flex-col justify-between items-center h-full">
          <div className=" w-fit h-fit bg-slate-300 rounded-lg shadow-lg mt-4">
            <h1 className=" font-bold text-2xl font-sans antialiased">
              Comments
            </h1>
          </div>
          <div className=" flex flex-col h-3/4 w-full items-center justify-start gap-2 overflow-y-scroll">
            {allComments.map((comment) => (
              <motion.div
              initial={{x:-100 , opacity:0}}
              animate={{x:0 , opacity:1}}
              className=" w-3/4 h-fit bg-gradient-to-r from-slate-400 to-gray-700 rounded-lg shadow-lg p-2">
                <div className=" h-fit w-fit rounded-lg shadow-lg bg-slate-300 p-1">
                  <h1 className=" font-bold font-serif">{comment.user_name}</h1>
                </div>
                <h2 className= " max-w-prose">{comment.review}</h2>
              </motion.div>
            ))}
          </div>
          <div className=" flex flex-row w-full h-fit items-center">
            <Input
              onInput={(ev) => {
                setComment((ev.target as HTMLInputElement).value);
              }}
              placeholder="Write your comment"
            ></Input>
            <Button onClick={() => addComment()} size="sm">
              <Send />
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SpecificBookPage;
