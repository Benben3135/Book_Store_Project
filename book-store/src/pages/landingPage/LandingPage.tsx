import { useEffect, useState } from "react";
import { Ghost } from "lucide-react";
import LandImage from "../../components/images/LandImage";
import { Button, buttonVariants } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { noScroll } from "../../features/layout/isScrollSlice";
import {thereNoUser} from "../../features/user/isUserSlice";
import {initializeBooksSql, initializeUserSql , initialFavoriteSql , intialReviewsSql} from "../../api/insertData/initializeSql.ts"
import InsertData from "@/api/insertData/InsertData.tsx";

const LandingPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(noScroll()); // Dispatch the scroll action
    dispatch(thereNoUser())
    initializeUserSql();
    initializeBooksSql();
    initialFavoriteSql();
    intialReviewsSql();
  }, []);


  return (
    <div className=" h-full w-full bg-gradient-to-r from-purple-100 to-blue-200 group">
      <div className=" py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
        <h1 className=" font-sans antialiased text-4xl font-bold tracking-tight text-primary sm:text-6xl">
          Welcome to the best books library{" "}
          <span className=" text-sky-500">out there</span>!
        </h1>
        {/* TODO: change site name */}
        <p className=" mt-6 text-lg max-w-prose text-muted-foreground mx-2">
          Welcome to Booksite We have the largest collection of modern, classic,
          and other genre books.
        </p>
      </div>
      <div className=" h-3/4 md:h-1/3 mx-auto bg-gradient-to-r from-sky-300 to-blue-200 flex flex-col md:justify-center items-center justify-start shadow-lg">
        <div className="flex flex-col md:flex-row gap-4 md:py-0 py-2">
          {/* TODO: change those images to our real app images */}
          <LandImage src="../../../public/images/2250768_3M_Cloud_Library_Web_Patron.jpg" />
          <LandImage src="../../../public/images/Google-Play-Books.jpg" />
          <LandImage src="../../../public/images/unnamed.webp" />
          <div className=" md:hidden block"></div>
        </div>
      </div>
      <div className=" hidden md:flex flex-row w-full items-center justify-center py-8">
        <div className=" flex flex-row w-1/3 items-center justify-center gap-4">
          <Button
            onClick={() => navigate("/login")}
            variant="secondary"
            className=" w-64 font-sans font-bold antialiased"
          >
            Jump inside your library!
          </Button>
          <Button
            onClick={() => navigate("/register")}
            variant="default"
            className=" w-64 font-sans font-bold antialiased"
          >
            Don't have a library?
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
