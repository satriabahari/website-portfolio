import React, { useState } from "react";
import { Pop } from "./Pop";

export const Hamburger = () => {
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      {open && (
        <>
          <div>
            <button className="space-y-1.5 sm:hidden mt-1" onClick={handleClick}>
              <span className="block h-0.5 w-7 bg-primary dark:bg-white"></span>
              <span className="block h-0.5 w-7 bg-primary dark:bg-white"></span>
              <span className="block h-0.5 w-7 bg-primary dark:bg-white"></span>
            </button>
          </div>
          <Pop
            animate={{ opacity: 0, x: 100 }}
            initial={{ opacity: 1, x: 0 }}
          />
        </>
      )}
      {!open && (
        <>
          <div>
            <button className="space-y-4 sm:hidden mt-1" onClick={handleClick}>
              <span className="block h-0.5 w-7 origin-top-right -rotate-[42deg] bg-primary dark:bg-white"></span>
              <span className="block h-0.5 w-7 origin-bottom-right rotate-[42deg] bg-primary dark:bg-white"></span>
            </button>
          </div>
          <Pop
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
          />
        </>
      )}
    </>
  );
};
