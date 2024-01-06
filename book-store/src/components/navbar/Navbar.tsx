import { useNavigate } from "react-router-dom";
import { thereUser, isUserSelector } from "../../features/user/isUserSlice";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "../ui/button";
import Logo from "../icons/svg/Logo";

const Navbar = () => {
  const isUserValue = useSelector(isUserSelector);
  const navigate = useNavigate();

  return (
    <div className="bg-gradient-to-r from-slate-400 to-gray-200 sticky z-50 top-0 inset-x-0 h-12 w-screen shadow-md">
      {isUserValue ? (
        <div className=" w-full flex flex-row h-full"></div>
      ) : (
        <div className=" w-full flex flex-row h-full items-center justify-between">
          <div className="pl-4 top-0 left-4"><Logo width={2}/></div>
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
