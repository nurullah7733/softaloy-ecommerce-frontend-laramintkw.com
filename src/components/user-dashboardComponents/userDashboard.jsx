import { useEffect, useState } from "react";
import { RiDashboardFill } from "react-icons/ri";
import { FaUserEdit } from "react-icons/fa";
import { GiReturnArrow } from "react-icons/gi";
import { MdCancelScheduleSend } from "react-icons/md";
import { BsFillCartCheckFill } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { getUserData } from "../../../utils/sessionHelper/sessionHelper";
import { Link } from "react-router-dom";
import { useWindowSize } from "../../../utils/windowSize/useWindowSize";

const UserDashboard = () => {
  const [open, setOpen] = useState(true);
  const windowSize = useWindowSize();
  useEffect(() => {
    windowSize.width < 768 ? setOpen(false) : setOpen(true);
  }, [windowSize.width]);
  const pathname = window.location.pathname;

  return (
    <div className="flex">
      <div
        className={` ${open ? "w-64" : "w-20"} ${
          open ? "pt-[9px]" : "pt-2.5"
        }  p-5 min-h-[500px]  relative duration-300 border-r`}
      >
        <img
          src="/control.png"
          className={`absolute   cursor-pointer -right-3 top-5 w-7  ${
            !open && "rotate-180"
          }`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex items-center gap-x-2">
          {open ? (
            //   client only
            <div>
              <img
                src={getUserData()?.photo[0]?.secure_url}
                alt="user"
                className={`cursor-pointer duration-500  rounded-[50%] w-14 h-14 ${
                  !open && "hidden"
                }`}
              />
            </div>
          ) : (
            <img
              alt="user"
              src={getUserData()?.photo[0]?.secure_url}
              width={56}
              height={56}
              className={`cursor-pointer duration-500  rounded-[50%] w-14 h-14 `}
            />
          )}
          {/* clientonly */}
          <h1
            className={`text-black origin-left font-medium text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            {getUserData()?.firstName + " " + getUserData()?.lastName}
          </h1>
        </div>
        <ul className="pt-6 ">
          <li
            className={`flex rounded-md p-2 cursor-pointer  hover:bg-gray-100  text-md items-center gap-x-4 ${
              pathname === "/user-dashboard" && "bg-gray-100"
            }`}
          >
            <Link to="/user-dashboard">
              <RiDashboardFill size={20} />
            </Link>
            <Link
              to="/user-dashboard"
              className={`${!open && "hidden"} origin-left duration-200`}
            >
              Dashobard
            </Link>
          </li>

          <li
            className={`flex rounded-md p-2 cursor-pointer  hover:bg-gray-100  text-md items-center gap-x-4 ${
              pathname === "/user-dashboard/running-orders" && "bg-gray-100"
            }`}
          >
            <Link to="/user-dashboard/orders/running-orders">
              <TbTruckDelivery size={20} />
            </Link>
            <Link
              to="/user-dashboard/orders/running-orders"
              exact
              className={`${!open && "hidden"} origin-left duration-200`}
            >
              Running orders
            </Link>
          </li>

          <li
            className={`flex rounded-md p-2 cursor-pointer  hover:bg-gray-100  text-md items-center gap-x-4 ${
              pathname === "/user-dashboard/orders/delivery-orders" &&
              "bg-gray-100"
            }`}
          >
            <Link to="/user-dashboard/orders/delivery-orders">
              <BsFillCartCheckFill size={20} />
            </Link>
            <Link
              to="/user-dashboard/orders/delivery-orders"
              exact
              className={`${!open && "hidden"} origin-left duration-200`}
            >
              Delivery orders
            </Link>
          </li>

          <li
            className={`flex rounded-md p-2 cursor-pointer  hover:bg-gray-100  text-md items-center gap-x-4 ${
              pathname === "/user-dashboard/orders/return-orders" &&
              "bg-gray-100"
            }`}
          >
            <Link to="/user-dashboard/orders/return-orders">
              <GiReturnArrow size={20} />
            </Link>
            <Link
              to="/user-dashboard/orders/return-orders"
              exact
              className={`${!open && "hidden"} origin-left duration-200`}
            >
              Return Orders
            </Link>
          </li>
          <li
            className={`flex rounded-md p-2 cursor-pointer  hover:bg-gray-100  text-md items-center gap-x-4 ${
              pathname === "/user-dashboard/orders/cancel-orders" &&
              "bg-gray-100"
            }`}
          >
            <Link href="/user-dashboard/orders/cancel-orders">
              <MdCancelScheduleSend size={20} />
            </Link>
            <Link
              href="/user-dashboard/orders/cancel-orders"
              exact
              className={`${!open && "hidden"} origin-left duration-200`}
            >
              Cancelled Orders
            </Link>
          </li>
        </ul>
      </div>
      <div className="w-full ">
        <div>
          <div>
            <h1 className="w-full md:text-xl dark:bg-gray-700 px-5 py-3.5 text-3xl border-b text-black  ">
              Edit Profile
            </h1>
          </div>
          <div className="p-5">
            <div className="flex justify-between md:items-start items-center gap-3  sm:flex-nowrap sm:flex-col  ">
              <div className="sm:mb-5">
                <img
                  alt="user"
                  src={getUserData()?.photo[0]?.secure_url}
                  width={100}
                  height={100}
                  className={`cursor-pointer duration-500  rounded-md `}
                />
                <center>
                  <h4 className="w-full text-sm   text-black    ">
                    {getUserData()?.firstName + " " + getUserData()?.lastName}
                  </h4>
                </center>
              </div>
              <div>
                <h4 className="w-full text-sm     border-b text-black  ">
                  Full Name
                </h4>
                <h1 className="w-full text-xl  text-black  ">
                  {getUserData()?.firstName + " " + getUserData()?.lastName}
                </h1>
              </div>
              <div>
                <h4 className="w-full text-sm     border-b text-black  ">
                  Email
                </h4>
                <h1 className="w-full text-xl  text-black  ">
                  {getUserData()?.email}
                </h1>
              </div>
              {getUserData()?.phone && (
                <div>
                  <h4 className="w-full text-sm     border-b text-black  ">
                    Phone
                  </h4>
                  <h1 className="w-full text-xl  text-black  ">
                    {getUserData()?.phone}
                  </h1>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
