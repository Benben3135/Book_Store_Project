import { motion } from "framer-motion";

const RightSideBar = () => {
    return ( 
        <motion.div
        initial={{r:200, opacity:0}}
        animate={{r:0, opacity:1}}
        className="absolute right-5 w-[10%] h-[70%] bg-slate-600 z-0 rounded-b-xl shadow-lg overflow-hidden hover:w-[15%] transition-all">

        </motion.div>
     );
}
 
export default RightSideBar;