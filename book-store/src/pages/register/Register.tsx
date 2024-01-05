import { motion } from "framer-motion";

const Register = () => {
  return (
    <div className=" bg-gradient-to-r from-cyan-200 to-purple-100 w-full h-full">
      <motion.div
      variants={{
        initial:{
            opacity:"0",y:"200"
        },
        inView: {
            opacity:"1",y:"0"
        }
      }}
      initial= "initial"
      whileInView= "inView"
      transition={{duration:1}}
      

      >
        <div className=" flex flex-row items-center justify-center pt-12 w-full h-full">
          <h1 className=" text-5xl sm:text-6xl tracking-tight px-4 font-bold text-gray-800 ">
            Welcome to a world{" "}
            <span className=" text-stone-600"> of books</span>!
          </h1>
        </div>
      </motion.div>
    </div>
  );
};

export default Register;
