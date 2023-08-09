import React from "react";

const Header = () => {
  return (
    <header className="flex justify-around h-24 items-center">
      <div>
        <h1 className="uppercase tracking-[1rem] font-black text-[25px] text-shadow-[4px_4px_10px_#6366f1]">Logo</h1>
      </div>
      <div>
        <nav>
          <ul className="flex gap-10">
            <li>Home</li>
            <li>About</li>
            <li>Shop
              <ul className="hidden">
                <li>Online</li>
                <li>Time</li>
              </ul>
            </li>
            <li>Contact Us</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
