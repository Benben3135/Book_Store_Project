import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


// brief explanation:
// clsx: A tiny utility for constructing className strings conditionally.
// tailwind-merge: A utility for merging Tailwind CSS classes.
// cn is a  function that can take any number of arguments.
// Why It's Inside lib/utils: in frameworks like React, it's common to organize utility functions and helpers in a dedicated directory like lib/utils.