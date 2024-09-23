import React, { useState, useEffect } from "react";
import { getPopupNotificationRequest } from "../../APIRequest/getPopupNotificationImg";
import { Link } from "react-router-dom";

const PopupNotification = () => {
  const [popupNotificationData, setPopupNotificationData] = useState([]);
  const [isPopupVisible, setPopupVisible] = useState(false);

  // Show the popup when the component mounts
  useEffect(() => {
    const isPopupShown = localStorage.getItem("isPopupShown");

    const fetchPopupNotificationData = async () => {
      const data = await getPopupNotificationRequest();
      setPopupNotificationData(data);
    };
    fetchPopupNotificationData();
    if (!isPopupShown) {
      setPopupVisible(true);
      localStorage.setItem("isPopupShown", "true");
    }
  }, []);

  // Close the popup
  const closePopup = () => {
    setPopupVisible(false);
  };

  return (
    <>
      {isPopupVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="relative rounded-lg shadow-lg max-w-2xl w-full text-center">
            <button
              className="absolute top-0 right-0 bg-gray-300/30 flex items-center justify-center rounded-md w-10 h-10 text-black hover:text-gray-800 text-2xl  "
              onClick={closePopup}
            >
              &times;
            </button>
            <Link to={popupNotificationData?.[0]?.link}>
              <img
                src={popupNotificationData?.[0]?.img?.[0]?.secure_url}
                alt="Notification"
                className="w-full h-auto rounded-md mb-4 "
              />
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default PopupNotification;
