import { motion } from "framer-motion";
import LandImage from "@/components/images/LandImage";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { scroll } from "../../features/layout/isScrollSlice";

import imag from "../../../public/images/iphone-book-list-ipad-book-list-3_1-1024x755.webp"

const Register = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(scroll()); // Dispatch the scroll action
  }, [dispatch]);

  return (
    <div className="w-full" style={{ height: "400vh" }}>
      {/* first page */}
      <div className=" bg-gradient-to-r from-cyan-200 to-purple-100 w-full h-screen">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ y: -100, opacity: 1, scale: 1 }}
          className=" flex flex-row items-center justify-center pt-12 w-full h-full"
        >
          <h1 className=" text-5xl sm:text-6xl tracking-tight px-4 font-bold text-gray-800 ">
            Welcome to a world{" "}
            <span className=" text-stone-600"> of books</span>!
          </h1>
        </motion.div>
      </div>
      {/* second page */}

      <div className=" bg-gradient-to-r from-cyan-200 to-purple-100 w-full h-screen flex flex-col justify-center items-center">
        <div className=" grid grid-cols-3 grid-rows-2 w-2/3 h2/3 items-center justify-center gap-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <img
              className=" w-full rounded-lg h-full"
              src="../../../public/images/2250768_3M_Cloud_Library_Web_Patron.jpg"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <img
              className=" w-full rounded-lg h-full"
              src="../../../public/images/Google-Play-Books.jpg"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <img
              className=" w-full rounded-lg h-full"
              src="../../../public/images/unnamed.webp"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6 }}
          >
            <img
              className=" w-full rounded-lg h-full"
              src="../../../public/images/2020-01-31-12-14-24.png"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
          >
            <img
              className=" w-full rounded-lg h-full"
              src="../../../public/images/3f816df6-2edb-445b-b245-612df0512c8f.png"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.4 }}
          >
            <img
              className=" w-full rounded-lg h-full"
              src="../../../public/images/iphone-book-list-ipad-book-list-3_1-1024x755.webp"
            />
          </motion.div>

        </div>
      </div>

      {/* third page */}

      <div className=" bg-gradient-to-r from-cyan-200 to-purple-100 w-full h-screen"></div>

      {/* firth page */}

      <div className=" bg-gradient-to-r from-cyan-200 to-purple-100 w-full h-screen"></div>
    </div>
  );
};

export default Register;
