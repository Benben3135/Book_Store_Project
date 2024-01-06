import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { noScroll } from "../../features/layout/isScrollSlice";
import { setNewUserEmail, setNewUserID, setNewUserdisplayName } from "../../features/user/userSlice";
import { auth, provider } from "../../firebase";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [emailWrong, setEmailWrong] = useState<boolean>(false);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(noScroll()); // Dispatch the scroll action
  }, [dispatch]);

  useEffect(() => {
    console.log(emailWrong);
  }, [emailWrong]);

interface User{
  uid:string,
  email:string,
  displayName:string
}

  const handleGoogleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log("result is", result);

        if (result && result.user.uid && result.user.email && result.user.displayName) {
          const user:User = {
            uid: result.user.uid,
            email: result.user.email,
            displayName: result.user.displayName,
          }
          sendUserToRedux(user)
        }
      })
      .catch((error) => {
        console.error("Error signing in with email and password", error);
      });
  };

  const sendUserToRedux = (user:User) => {
    dispatch(setNewUserID(user.uid))
    dispatch((setNewUserEmail(user.email)))
    dispatch((setNewUserdisplayName(user.displayName)))
    navigate("/homePage")
  }

  const handleEmailLogin = (email: string, password: string) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        if(userCredential){
          console.log(userCredential);
          
        }
      })
      .catch((error) => {
        setEmailWrong(true);
      });
  };

  return (
    <div className=" h-full w-full bg-gradient-to-r from-purple-100 to-blue-200 group overflow-hidden flex flex-col justify-center items-center">
      <motion.div
       initial={{y:100, opacity:0}}
       animate={{y:0,opacity:1}}
       transition={{duration:0.2}}
      className="bg-gradient-to-r from-gray-200 to-sky-200 w-96 h-fit p-3 rounded-lg shadow-lg overflow-hidden">
        <div className="flex flex-col items-center justify-start">
          <h1 className=" text-3xl font-extrabold pt-4">LOGIN</h1>
          <div
          className=" h-fit w-3/4 pt-8">
            <form
              className=" flex flex-col gap-4 py-4"
              onSubmit={(e) => {
                e.preventDefault(); // Prevent default form submission
                handleEmailLogin(email, password);
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

              {emailWrong ? (
                <div className="">
                  <p className=" text-sm font-semibold text-muted-foreground text-red-800">
                    Email ot password don't match a user
                  </p>
                </div>
              ) : null}

              
              <Button
                type="submit"
                className=" hover:scale-105 hover:font-extrabold  transition-all ease-in-out "
              >
                SUBMIT <ArrowRight className=" ml-2" />{" "}
              </Button>

              <Separator className=" bg-gray-400 mt-4" />

              <Button
                onClick={handleGoogleLogin}
                className=" flex flex-row items-center justify-start gap-8 hover:bg-slate-500 transition-all"
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
              <Button onClick={() => navigate("/register")} variant="ghost">
                Don't have an user yet?
              </Button>
            </form>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;

{
}
