import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Send } from "lucide-react";
import { addCommentToDB } from "@/api/books/addComment";



const Review = () => {
  const [comment, setComment] = useState<string>("");
  useEffect(() => {
    console.log(comment);
  }, [comment]);

  const addComment = async () => {
    const response = await addCommentToDB(comment);
    console.log(response) 
  }

  return (
    <div></div>
  );
};

export default Review;
