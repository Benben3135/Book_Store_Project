import { getActiveUserData } from "@/api/users/getActiveUserData";
import { deleteUser } from "../../api/users/delete";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { noScroll } from "../../features/layout/isScrollSlice";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Frown } from "lucide-react";
import { useNavigate } from "react-router-dom";
import {changeNameServer} from "../../api/users/changeName"
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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AlertDialogAction } from "@radix-ui/react-alert-dialog";
import { DialogClose } from "@radix-ui/react-dialog";
const Profile = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [img, setImg] = useState("");
  const [uid, setUid] = useState("");
  const [newName, setNewName] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(noScroll()); // Dispatch the scroll action
  }, [dispatch]);
  useEffect(() => {
    userDataFromCookie();
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
  const handleDeleteUser = async (id: string) => {
    const result = await deleteUser(id);
    console.log(result);
    navigate("/");
  };
  const changeName = async () => {
    const newNameChange = newName;
    const result = await changeNameServer(newNameChange , uid);
    userDataFromCookie()
    console.log(result)
  }

  return (
    <div className=" h-full w-full bg-gradient-to-r from-sky-200 to-purple-300 flex flex-col justify-center items-center">
      <motion.div
        initial={{ y: 200, opacity: 0, scale: 0 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        className=" shadow-xl bg-slate-300 w-96 h-96 rounded-lg flex flex-col justify-start items-center antialiased gap-2"
      >
        <img src={img} className=" rounded-full pt-4" alt="" />
        <h1 className=" pt-2 font-bold text-3xl text-slate-900">{name}</h1>
        <h2 className=" font-light text-lg text-slate-700">{email}</h2>
        <Dialog>
          <DialogTrigger asChild>
          <Button variant="firth">Change display name</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Edit profile</DialogTitle>
              <DialogDescription>
                Make changes to your profile here. Click save when you're done.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input
                  id="name"
                  defaultValue={name}
                  className="col-span-3"
                  onInput={(ev) => {
                    setNewName((ev.target as HTMLInputElement).value);
                  }}
                />
              </div>
            </div>
            <DialogClose>
              <Button type="submit" onClick={() => changeName()}>Save changes</Button>
            </DialogClose>
          </DialogContent>
        </Dialog>
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="destructive">Delete User</Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Sure you are leaving us?</AlertDialogTitle>
              <AlertDialogDescription>
                <div>
                  <Frown />
                  <h1>notice that you cannot cancel after deleting a user! </h1>
                </div>
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>cancel</AlertDialogCancel>
              <AlertDialogAction onClick={() => handleDeleteUser(uid)}>
                delete
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
        <h3 className=" text-muted-foreground pt-8">uid: {uid}</h3>
      </motion.div>
    </div>
  );
};

export default Profile;
