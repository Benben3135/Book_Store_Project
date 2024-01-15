import { useNavigate } from "react-router-dom";
import { thereUser, isUserSelector } from "../../features/user/isUserSlice";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "../ui/button";
import Logo from "../icons/svg/Logo";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { userSelector } from "@/features/user/userSlice";
import { useEffect, useState } from "react";
import { getActiveUserData } from "@/api/users/getActiveUserData";
import {
  Cloud,
  CreditCard,
  Github,
  Keyboard,
  LifeBuoy,
  LogOut,
  Mail,
  MessageSquare,
  Plus,
  PlusCircle,
  Settings,
  User,
  UserPlus,
  Users,
  LogOutIcon,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  interface UserData {
    displayName: string;
    email: string;
    uid: string;
    img?: string;
  }

  const [userData, setUserData] = useState<UserData>();
  const isUserValue = useSelector(isUserSelector);
  const user: UserData = useSelector(userSelector);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [img, setImg] = useState("");
  const [uid, setUid] = useState("");

  useEffect(() => {
    setUserData(user);
  }, [user]);

  useEffect(() => {
    userDataFromCookie();
    setUserData(user);
  }, []);

  const userDataFromCookie = async () => {
    const data = await getActiveUserData();
    console.log(data.userData);
    const userData = data.userData;
    setEmail(userData.email);
    setName(userData.name);
    setImg(userData.img);
    setUid(userData.uid);
  };

  return (
    <div className="bg-gradient-to-r from-slate-400 to-gray-200 sticky z-50 top-0 inset-x-0 h-12 w-screen shadow-md">
      {isUserValue ? (
        <div className=" w-full flex flex-row h-full items-center justify-between">
          <div
            onClick={() => navigate("/homePage")}
            className="pl-4 top-0 left-4"
          >
            <Logo width={2} />
          </div>
          <div className=" flex flex-row justify-center items-center gap-4 pr-4">
            <Button
              onClick={() => navigate(`/favorite/${uid}`)}
              className=" h-2/3 shadow-sm"
              size="sm"
              variant="third"
            >
              Favotites
            </Button>
            {userData && (
              <DropdownMenu>
                <DropdownMenuTrigger>
                  {" "}
                  <Avatar className="mr-8 hover:shadow-2xl hover:scale-110 cursor-pointer transition-all">
                    <AvatarImage src={img} alt="avatarIMG" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>{name}</DropdownMenuLabel>
                  <DropdownMenuLabel className=" font-serif font-light">
                    {email}
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                    className=" cursor-pointer"
                    onClick={() => navigate(`/profile?uid=${uid}`)}
                  >
                    <User />
                    Profile
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className=" cursor-pointer bg-red-500 text-white"
                    onClick={() => navigate(`/`)}
                  >
                    <LogOutIcon />
                    Log out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            )}
          </div>
        </div>
      ) : (
        <div className=" w-full flex flex-row h-full items-center justify-between">
          <div onClick={() => navigate("/")} className="pl-4 top-0 left-4">
            <Logo width={2} />
          </div>
          <div className=" lg:w-fit w-full justify-between lg:justify-end gap-4 flex flex-row px-8">
            <Button
              onClick={() => navigate("/register")}
              className=" h-2/3 shadow-sm"
              size="sm"
              variant="firth"
            >
              REGISTER
            </Button>
            <Button
              onClick={() => navigate("/login")}
              className=" h-2/3 shadow-sm"
              size="sm"
              variant="third"
            >
              LOGIN
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
