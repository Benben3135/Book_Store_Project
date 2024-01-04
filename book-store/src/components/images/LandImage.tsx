import React, { FC } from "react";

interface ImageProps {
  src: string;
}

const LandImage: FC<ImageProps> = ({ src }) => {
  return (
    <div className=" flex flex-col justify-center items-center w-50 h-36 lg:w-[20vw] lg:h-76">
      <img
        className=" hover:scale-[1.5] transition-all shadow-md h-full w-full object-cover rounded-md"
        src={src}
        alt=""
      />
    </div>
  );
};

export default LandImage;
