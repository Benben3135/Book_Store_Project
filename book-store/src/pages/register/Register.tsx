import TypingAnimation from "@/components/animations/TypingAnimation ";
import axios from "axios";
import {register} from "../../api/users/register"
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { motion } from "framer-motion";
import { ArrowRight, Minimize, Star } from "lucide-react";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { scroll } from "../../features/layout/isScrollSlice";
import { auth, provider } from "../../firebase";
import { Check, X } from "lucide-react";

const Register = () => {
  const dispatch = useDispatch();
  //allows a scrolling movement
  useEffect(() => {
    dispatch(scroll()); // Dispatch the scroll action
  }, [dispatch]);

  //use states
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [verPassword, setVerPassword] = useState<string>("");
  const [passMatch, setPassMatch] = useState<boolean>(true);
  const [showTick, setShowTick] = useState<boolean>(false);
  const [passNotMatch, setPassNotMatch] = useState<Boolean>(false);
  const [passShort, setPassShort] = useState<boolean>(false);
  const [passAnimate, setPassAnimate] = useState<boolean>(false);
  const [excistAnimate, setExcistAnimate] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    checkPass();
  }, [verPassword]);
  useEffect(() => {
    setShowTick(false);
  }, []);

  //get the email and password and register

  const handleRegister = (email: string, password: string) => {
    if (passMatch) {
      setPassNotMatch(false);
      if (password.length < 7) {
        setPassShort(true);
        setPassAnimate(true);
      }
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Registration success
          console.log("Registration successful", userCredential);
          register(userCredential.user)
          // navigate("/homePage");
        })
        .catch((error) => {
          console.error("Error during registration", error);
          setExcistAnimate(true);
        });
    } else {
      setPassNotMatch(true);
    }
  };

  const handleGoogleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // Google sign-in success
        console.log("result is", result);
        if (result) {
         registerUser(result)
        //  navigate("/homePage");
        }
      })
      .catch((error) => {
        console.error("Error signing in with email and password", error);
      });
  };

  const registerUser = async (result:any) => {
    console.log("registering user:", result.user)
    await register(result.user)
  }

  const checkPass = () => {
    if (password === verPassword) {
      setPassMatch(true);
    } else {
      setPassMatch(false);
    }
  };

  return (
    <div
      className="w-full flex flex-col items-center justify-center"
      style={{ height: "300vh" }}
    >
      {/* first page */}
      <div className=" bg-gradient-to-r from-cyan-200 to-purple-100 w-full h-screen">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ y: -100, opacity: 1, scale: 1 }}
          className=" flex flex-row items-center justify-center pt-12 w-full h-full"
        >
          <h1 className=" text-5xl sm:text-6xl tracking-tight px-4 font-bold text-gray-800 text-center">
            Welcome to a world{" "}
            <span className=" text-stone-600"> of books</span>!
          </h1>
        </motion.div>
      </div>
      {/* second page */}
      <div className=" bg-gradient-to-r from-cyan-200 to-purple-100 w-full h-screen flex flex-col justify-center items-center gap-12">
        <TypingAnimation
          text="Use our great app on your "
          highlightedText="pc, phone or tablet."
        />

        <div className=" grid grid-cols-3 grid-rows-2 w-3/4 h2/3 items-center justify-center gap-8">
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

      <div className=" bg-gradient-to-r from-cyan-200 to-purple-100 w-full h-screen flex flex-col items-center justify-start">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ y: -100, opacity: 1, scale: 1 }}
          className=" mt-40"
        >
          <h1 className="text-5xl sm:text-6xl tracking-tight px-4 font-bold text-gray-700  text-center">
            So join us in your journey of reading
          </h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ y: -100, opacity: 1, scale: 1 }}
          className=" mt-40"
        >
          <div className="bg-gradient-to-r from-gray-200 to-sky-200 w-96 h-fit p-3 rounded-lg shadow-lg overflow-hidden">
            <div className=" w-full h-full flex flex-col items-center justify-start">
              <h1 className=" text-3xl font-extrabold pt-4">REGISTER</h1>
              <form
                className=" flex flex-col gap-4 py-4"
                onSubmit={(e) => {
                  e.preventDefault(); // Prevent default form submission
                  handleRegister(email, password);
                }}
              >
                <Input
                  className=" shadow-sm bg-slate-100"
                  type="email"
                  placeholder="Email"
                  onInput={(e) => setEmail(e.currentTarget.value)}
                />
                <Input
                  className=" shadow-sm bg-slate-100"
                  type="password"
                  placeholder="Password"
                  onInput={(e) => setPassword(e.currentTarget.value)} // Update the password state
                />
                <div className=" flex flex-row items-center justify-center gap-2">
                  <Input
                    className=" shadow-sm bg-slate-100"
                    type="password"
                    placeholder="Verify Password"
                    onInput={(e) => setVerPassword(e.currentTarget.value)} // Update the password state
                    onFocus={() => setShowTick(false)}
                    onBlur={() => setShowTick(true)}
                  />
                  {passMatch ? (
                    <Check
                      className={
                        showTick ? " opacity-100" : " opacity-0 hidden"
                      }
                      color="green"
                    />
                  ) : (
                    <X
                      className={
                        showTick ? " opacity-100" : " opacity-0 hidden"
                      }
                      color="red"
                    />
                  )}
                </div>

                {passNotMatch ? (
                  <div className="">
                    <p className=" text-sm font-semibold text-muted-foreground text-red-800">
                      Psswords don't match
                    </p>
                  </div>
                ) : null}
                {passShort ? (
                  <div className="">
                    <p className=" text-sm font-semibold text-muted-foreground text-red-800">
                      Pssword too short
                    </p>
                  </div>
                ) : null}
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button
                      onClick={() => setPassAnimate(false)}
                      className={passAnimate ? " animate-pulse outline" : ""}
                      size="sm"
                      variant="secondary"
                    >
                      Password Instractions
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Password Instructios</AlertDialogTitle>
                      <AlertDialogDescription>
                        <div className=" flex flex-row items-center gap-2">
                          <Minimize /> Minimum of 8 characters
                        </div>
                        <div className=" flex flex-row items-center gap-2 pt-2">
                          <Star /> Password should contain Capital letters
                        </div>
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Continue</AlertDialogCancel>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
                <Button
                  type="submit"
                  className=" hover:scale-105 hover:font-extrabold  transition-all ease-in-out "
                >
                  SUBMIT <ArrowRight className=" ml-2" />{" "}
                </Button>

                <Separator className=" bg-gray-400 mt-4" />

                <Button
                  onClick={handleGoogleLogin}
                  className={
                    excistAnimate
                      ? "flex flex-row items-center justify-start gap-8 hover:bg-slate-500 transition-all animate-pulse outline"
                      : " flex flex-row items-center justify-start gap-8 hover:bg-slate-500 transition-all"
                  }
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="20"
                    height="20"
                    viewBox="0 0 48 48"
                  >
                    <path
                      fill="#fbc02d"
                      d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12	s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20	s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                    ></path>
                    <path
                      fill="#e53935"
                      d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039	l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                    ></path>
                    <path
                      fill="#4caf50"
                      d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                    ></path>
                    <path
                      fill="#1565c0"
                      d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                    ></path>
                  </svg>
                  Sign in with Google
                </Button>
                <Button
                  className={excistAnimate ? " animate-pulse outline" : ""}
                  onClick={() => navigate("/login")}
                  variant="firth"
                >
                  Already have a user?
                </Button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Register;
