import { Icons } from "../Icons/Icons";
import MaxWidthWrapper from "../MaxWidthWrapper";

const NavBar = () => {
  return (
    <div className=" bg-white sticky z-50 top-0 inset-x-0 h-16">
      <header className=" relative bg-white">
        <MaxWidthWrapper>
          <div className=" border-b border-gray-200"></div>
        </MaxWidthWrapper>
      </header>
    </div>
  );
};
