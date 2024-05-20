import React, { useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import LoadingFilter from "../collectionsPageComponents/filter/loading/loadingFilter";

const Accordion = ({ title, content, isOpen = false, loading = false }) => {
  const [expanded, setExpanded] = useState(isOpen);
  const toggleExpanded = () => setExpanded((current) => !current);

  return (
    <div className=" cursor-pointer sm:my-4 md:my-6">
      <div
        className={`flex items-center justify-between border-b  ${
          expanded && "bg-gray-100"
        }  px-2 py-3`}
        onClick={toggleExpanded}
      >
        {loading ? (
          <LoadingFilter />
        ) : (
          <>
            <div className="text-lg text-gray-600">{title}</div>
            <div className="flex-none pl-2">
              {expanded ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
            </div>
          </>
        )}
      </div>
      <div
        className={` overflow-hidden transition-[min-height] duration-200 ease-in ${
          expanded ? "min-h-max" : "max-h-0"
        }`}
      >
        <div className="text-gray-500"> {content}</div>
      </div>
    </div>
  );
};

export default Accordion;
