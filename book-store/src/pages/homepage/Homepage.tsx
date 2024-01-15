import RightSideBar from "@/components/RightSideBar/RightSideBar";
import Footer from "@/components/footer/Footer";
import { Heart } from "lucide-react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllBooks } from "../../api/books/getAllBooks";
import { initializeBooksSql } from "../../api/insertData/initializeSql";
import { categorieSelector } from "../../features/categories/categorieSlice";
import { scroll } from "../../features/layout/isScrollSlice";
import { thereUser } from "../../features/user/isUserSlice";
import InsertData from "../../api/insertData/InsertData";
import { motion } from "framer-motion";
import { likeBook, getFavoriteBooks } from "../../api/books/likeBook";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
  const [activeCat, setActiveCat] = useState("");
  const [books, setBooks] = useState<Book[]>([]);
  const [likedBooks, setLikedBooks] = useState<number[]>([]);
  const ActiveCatRedux = useSelector(categorieSelector);

  useEffect(() => {
    setActiveCat(ActiveCatRedux);
  }, [ActiveCatRedux]);

  useEffect(() => {
    initializeBooksSql();
    InsertData();
    getAllBooksFromDB();
    getFavoriteBooks();
  }, []);

  useEffect(() => {
    dispatch(scroll()); // Dispatch the scroll action to auto
    dispatch(thereUser()); // Dispatch the user to true
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const favoriteBooks = await getFavoriteBooks();
      setLikedBooks(favoriteBooks);
    };
    fetchData();
  }, [getFavoriteBooks]);

  const getAllBooksFromDB = async () => {
    const booksFromDB = await getAllBooks();
    setBooks(booksFromDB);
  };

  const likedBook = async (id: number) => {
    await likeBook(id);
    const updatedFavoriteBooks = await getFavoriteBooks();
    setLikedBooks(updatedFavoriteBooks);
  };

  useEffect(() => {
    getFavoriteBooks();
  }, [likedBook]);

  return (
    <div className="w-screen h-fit overflow-hidden flex flex-col justify-start items-center">
      <div className="w-full h-full top-0 overflow-hidden bg-gradient-to-r from-gray-600 to-slate-400">
        <RightSideBar />
        <div className=" w-3/4 grid lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-3 ml-24 mt-28 gap-8 pb-8">
          {books.map((book) => (
            <motion.div
              className=" bg-slate-300 rounded-xl shadow-xl flex flex-col justify-start items-center hover:scale-105 transition-all cursor-pointer"
              key={book.book_id}
              onClick={() => navigate(`/bookPage/${book.book_id}`)}
            >
              <h1 className="font-bold text-xl text-slate-800 text-center mt-2 antialiased">
                {book.title}
              </h1>
              <p className=" antialiased italic font-thin">{book.author}</p>
              <img
                className=" w-48 h-60 rounded-xl mb-2"
                src={book.image}
                alt={book.title}
              />
              <div className=" flex flex-row justify-center items-center mt-2 gap-2">
                <p>{book.likes}</p>
                {likedBooks.includes(book.book_id) ? (
                  <div
                    onClick={() => likedBook(book.book_id)}
                    className="rounded-full transition-all cursor-pointer w-6 h-6 flex flex-col justify-center items-center"
                  >
                    <Heart color="red" />
                  </div>
                ) : (
                  <div
                    onClick={() => likedBook(book.book_id)}
                    className="hover:bg-red-300 rounded-full transition-all cursor-pointer w-6 h-6 flex flex-col justify-center items-center"
                  >
                    <Heart />
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};
export default HomePage;
