import { motion } from "framer-motion";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { categorieSelector, setActiveCategorie } from "../../features/categories/categorieSlice";
import { Categories } from "../../util/categories"; // Replace with the actual path to your enum file



const RightSideBar = () => {
  const allCategories: string[] = Object.values(Categories);
  console.log(allCategories);
  const dispatch = useDispatch();

  const handleCategoryClick = (category: string) => {
    console.log(`Category clicked: ${category}`);
    dispatch(setActiveCategorie(category))
  };

  return (
    <motion.div
      initial={{ r: 200, opacity: 0 }}
      animate={{ r: 0, opacity: 1 }}
      className="absolute right-5 w-[30%] md:w-[30%] lg:w-[10%] h-[70%] bg-slate-600 z-0 rounded-b-xl shadow-lg overflow-hidden hover:w-[15%] transition-all"
    >
      <div className="h-full flex flex-col w-full justify-start items-center">
        {allCategories.map((category, index) => (
          <motion.div
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{duration: index/25}}
          onClick={() => handleCategoryClick(category)}
          className="shadow-lg flex-row justify-center items-center flex-1 w-full hover:shadow-xl group transition-all cursor-pointer"
           key={index}>
            <h1 className= "text-zinc-100 font-semibold text-center group-hover:scale-125 transition-all">{category}</h1>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default RightSideBar;
