import { useDispatch } from "react-redux";
import { scroll } from "../../features/layout/isScrollSlice";
import { useEffect, useState } from "react";
import { thereUser } from "../../features/user/isUserSlice";
import RightSideBar from "@/components/RightSideBar/RightSideBar";
import Footer from "@/components/footer/Footer";
import { useSelector } from "react-redux";
import { categorieSelector } from "../../features/categories/categorieSlice";
import { initializeSql } from "../../api/insertData/initializeSql";
import { getAllBooks } from "../../api/books/getAllBooks";
import { Heart } from "lucide-react";

const HomePage = () => {
  const dispatch = useDispatch();

  interface Book {
    book_id: string;
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
  const ActiveCatRedux = useSelector(categorieSelector);

  useEffect(() => {
    setActiveCat(ActiveCatRedux);
  }, [ActiveCatRedux]);

  useEffect(() => {
    initializeSql();
  }, []);

  useEffect(() => {
    getAllBooksFromDB();
  }, []);

  useEffect(() => {
    dispatch(scroll()); // Dispatch the scroll action to auto
    dispatch(thereUser()); // Dispatch the user to true
  }, []);

  const getAllBooksFromDB = async () => {
    const booksFromDB = await getAllBooks();
    setBooks(booksFromDB);
  };
  useEffect(() => {
    console.log(books);
  }, [books]);

  return (
    <div className="w-screen h-fit overflow-hidden flex flex-col justify-start items-center">
      <div className="w-full h-screen top-0 overflow-hidden bg-gradient-to-r from-gray-600 to-slate-400">
        <RightSideBar />
        <div className="grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 ml-12 mt-28 gap-4">
          {books.map((book) => (
            <div
              className=" bg-slate-400 rounded-xl shadow-xl flex flex-col justify-start items-center"
              key={book.book_id}
            >
              <h1 className="font-bold text-xl text-slate-800 text-center mt-2 antialiased">
                {book.title}
              </h1>
              <p className=" antialiased italic font-thin">{book.author}</p>
              <img
                className=" w-56 h-56 rounded-xl mb-2"
                src={book.image}
                alt={book.title}
              />
              <div className=" flex flex-row justify-center items-center mt-2 gap-2">
                <p>{book.likes}</p>
                <Heart className=" hover:bg-red-400 rounded-full transition-all cursor-pointer"/>
              </div>
            </div>
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
