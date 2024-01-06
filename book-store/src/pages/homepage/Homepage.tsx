import { useDispatch } from "react-redux";
import { noScroll } from "../../features/layout/isScrollSlice";

import { useEffect } from "react";

import RightSideBar from "@/components/RightSideBar/RightSideBar";
import Footer from "@/components/footer/Footer";

const HomePage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(noScroll()); // Dispatch the scroll action
  }, []);
 
  return (
    <div className=" bg-gradient-to-r from-gray-600 to-slate-400 w-full h-[150vh] min-h-screen top-0 overflow-hidden">
      <RightSideBar/>
      <Footer/>
    </div>
  );
};

export default HomePage;
