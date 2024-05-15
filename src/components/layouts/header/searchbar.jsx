import React, { useEffect, useRef, useState } from "react";
import { GrSearch } from "react-icons/gr";
import { IoMdClose } from "react-icons/io";

const Searchbar = ({ searchbarOpen, handleSearchbar }) => {
  const searchRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  useEffect(() => {
    if (searchbarOpen && searchRef.current) {
      searchRef.current.focus();
    }
    // for scroll position get
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [searchbarOpen]);

  return (
    <>
      <div
        className={`fixed xxs:top-20 bg-white ${
          scrollPosition > 40 ? "top-[85px]" : "top-[125px]"
        }  px-4 inset-0 overflow-hidden z-50 `}
      >
        {/* Content above the overlay */}
        <div
          className={`absolute bottom-0 left-0 w-full ${
            scrollPosition > 40 ? "h-[84%]" : "h-[82%]"
          }   bg-black bg-opacity-50`}
        ></div>

        <div
          className={`mx-auto ${
            scrollPosition > 40 ? "p-2" : "py-0 border-t"
          }   `}
        >
          {/* Set width to screen width */}
          <div className="bg-white w-full max-w-full  p-4  ">
            <div className="flex items-center">
              <GrSearch size={25} />
              <input
                type="text"
                ref={searchRef}
                placeholder="search..."
                className="w-full border-none !focus:outline-none outline-none focus:border-none focus:ring-0"
              />
              <IoMdClose
                size={25}
                onClick={handleSearchbar}
                className="cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Searchbar;
