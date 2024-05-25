import toast from "react-hot-toast";

export const successAlert = (message) => {
  toast.success(message, {
    style: {
      border: "1px solid #713200",
      padding: "16px",
      color: "#713200",
    },
  });
};

export const errorAlert = (message) => {
  toast.error(message, {
    style: { border: "1px solid #713200", padding: "16px", color: "#713200" },
  });
};
