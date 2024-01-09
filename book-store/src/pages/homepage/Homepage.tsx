import { useDispatch } from "react-redux";
import { scroll } from "../../features/layout/isScrollSlice";
import { useEffect } from "react";
import {thereUser} from "../../features/user/isUserSlice"
import RightSideBar from "@/components/RightSideBar/RightSideBar";
import Footer from "@/components/footer/Footer";
import {initializeSql} from "../../api/insertData/initializeSql"

const HomePage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    initializeSql()
  },[])

  useEffect(() => {
    dispatch(scroll()); // Dispatch the scroll action to auto
    dispatch(thereUser()) // Dispatch the user to true
  }, []);

  return (
    <div className="w-screen h-fit overflow-hidden flex flex-col justify-start items-center">
      <div className="w-full h-screen top-0 overflow-hidden bg-gradient-to-r from-gray-600 to-slate-400">
        <RightSideBar/>

      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
