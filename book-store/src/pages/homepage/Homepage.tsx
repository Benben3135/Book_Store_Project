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
import { Input } from "@/components/ui/input";
import { handleSerachDB } from "@/api/books/handleSearch";

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
    genre: string;
  }
  const [activeCat, setActiveCat] = useState("all");
  const [books, setBooks] = useState<Book[]>([]);
  const [likedBooks, setLikedBooks] = useState<number[]>([]);
  const [search, setSearch] = useState<string>("");
  const [searchedBooks, setSearchedBooks] = useState<number[]>([]);
  const ActiveCatRedux = useSelector(categorieSelector);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    handleSearch();
  }, [search]);

  useEffect(() => {
    setActiveCat(ActiveCatRedux);
  }, [ActiveCatRedux]);

  useEffect(() => {
    getAllBooksFromDB();
    getFavoriteBooks();
    setActiveCat("all");
  }, []);

  useEffect(() => {
    dispatch(scroll()); // Dispatch the scroll action to auto
    dispatch(thereUser()); // Dispatch the user to true
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await initializeBooksSql();
        await InsertData();
        await getAllBooksFromDB();
        await getFavoriteBooks();
        setActiveCat("all");
      } catch (error) {
        console.error("Error initializing data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const getAllBooksFromDB = async () => {
    try {
      const booksFromDB = await getAllBooks();
      setBooks(booksFromDB || []); // Ensure booksFromDB is not undefined
    } catch (error) {
      console.error("Error fetching all books:", error);
    }
  };

  const likedBook = async (id: number) => {
    try {
      await likeBook(id);
      const updatedFavoriteBooks = await getFavoriteBooks();
      setLikedBooks(updatedFavoriteBooks);
    } catch (error) {
      console.error("Error liking book:", error);
    }
  };

  const handleSearch = async () => {
    const response = await handleSerachDB(search, activeCat);
    const searchedBooks: Book[] = response.results;
    const searchedBookIds: number[] = searchedBooks.map((book) => book.book_id);
    setSearchedBooks(searchedBookIds);
  };

  useEffect(() => {
    console.log("searchedBooks", searchedBooks);
  }, [searchedBooks]);

  useEffect(() => {
    getFavoriteBooks();
  }, [likedBook]);

  useEffect(() => {
    console.log("active cat after restart", activeCat);
  }, []);

  if (isLoading) {
    return <p>Loading...</p>; // or render a loading spinner or component
  }


  return (
    <div className="w-screen h-fit overflow-hidden flex flex-col justify-start items-center">
      <div className="w-full h-full min-h-screen top-0 overflow-hidden bg-gradient-to-r from-gray-600 to-slate-400">
        <RightSideBar />
        <h1 className=" font-extrabold text-4xl text-center mt-8 text-slate-800">
          {activeCat} books
        </h1>
        <div className=" w-full h-fit flex flex-row items-center justify-center mt-4">
          <div className=" h-fit w-52">
            <Input
              onInput={(ev) => {
                setSearch((ev.target as HTMLInputElement).value);
              }}
              className=" bg-slate-300 text-white focus:bg-slate-500 focus:scale-105 transition-all"
              placeholder="search for books"
            ></Input>
          </div>
        </div>
        <div className=" grid grid-cols-2 lg:w-3/4 lg:grid-cols-4 md:grid-cols-2 sm:w-1/2 ml-24 mt-10 gap-8 pb-8">
          {activeCat === "all" &&
            (searchedBooks.length > 0
              ? searchedBooks.map((bookId) => {
                  const book = books.find((b) => b.book_id === bookId);
                  return (
                    <motion.div
                      className="bg-slate-300 rounded-xl shadow-xl flex flex-col justify-start items-center hover:scale-105 transition-all cursor-pointer"
                      key={book!.book_id}
                      onClick={() => navigate(`/bookPage/${book!.book_id}`)}
                    >
                      <h1 className="font-bold text-xl text-slate-800 text-center mt-2 antialiased">
                        {book!.title}
                      </h1>
                      <p className="antialiased italic font-thin">
                        {book!.author}
                      </p>
                      <img
                        className="w-48 h-60 rounded-xl mb-2"
                        src={book!.image}
                        alt={book!.title}
                      />
                      <div className="flex flex-row justify-center items-center mt-2 gap-2">
                        <p>{book!.likes}</p>
                        {likedBooks.includes(book!.book_id) ? (
                          <div
                            onClick={(e) => {
                              e.stopPropagation();
                              likedBook(book!.book_id);
                            }}
                            className="rounded-full transition-all cursor-pointer w-6 h-6 flex flex-col justify-center items-center"
                          >
                            <Heart className="z-50" color="red" />
                          </div>
                        ) : (
                          <div
                            onClick={(e) => {
                              e.stopPropagation();
                              likedBook(book!.book_id);
                            }}
                            className="hover:bg-red-300 rounded-full z-50 transition-all cursor-pointer w-6 h-6 flex flex-col justify-center items-center"
                          >
                            <Heart />
                          </div>
                        )}
                      </div>
                    </motion.div>
                  );
                })
              : books.map((book) => (
                  <motion.div
                    className="bg-slate-300 rounded-xl shadow-xl flex flex-col justify-start items-center hover:scale-105 transition-all cursor-pointer"
                    key={book.book_id}
                    onClick={() => navigate(`/bookPage/${book.book_id}`)}
                  >
                    <h1 className="font-bold text-xl text-slate-800 text-center mt-2 antialiased">
                      {book.title}
                    </h1>
                    <p className="antialiased italic font-thin">
                      {book.author}
                    </p>
                    <img
                      className="w-48 h-60 rounded-xl mb-2"
                      src={book.image}
                      alt={book.title}
                    />
                    <div className="flex flex-row justify-center items-center mt-2 gap-2">
                      <p>{book.likes}</p>
                      {likedBooks.includes(book.book_id) ? (
                        <div
                          onClick={(e) => {
                            e.stopPropagation();
                            likedBook(book.book_id);
                          }}
                          className="rounded-full transition-all cursor-pointer w-6 h-6 flex flex-col justify-center items-center"
                        >
                          <Heart className="z-50" color="red" />
                        </div>
                      ) : (
                        <div
                          onClick={(e) => {
                            e.stopPropagation();
                            likedBook(book.book_id);
                          }}
                          className="hover:bg-red-300 rounded-full z-50 transition-all cursor-pointer w-6 h-6 flex flex-col justify-center items-center"
                        >
                          <Heart />
                        </div>
                      )}
                    </div>
                  </motion.div>
                )))}

          {activeCat !== "all" &&
            books
              .filter((book) => book.genre === activeCat)
              .map((book) => (
                <motion.div
                  className="bg-slate-300 rounded-xl shadow-xl flex flex-col justify-start items-center hover:scale-105 transition-all cursor-pointer"
                  key={book.book_id}
                  onClick={() => navigate(`/bookPage/${book.book_id}`)}
                >
                  <h1 className="font-bold text-xl text-slate-800 text-center mt-2 antialiased">
                    {book.title}
                  </h1>
                  <p className="antialiased italic font-thin">{book.author}</p>
                  <img
                    className="w-48 h-60 rounded-xl mb-2"
                    src={book.image}
                    alt={book.title}
                  />
                  <div className="flex flex-row justify-center items-center mt-2 gap-2">
                    <p>{book.likes}</p>
                    {likedBooks.includes(book.book_id) ? (
                      <div
                        onClick={(e) => {
                          e.stopPropagation();
                          likedBook(book.book_id);
                        }}
                        className="rounded-full transition-all cursor-pointer w-6 h-6 flex flex-col justify-center items-center"
                      >
                        <Heart className="z-50" color="red" />
                      </div>
                    ) : (
                      <div
                        onClick={(e) => {
                          e.stopPropagation();
                          likedBook(book.book_id);
                        }}
                        className="hover:bg-red-300 rounded-full z-50 transition-all cursor-pointer w-6 h-6 flex flex-col justify-center items-center"
                      >
                        <Heart />
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
        </div>
        ;
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};
export default HomePage;
