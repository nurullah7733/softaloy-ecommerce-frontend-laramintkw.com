import React, { useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

const Accordion = ({ title, content, isOpen = true }) => {
  const [expanded, setExpanded] = useState(isOpen);
  const toggleExpanded = () => setExpanded((current) => !current);

  return (
    <div className="my-2 cursor-pointer sm:my-4 md:my-6">
      <div
        className="flex items-center justify-between"
        onClick={toggleExpanded}
      >
        <div className="">{title}</div>
        <div className="flex-none pl-2">
          {expanded ? <MdKeyboardArrowDown /> : <MdKeyboardArrowUp />}
        </div>
      </div>
      <div
        className={` overflow-hidden transition-[min-height] duration-200 ease-in ${
          expanded ? "min-h-max" : "max-h-0"
        }`}
      >
        <div className=""> {content}</div>
      </div>
    </div>
  );
};

export default Accordion;
