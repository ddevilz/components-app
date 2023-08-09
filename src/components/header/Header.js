import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className=" flex justify-around h-24 items-center cursor-pointer">
      <div>
        <h1 className="mx-[30px] uppercase tracking-[1rem] font-black text-[25px] text-shadow-[4px_4px_10px_#6366f1]">
          Logo
        </h1>
      </div>

      <div className="relative">
        <nav >
          <FiMenu className="md:hidden mx-12" onClick={() => setOpen(!open)} />
          <ul
            className={`${
              open ? "block w-full absolute bottom-[-10rem] md:relative md:bottom-[-5px]" : "hidden"
            }  text-center md:flex gap-10`}
          >
            <li className="my-2 block">Home</li>
            <li className="my-2 block">About</li>
            <li className="my-2 block">Shop</li>
            <li className="my-2 block">Contact Us</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
