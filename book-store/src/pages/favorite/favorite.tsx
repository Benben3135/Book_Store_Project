import Footer from "@/components/footer/Footer";

import { useEffect, useState } from "react";
import { getAllBooks } from "../../api/books/getAllBooks";
import { Heart } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { likeBook, getFavoriteBooks } from "../../api/books/likeBook";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Favorite = () => {

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
  const [likedBooks, setLikedBooks] = useState<number[]>([]);
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    getAllBooksFromDB();
    getFavoriteBooks();
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      const favoriteBooks = await getFavoriteBooks();
      setLikedBooks(favoriteBooks);
    };
    fetchData();
  }, [getFavoriteBooks]);
  useEffect(() => {
    console.log(likedBooks);
  }, [likedBooks]);
  const getAllBooksFromDB = async () => {
    const booksFromDB = await getAllBooks();
    setBooks(booksFromDB);
  };

  return (
    <div className="w-screen h-fit overflow-hidden flex flex-col justify-start items-center">
      <div className="w-full h-full min-h-screen top-0 overflow-hidden bg-gradient-to-r from-gray-600 to-slate-400 flex flex-col justify-start items-center">
        <h1 className=" text-5xl font-serif text-zinc-800 pt-12">FAVORITES</h1>
        <div className=" w-3/4 grid lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-3 mt-28 gap-8 pb-8">
          {books
            .filter((book) => likedBooks.includes(book.book_id))
            .map((book) => (
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

export default Favorite;
